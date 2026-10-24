> Pinned source for NetBird v0.81.4: [netbirdio/docs@238224712cf7639036ed39fa8873d777b8822273:src/pages/help/troubleshooting-client/android.mdx](https://github.com/netbirdio/docs/blob/238224712cf7639036ed39fa8873d777b8822273/src/pages/help/troubleshooting-client/android.mdx)

# NetBird client on Android

Android-specific steps for the NetBird client. For everything cross-platform (client status, connectivity, login, and DNS), start from [Troubleshooting client issues](https://docs.netbird.io/help/troubleshooting-client).

## Enable trace logs and capture them with ADB

1. Enable **ADB** in the device's developer options.
2. In the NetBird app, set the **Trace** log level (a checkbox in the advanced menu).
3. Install the ADB platform tools (part of the [SDK platform-tools](https://developer.android.com/tools/releases/platform-tools) pack), then capture the logs. On Linux:

```shell
sudo adb logcat -v time | grep GoLog
```
