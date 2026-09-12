> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotconfiguration/ssid](https://developer.apple.com/documentation/networkextension/nehotspotconfiguration/ssid)

# ssid (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

The SSID of an open, WEP, WPA/WPA2 personal, or WPA/WPA2 enterprise Wi-Fi network.

## Declaration

```swift
var ssid: String { get }
```

<a id="Discussion"></a>

## Discussion

An SSID is a string of 1-32 characters.

For Hotspot 2.0 networks, your application must use domain names instead of SSIDs.

This API does not support hidden SSIDs.

## See Also

### Accessing configuration properties

- [ssidPrefix](ssidprefix.md): The string used to match networks against a known SSID prefix.
- [lifeTimeInDays](lifetimeindays.md): The number of days the network retains the associated configuration.
- [joinOnce](joinonce.md): Restricts the lifetime of a configuration to the operating status of the app that created it.
- [hidden](hidden.md): A Boolean value that indicates the visibility of the SSID.

# SSID (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

The SSID of an open, WEP, WPA/WPA2 personal, or WPA/WPA2 enterprise Wi-Fi network.

## Declaration

```objectivec
@property (readonly) NSString * SSID;
```

<a id="Discussion"></a>

## Discussion

An SSID is a string of 1-32 characters.

For Hotspot 2.0 networks, your application must use domain names instead of SSIDs.

This API does not support hidden SSIDs.

## See Also

### Accessing configuration properties

- [SSIDPrefix](ssidprefix.md): The string used to match networks against a known SSID prefix.
- [lifeTimeInDays](lifetimeindays.md): The number of days the network retains the associated configuration.
- [joinOnce](joinonce.md): Restricts the lifetime of a configuration to the operating status of the app that created it.
- [hidden](hidden.md): A Boolean value that indicates the visibility of the SSID.
