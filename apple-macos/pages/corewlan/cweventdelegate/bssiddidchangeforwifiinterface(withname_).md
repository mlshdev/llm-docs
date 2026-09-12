> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cweventdelegate/bssiddidchangeforwifiinterface(withname:)](https://developer.apple.com/documentation/corewlan/cweventdelegate/bssiddidchangeforwifiinterface(withname:))

# bssidDidChangeForWiFiInterface(withName:) (Swift)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

Tells the delegate that the current BSSID has changed.

## Declaration

```swift
optional func bssidDidChangeForWiFiInterface(withName interfaceName: String)
```

## Parameters

- `interfaceName`: The name of the Wi-Fi interface on which the BSSID changed.

<a id="Discussion"></a>

## Discussion

Register for BSSID change notifications by sending the [startMonitoringEvent(with:)](../cwwificlient/startmonitoringevent%28with_%29.md) message to a Wi-Fi client object with the [CWEventType.bssidDidChange](../cweventtype/bssiddidchange.md) event type.

Use the Wi-Fi interface’s [bssid()](../cwinterface/bssid%28%29.md) method to query the current BSSID.

## See Also

### Instance Methods

- [clientConnectionInterrupted()](clientconnectioninterrupted%28%29.md): Tells the delegate that the connection to the Wi-Fi subsystem is temporarily interrupted.
- [clientConnectionInvalidated()](clientconnectioninvalidated%28%29.md): Tells the delegate that the connection to the Wi-Fi subsystem is permanently invalidated.
- [countryCodeDidChangeForWiFiInterface(withName:)](countrycodedidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the currently adopted country code has changed.
- [linkDidChangeForWiFiInterface(withName:)](linkdidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the Wi-Fi link state changed.
- [linkQualityDidChangeForWiFiInterface(withName:rssi:transmitRate:)](linkqualitydidchangeforwifiinterface%28withname_rssi_transmitrate_%29.md): Tells the delegate that the link quality has changed.
- [modeDidChangeForWiFiInterface(withName:)](modedidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the operating mode has changed.
- [powerStateDidChangeForWiFiInterface(withName:)](powerstatedidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the Wi-Fi power state changed.
- [scanCacheUpdatedForWiFiInterface(withName:)](scancacheupdatedforwifiinterface%28withname_%29.md): Tells the delegate that the Wi-Fi interface’s scan cache has been updated with new results.
- [ssidDidChangeForWiFiInterface(withName:)](ssiddidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the current SSID has changed.

# bssidDidChangeForWiFiInterfaceWithName: (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

Tells the delegate that the current BSSID has changed.

## Declaration

```objectivec
- (void) bssidDidChangeForWiFiInterfaceWithName:(NSString *) interfaceName;
```

## Parameters

- `interfaceName`: The name of the Wi-Fi interface on which the BSSID changed.

<a id="Discussion"></a>

## Discussion

Register for BSSID change notifications by sending the [startMonitoringEventWithType:error:](../cwwificlient/startmonitoringevent%28with_%29.md) message to a Wi-Fi client object with the [CWEventTypeBSSIDDidChange](../cweventtype/bssiddidchange.md) event type.

Use the Wi-Fi interface’s [bssid](../cwinterface/bssid%28%29.md) method to query the current BSSID.

## See Also

### Instance Methods

- [clientConnectionInterrupted](clientconnectioninterrupted%28%29.md): Tells the delegate that the connection to the Wi-Fi subsystem is temporarily interrupted.
- [clientConnectionInvalidated](clientconnectioninvalidated%28%29.md): Tells the delegate that the connection to the Wi-Fi subsystem is permanently invalidated.
- [countryCodeDidChangeForWiFiInterfaceWithName:](countrycodedidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the currently adopted country code has changed.
- [linkDidChangeForWiFiInterfaceWithName:](linkdidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the Wi-Fi link state changed.
- [linkQualityDidChangeForWiFiInterfaceWithName:rssi:transmitRate:](linkqualitydidchangeforwifiinterface%28withname_rssi_transmitrate_%29.md): Tells the delegate that the link quality has changed.
- [modeDidChangeForWiFiInterfaceWithName:](modedidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the operating mode has changed.
- [powerStateDidChangeForWiFiInterfaceWithName:](powerstatedidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the Wi-Fi power state changed.
- [scanCacheUpdatedForWiFiInterfaceWithName:](scancacheupdatedforwifiinterface%28withname_%29.md): Tells the delegate that the Wi-Fi interface’s scan cache has been updated with new results.
- [ssidDidChangeForWiFiInterfaceWithName:](ssiddidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the current SSID has changed.
