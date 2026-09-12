> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotconfiguration/ssidprefix](https://developer.apple.com/documentation/networkextension/nehotspotconfiguration/ssidprefix)

# ssidPrefix (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

The string used to match networks against a known SSID prefix.

## Declaration

```swift
var ssidPrefix: String { get }
```

<a id="Discussion"></a>

## Discussion

This property is only populated for configuration instances initialized with SSID prefix strings. The property is an empty string if the configuration instance has a full [ssid](ssid.md).

## See Also

### Accessing configuration properties

- [ssid](ssid.md): The SSID of an open, WEP, WPA/WPA2 personal, or WPA/WPA2 enterprise Wi-Fi network.
- [lifeTimeInDays](lifetimeindays.md): The number of days the network retains the associated configuration.
- [joinOnce](joinonce.md): Restricts the lifetime of a configuration to the operating status of the app that created it.
- [hidden](hidden.md): A Boolean value that indicates the visibility of the SSID.

# SSIDPrefix (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

The string used to match networks against a known SSID prefix.

## Declaration

```objectivec
@property (readonly) NSString * SSIDPrefix;
```

<a id="Discussion"></a>

## Discussion

This property is only populated for configuration instances initialized with SSID prefix strings. The property is an empty string if the configuration instance has a full [SSID](ssid.md).

## See Also

### Accessing configuration properties

- [SSID](ssid.md): The SSID of an open, WEP, WPA/WPA2 personal, or WPA/WPA2 enterprise Wi-Fi network.
- [lifeTimeInDays](lifetimeindays.md): The number of days the network retains the associated configuration.
- [joinOnce](joinonce.md): Restricts the lifetime of a configuration to the operating status of the app that created it.
- [hidden](hidden.md): A Boolean value that indicates the visibility of the SSID.
