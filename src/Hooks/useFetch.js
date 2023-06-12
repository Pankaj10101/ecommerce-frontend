import { useEffect, useState, useCallback } from "react";
import { fetchDataFromApi } from '../store/api';

const useFetch = (endPoint) => {
  const [data, setData] = useState();

  const makeApiCall = useCallback(async () => {
    const res = await fetchDataFromApi(endPoint);
    setData(res);
  }, [endPoint]);

  useEffect(() => {
    makeApiCall();
  }, [makeApiCall]);

  return { data };
};

export default useFetch;
