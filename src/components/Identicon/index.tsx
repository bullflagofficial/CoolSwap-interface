import { useEffect, useRef } from 'react';

import styled from 'styled-components';

import { useActiveWeb3React } from '../../hooks';
// import Jazzicon from 'jazzicon';
import Jazzicon from 'react-jazzicon';

const StyledIdenticonContainer = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 1.125rem;
  background-color: ${({ theme }) => theme.bg4};
`;

export default function Identicon() {
  const ref = useRef<HTMLDivElement>();

  const { account } = useActiveWeb3React();

  useEffect(() => {
    if (account && ref.current) {
      // eslint-disable-next-line react/react-in-jsx-scope
      const htmlNode = <Jazzicon diameter={16} seed={parseInt(account.slice(2, 10), 16)} />;
      ref.current.innerHTML = '';
      //ref.current.appendChild(Jazzicon(16, parseInt(account.slice(2, 10), 16)));
      ref.current.appendChild(htmlNode as unknown as Node);
    }
  }, [account]);

  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
  return <StyledIdenticonContainer ref={ref as any} />;
}
