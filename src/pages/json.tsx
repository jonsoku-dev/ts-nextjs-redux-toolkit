import React from 'react';
import { useActions } from '@/store/hooks';

interface Props {}

const JsonPage: React.FC<Props> = () => {
  const { fetchAllTodosAction } = useActions();

  return (
    <div>
      <button type="button" onClick={() => fetchAllTodosAction()}>
        Button
      </button>
    </div>
  );
};

export default JsonPage;
