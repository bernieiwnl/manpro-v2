import { default as dayjs } from 'dayjs';

export const formatDate = (date: number) => dayjs(date).format('D MMMM YYYY');
export const formatDateTime = (date: number) => dayjs(date).format('D MMMM YYYY  h:mm A');
