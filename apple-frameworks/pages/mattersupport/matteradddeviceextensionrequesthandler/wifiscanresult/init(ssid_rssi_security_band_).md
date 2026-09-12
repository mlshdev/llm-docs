> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mattersupport/matteradddeviceextensionrequesthandler/wifiscanresult/init(ssid:rssi:security:band:)](https://developer.apple.com/documentation/mattersupport/matteradddeviceextensionrequesthandler/wifiscanresult/init(ssid:rssi:security:band:))

# init(ssid:rssi:security:band:)

**Framework:** MatterSupport  
**Kind:** Initializer  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 14.0+ · visionOS

Creates a new instance of the request handler.

## Declaration

```swift
init(ssid: Data, rssi: Int8, security: MTRNetworkCommissioningWiFiSecurity, band: MTRNetworkCommissioningWiFiBand)
```

## Parameters

- `ssid`: The SSID of the Wi-Fi network.
- `rssi`: The device-observed RSSI of the network.
- `security`: The security method used to secure the Wi-Fi network.
- `band`: The band for the Wi-Fi network.
