> Release-pinned source for NetBird v0.77.0: [netbirdio/docs@abb8d4607fd4a1260c80bcdad1493e92941e1837:src/pages/help/troubleshooting-client/android.mdx](https://github.com/netbirdio/docs/blob/abb8d4607fd4a1260c80bcdad1493e92941e1837/src/pages/help/troubleshooting-client/android.mdx)

# NetBird client on Android

Android-specific steps for the NetBird client. For everything cross-platform (client status, connectivity, login, and DNS), start from [Troubleshooting client issues](https://docs.netbird.io/help/troubleshooting-client).

## Enable trace logs and capture them with ADB

1. Enable **ADB** in the device's developer options.
2. In the NetBird app, set the **Trace** log level (a checkbox in the advanced menu).
3. Install the ADB platform tools (part of the [SDK platform-tools](https://developer.android.com/tools/releases/platform-tools) pack), then capture the logs. On Linux:

```shell
sudo adb logcat -v time | grep GoLog
```
