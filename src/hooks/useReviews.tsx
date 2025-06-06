import { useQuery } from "@tanstack/react-query";
import axiosSecure from "./useAxios";

const useReview = (
  queryParams?: Record<string, string | boolean | undefined>
) => {
  const queryString = queryParams
    ? `?${new URLSearchParams(
        Object.fromEntries(
          Object.entries(queryParams).filter(
            ([_, value]) => value !== undefined && value !== ""
          )
        ) as Record<string, string>
      ).toString()}`
    : "";
  const {
    data: reviewData = [],
    isLoading: reviewLoading,
    refetch: reviewRefetch,
  } = useQuery({
    queryKey: ["reviewData", queryParams],
    queryFn: async () => {
      const res = await axiosSecure.get(`/review/findReview${queryString}`);
      return res.data?.data;
    },
  });

  return { reviewData, reviewLoading, reviewRefetch };
};

export default useReview;
