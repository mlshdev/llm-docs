> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cweventdelegate](https://developer.apple.com/documentation/corewlan/cweventdelegate)

# CWEventDelegate (Swift)

**Framework:** Core WLAN  
**Kind:** Protocol  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

The interface a Wi-Fi client object uses to notify its delegate about Wi-Fi events.

## Declaration

```swift
protocol CWEventDelegate
```

<a id="overview"></a>

## Overview

An object that adopts the `CWEventDelegate` protocol and that is assigned as the delegate of a [CWWiFiClient](cwwificlient.md) object receives notifications of changes on a Wi-Fi interface. Use the [startMonitoringEvent(with:)](cwwificlient/startmonitoringevent%28with_%29.md) method to indicate to the client the event types for which you want to receive notifications. Use the [stopMonitoringEvent(with:)](cwwificlient/stopmonitoringevent%28with_%29.md) method to stop receiving a particular notification type, or the [stopMonitoringAllEvents()](cwwificlient/stopmonitoringallevents%28%29.md) method to stop receiving all notifications.

## Topics

### Instance Methods

- [bssidDidChangeForWiFiInterface(withName:)](cweventdelegate/bssiddidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the current BSSID has changed.
- [clientConnectionInterrupted()](cweventdelegate/clientconnectioninterrupted%28%29.md): Tells the delegate that the connection to the Wi-Fi subsystem is temporarily interrupted.
- [clientConnectionInvalidated()](cweventdelegate/clientconnectioninvalidated%28%29.md): Tells the delegate that the connection to the Wi-Fi subsystem is permanently invalidated.
- [countryCodeDidChangeForWiFiInterface(withName:)](cweventdelegate/countrycodedidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the currently adopted country code has changed.
- [linkDidChangeForWiFiInterface(withName:)](cweventdelegate/linkdidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the Wi-Fi link state changed.
- [linkQualityDidChangeForWiFiInterface(withName:rssi:transmitRate:)](cweventdelegate/linkqualitydidchangeforwifiinterface%28withname_rssi_transmitrate_%29.md): Tells the delegate that the link quality has changed.
- [modeDidChangeForWiFiInterface(withName:)](cweventdelegate/modedidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the operating mode has changed.
- [powerStateDidChangeForWiFiInterface(withName:)](cweventdelegate/powerstatedidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the Wi-Fi power state changed.
- [scanCacheUpdatedForWiFiInterface(withName:)](cweventdelegate/scancacheupdatedforwifiinterface%28withname_%29.md): Tells the delegate that the Wi-Fi interface’s scan cache has been updated with new results.
- [ssidDidChangeForWiFiInterface(withName:)](cweventdelegate/ssiddidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the current SSID has changed.

# CWEventDelegate (Objective-C)

**Framework:** Core WLAN  
**Kind:** Protocol  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

The interface a Wi-Fi client object uses to notify its delegate about Wi-Fi events.

## Declaration

```objectivec
@protocol CWEventDelegate
```

<a id="overview"></a>

## Overview

An object that adopts the `CWEventDelegate` protocol and that is assigned as the delegate of a [CWWiFiClient](cwwificlient.md) object receives notifications of changes on a Wi-Fi interface. Use the [startMonitoringEventWithType:error:](cwwificlient/startmonitoringevent%28with_%29.md) method to indicate to the client the event types for which you want to receive notifications. Use the [stopMonitoringEventWithType:error:](cwwificlient/stopmonitoringevent%28with_%29.md) method to stop receiving a particular notification type, or the [stopMonitoringAllEventsAndReturnError:](cwwificlient/stopmonitoringallevents%28%29.md) method to stop receiving all notifications.

## Topics

### Instance Methods

- [bssidDidChangeForWiFiInterfaceWithName:](cweventdelegate/bssiddidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the current BSSID has changed.
- [clientConnectionInterrupted](cweventdelegate/clientconnectioninterrupted%28%29.md): Tells the delegate that the connection to the Wi-Fi subsystem is temporarily interrupted.
- [clientConnectionInvalidated](cweventdelegate/clientconnectioninvalidated%28%29.md): Tells the delegate that the connection to the Wi-Fi subsystem is permanently invalidated.
- [countryCodeDidChangeForWiFiInterfaceWithName:](cweventdelegate/countrycodedidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the currently adopted country code has changed.
- [linkDidChangeForWiFiInterfaceWithName:](cweventdelegate/linkdidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the Wi-Fi link state changed.
- [linkQualityDidChangeForWiFiInterfaceWithName:rssi:transmitRate:](cweventdelegate/linkqualitydidchangeforwifiinterface%28withname_rssi_transmitrate_%29.md): Tells the delegate that the link quality has changed.
- [modeDidChangeForWiFiInterfaceWithName:](cweventdelegate/modedidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the operating mode has changed.
- [powerStateDidChangeForWiFiInterfaceWithName:](cweventdelegate/powerstatedidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the Wi-Fi power state changed.
- [scanCacheUpdatedForWiFiInterfaceWithName:](cweventdelegate/scancacheupdatedforwifiinterface%28withname_%29.md): Tells the delegate that the Wi-Fi interface’s scan cache has been updated with new results.
- [ssidDidChangeForWiFiInterfaceWithName:](cweventdelegate/ssiddidchangeforwifiinterface%28withname_%29.md): Tells the delegate that the current SSID has changed.
