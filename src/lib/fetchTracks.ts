const apiToken: string = 'BQAjDRmw_vgOR3NBc_OT822-998Qjy3Wc-ZpbJg2iKYxUUxa-oV9mGWC45NvyIcjTXh3nz64B4Nk0XxEw6Ckc1twV8LogGPSeajpbDcFGpsXyXVR8ETTnN97GbbReVvH0mLCnJeVFPOBcHEFKsS9mUNen-x0zrKX2RWlYSuB7wpmXgrsqgt2UUk7XvNn7vcFRLNgCLpkDHrChA452F5wei2Z2cSciQ';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: unknown[] };
  console.log(data.items)
  return data.items;
};