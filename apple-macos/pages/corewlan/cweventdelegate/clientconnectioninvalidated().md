> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cweventdelegate/clientconnectioninvalidated()](https://developer.apple.com/documentation/corewlan/cweventdelegate/clientconnectioninvalidated())

# clientConnectionInvalidated() (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

Tells the delegate that the connection to the Wi-Fi subsystem is permanently invalidated.

## Declaration

```swift
optional func clientConnectionInvalidated()
```

## See Also

### Instance Methods

- [bssidDidChangeForWiFiInterface(withName:)](bssiddidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the current BSSID has changed.
- [clientConnectionInterrupted()](clientconnectioninterrupted%28%29.md): Tells the delegate that the connection to the Wi-Fi subsystem is temporarily interrupted.
- [countryCodeDidChangeForWiFiInterface(withName:)](countrycodedidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the currently adopted country code has changed.
- [linkDidChangeForWiFiInterface(withName:)](linkdidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the Wi-Fi link state changed.
- [linkQualityDidChangeForWiFiInterface(withName:rssi:transmitRate:)](linkqualitydidchangeforwifiinterface%28withname_rssi_transmitrate_%29.md): Tells the delegate that the link quality has changed.
- [modeDidChangeForWiFiInterface(withName:)](modedidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the operating mode has changed.
- [powerStateDidChangeForWiFiInterface(withName:)](powerstatedidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the Wi-Fi power state changed.
- [scanCacheUpdatedForWiFiInterface(withName:)](scancacheupdatedforwifiinterface%28withname_%29.md): Tells the delegate that the Wi-Fi interface’s scan cache has been updated with new results.
- [ssidDidChangeForWiFiInterface(withName:)](ssiddidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the current SSID has changed.

# clientConnectionInvalidated (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

Tells the delegate that the connection to the Wi-Fi subsystem is permanently invalidated.

## Declaration

```objectivec
- (void) clientConnectionInvalidated;
```

## See Also

### Instance Methods

- [bssidDidChangeForWiFiInterfaceWithName:](bssiddidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the current BSSID has changed.
- [clientConnectionInterrupted](clientconnectioninterrupted%28%29.md): Tells the delegate that the connection to the Wi-Fi subsystem is temporarily interrupted.
- [countryCodeDidChangeForWiFiInterfaceWithName:](countrycodedidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the currently adopted country code has changed.
- [linkDidChangeForWiFiInterfaceWithName:](linkdidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the Wi-Fi link state changed.
- [linkQualityDidChangeForWiFiInterfaceWithName:rssi:transmitRate:](linkqualitydidchangeforwifiinterface%28withname_rssi_transmitrate_%29.md): Tells the delegate that the link quality has changed.
- [modeDidChangeForWiFiInterfaceWithName:](modedidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the operating mode has changed.
- [powerStateDidChangeForWiFiInterfaceWithName:](powerstatedidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the Wi-Fi power state changed.
- [scanCacheUpdatedForWiFiInterfaceWithName:](scancacheupdatedforwifiinterface%28withname_%29.md): Tells the delegate that the Wi-Fi interface’s scan cache has been updated with new results.
- [ssidDidChangeForWiFiInterfaceWithName:](ssiddidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the current SSID has changed.
