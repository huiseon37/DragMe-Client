import { useQuery } from 'react-query';
import { getMonthlyGoalData } from 'src/lib/api/weekApi';
import { StartDateQuery } from 'src/types/week';

const useGetMonthlyGoalData = ({ startDate }: StartDateQuery) =>
  useQuery(
    ['weeklyGoal', startDate],
    async () =>
      getMonthlyGoalData({
        startDate,
      }),
    {
      select: (data) => data.data,
      keepPreviousData: true,
      useErrorBoundary: true,
      retry: 0,
      suspense: false,
    },
  );

export default useGetMonthlyGoalData;
