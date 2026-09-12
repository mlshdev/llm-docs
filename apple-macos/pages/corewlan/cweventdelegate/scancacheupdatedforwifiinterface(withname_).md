> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cweventdelegate/scancacheupdatedforwifiinterface(withname:)](https://developer.apple.com/documentation/corewlan/cweventdelegate/scancacheupdatedforwifiinterface(withname:))

# scanCacheUpdatedForWiFiInterface(withName:) (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

Tells the delegate that the Wi-Fi interface’s scan cache has been updated with new results.

## Declaration

```swift
optional func scanCacheUpdatedForWiFiInterface(withName interfaceName: String)
```

## Parameters

- `interfaceName`: The name of the Wi-Fi interface for which the scan cache results have been updated.

<a id="Discussion"></a>

## Discussion

Register for scan cache update notifications by sending the [startMonitoringEvent(with:)](../cwwificlient/startmonitoringevent%28with_%29.md) message to a Wi-Fi client object with the [CWEventType.scanCacheUpdated](../cweventtype/scancacheupdated.md) event type.

Use the Wi-Fi interface’s [cachedScanResults()](../cwinterface/cachedscanresults%28%29.md) method to query the scan cache results from the last scan.

## See Also

### Instance Methods

- [bssidDidChangeForWiFiInterface(withName:)](bssiddidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the current BSSID has changed.
- [clientConnectionInterrupted()](clientconnectioninterrupted%28%29.md): Tells the delegate that the connection to the Wi-Fi subsystem is temporarily interrupted.
- [clientConnectionInvalidated()](clientconnectioninvalidated%28%29.md): Tells the delegate that the connection to the Wi-Fi subsystem is permanently invalidated.
- [countryCodeDidChangeForWiFiInterface(withName:)](countrycodedidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the currently adopted country code has changed.
- [linkDidChangeForWiFiInterface(withName:)](linkdidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the Wi-Fi link state changed.
- [linkQualityDidChangeForWiFiInterface(withName:rssi:transmitRate:)](linkqualitydidchangeforwifiinterface%28withname_rssi_transmitrate_%29.md): Tells the delegate that the link quality has changed.
- [modeDidChangeForWiFiInterface(withName:)](modedidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the operating mode has changed.
- [powerStateDidChangeForWiFiInterface(withName:)](powerstatedidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the Wi-Fi power state changed.
- [ssidDidChangeForWiFiInterface(withName:)](ssiddidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the current SSID has changed.

# scanCacheUpdatedForWiFiInterfaceWithName: (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

Tells the delegate that the Wi-Fi interface’s scan cache has been updated with new results.

## Declaration

```objectivec
- (void) scanCacheUpdatedForWiFiInterfaceWithName:(NSString *) interfaceName;
```

## Parameters

- `interfaceName`: The name of the Wi-Fi interface for which the scan cache results have been updated.

<a id="Discussion"></a>

## Discussion

Register for scan cache update notifications by sending the [startMonitoringEventWithType:error:](../cwwificlient/startmonitoringevent%28with_%29.md) message to a Wi-Fi client object with the [CWEventTypeScanCacheUpdated](../cweventtype/scancacheupdated.md) event type.

Use the Wi-Fi interface’s [cachedScanResults](../cwinterface/cachedscanresults%28%29.md) method to query the scan cache results from the last scan.

## See Also

### Instance Methods

- [bssidDidChangeForWiFiInterfaceWithName:](bssiddidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the current BSSID has changed.
- [clientConnectionInterrupted](clientconnectioninterrupted%28%29.md): Tells the delegate that the connection to the Wi-Fi subsystem is temporarily interrupted.
- [clientConnectionInvalidated](clientconnectioninvalidated%28%29.md): Tells the delegate that the connection to the Wi-Fi subsystem is permanently invalidated.
- [countryCodeDidChangeForWiFiInterfaceWithName:](countrycodedidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the currently adopted country code has changed.
- [linkDidChangeForWiFiInterfaceWithName:](linkdidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the Wi-Fi link state changed.
- [linkQualityDidChangeForWiFiInterfaceWithName:rssi:transmitRate:](linkqualitydidchangeforwifiinterface%28withname_rssi_transmitrate_%29.md): Tells the delegate that the link quality has changed.
- [modeDidChangeForWiFiInterfaceWithName:](modedidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the operating mode has changed.
- [powerStateDidChangeForWiFiInterfaceWithName:](powerstatedidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the Wi-Fi power state changed.
- [ssidDidChangeForWiFiInterfaceWithName:](ssiddidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the current SSID has changed.
