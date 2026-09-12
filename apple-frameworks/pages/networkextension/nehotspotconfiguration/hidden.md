> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotconfiguration/hidden](https://developer.apple.com/documentation/networkextension/nehotspotconfiguration/hidden)

# hidden (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

A Boolean value that indicates the visibility of the SSID.

## Declaration

```swift
var hidden: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set this value to [true](https://developer.apple.com/documentation/swift/true) to make the system perform an active scan for the Service Set Identifier (SSID). If the access point is already broadcasting the SSID, set this value to [false](https://developer.apple.com/documentation/swift/false).

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing configuration properties

- [ssid](ssid.md): The SSID of an open, WEP, WPA/WPA2 personal, or WPA/WPA2 enterprise Wi-Fi network.
- [ssidPrefix](ssidprefix.md): The string used to match networks against a known SSID prefix.
- [lifeTimeInDays](lifetimeindays.md): The number of days the network retains the associated configuration.
- [joinOnce](joinonce.md): Restricts the lifetime of a configuration to the operating status of the app that created it.

# hidden (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

A Boolean value that indicates the visibility of the SSID.

## Declaration

```objectivec
@property BOOL hidden;
```

<a id="Discussion"></a>

## Discussion

Set this value to [true](https://developer.apple.com/documentation/swift/true) to make the system perform an active scan for the Service Set Identifier (SSID). If the access point is already broadcasting the SSID, set this value to [false](https://developer.apple.com/documentation/swift/false).

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing configuration properties

- [SSID](ssid.md): The SSID of an open, WEP, WPA/WPA2 personal, or WPA/WPA2 enterprise Wi-Fi network.
- [SSIDPrefix](ssidprefix.md): The string used to match networks against a known SSID prefix.
- [lifeTimeInDays](lifetimeindays.md): The number of days the network retains the associated configuration.
- [joinOnce](joinonce.md): Restricts the lifetime of a configuration to the operating status of the app that created it.
