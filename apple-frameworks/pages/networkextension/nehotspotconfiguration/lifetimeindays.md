> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotconfiguration/lifetimeindays](https://developer.apple.com/documentation/networkextension/nehotspotconfiguration/lifetimeindays)

# lifeTimeInDays (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

The number of days the network retains the associated configuration.

## Declaration

```swift
@NSCopying var lifeTimeInDays: NSNumber { get set }
```

<a id="Discussion"></a>

## Discussion

The minimum value is 1 day and the maximum value is 365 days. If this property is not set or is set to an invalid value the configuration never expires.

This property doesn’t apply to Enterprise or HS2.0 networks.

## See Also

### Accessing configuration properties

- [ssid](ssid.md): The SSID of an open, WEP, WPA/WPA2 personal, or WPA/WPA2 enterprise Wi-Fi network.
- [ssidPrefix](ssidprefix.md): The string used to match networks against a known SSID prefix.
- [joinOnce](joinonce.md): Restricts the lifetime of a configuration to the operating status of the app that created it.
- [hidden](hidden.md): A Boolean value that indicates the visibility of the SSID.

# lifeTimeInDays (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

The number of days the network retains the associated configuration.

## Declaration

```objectivec
@property (copy) NSNumber * lifeTimeInDays;
```

<a id="Discussion"></a>

## Discussion

The minimum value is 1 day and the maximum value is 365 days. If this property is not set or is set to an invalid value the configuration never expires.

This property doesn’t apply to Enterprise or HS2.0 networks.

## See Also

### Accessing configuration properties

- [SSID](ssid.md): The SSID of an open, WEP, WPA/WPA2 personal, or WPA/WPA2 enterprise Wi-Fi network.
- [SSIDPrefix](ssidprefix.md): The string used to match networks against a known SSID prefix.
- [joinOnce](joinonce.md): Restricts the lifetime of a configuration to the operating status of the app that created it.
- [hidden](hidden.md): A Boolean value that indicates the visibility of the SSID.
