> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotconfiguration/joinonce](https://developer.apple.com/documentation/networkextension/nehotspotconfiguration/joinonce)

# joinOnce (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

Restricts the lifetime of a configuration to the operating status of the app that created it.

## Declaration

```swift
var joinOnce: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Optional. When `joinOnce` is set to `true,` the hotspot remains configured and connected only as long as the app that configured it is running in the foreground. The hotspot is disconnected and its configuration is removed when any of the following events occurs:

- The app stays in the background for more than 15 seconds.
- The device sleeps.
- The app crashes, quits, or is uninstalled.
- The app connects the device to a different Wi-Fi network.
- The user connects the device to a different Wi-Fi network.

To disconnect the device from a hotspot configured with `joinOnce` set to `true`, call [removeConfiguration(forSSID:)](../nehotspotconfigurationmanager/removeconfiguration%28forssid_%29.md).

## See Also

### Accessing configuration properties

- [ssid](ssid.md): The SSID of an open, WEP, WPA/WPA2 personal, or WPA/WPA2 enterprise Wi-Fi network.
- [ssidPrefix](ssidprefix.md): The string used to match networks against a known SSID prefix.
- [lifeTimeInDays](lifetimeindays.md): The number of days the network retains the associated configuration.
- [hidden](hidden.md): A Boolean value that indicates the visibility of the SSID.

# joinOnce (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

Restricts the lifetime of a configuration to the operating status of the app that created it.

## Declaration

```objectivec
@property BOOL joinOnce;
```

<a id="Discussion"></a>

## Discussion

Optional. When `joinOnce` is set to `true,` the hotspot remains configured and connected only as long as the app that configured it is running in the foreground. The hotspot is disconnected and its configuration is removed when any of the following events occurs:

- The app stays in the background for more than 15 seconds.
- The device sleeps.
- The app crashes, quits, or is uninstalled.
- The app connects the device to a different Wi-Fi network.
- The user connects the device to a different Wi-Fi network.

To disconnect the device from a hotspot configured with `joinOnce` set to `true`, call [removeConfigurationForSSID:](../nehotspotconfigurationmanager/removeconfiguration%28forssid_%29.md).

## See Also

### Accessing configuration properties

- [SSID](ssid.md): The SSID of an open, WEP, WPA/WPA2 personal, or WPA/WPA2 enterprise Wi-Fi network.
- [SSIDPrefix](ssidprefix.md): The string used to match networks against a known SSID prefix.
- [lifeTimeInDays](lifetimeindays.md): The number of days the network retains the associated configuration.
- [hidden](hidden.md): A Boolean value that indicates the visibility of the SSID.
