import { Statsig } from "statsig-js";

export async function initStatsig() {
  await Statsig.initialize("client-<YOUR_CLIENT_SDK_KEY>");
}