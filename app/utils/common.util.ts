
export const fetchData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  const responseText = await response.text();
  const fixedResponseText = responseText.replace(/(\w+):/g, '"$1":').replace(/,\n/g, ",");
  return JSON.parse(fixedResponseText) as T;
};