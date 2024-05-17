// script.js
import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 3,
  duration: '1s',
};

const BASE_URL = 'https://test-api.k6.io';

export default function () {
  const res = http.get(`${BASE_URL}/public/crocodiles/`);
  check(res, {'status was 200': (r) => r.status == 200});
}

