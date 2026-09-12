> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/aspickerdisplaysettings/discoverytimeout-swift.struct/medium](https://developer.apple.com/documentation/accessorysetupkit/aspickerdisplaysettings/discoverytimeout-swift.struct/medium)

# medium (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A picker discovery timeout value that times out after about two minutes.

## Declaration

```swift
static let medium: ASPickerDisplaySettings.DiscoveryTimeout
```

## See Also

### Determining discovery timeout

- [default](../default.md): An empty settings object.
- [short](short.md): A picker discovery timeout value that times out after about about 60 seconds.
- [long](long.md): A picker discovery timeout value that times out after about five minutes.
- [unbounded](unbounded.md): A picker discovery that only times out when the app tells it to.

# ASPickerDisplaySettingsDiscoveryTimeoutMedium (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A picker discovery timeout value that times out after about two minutes.

## Declaration

```objectivec
extern const ASPickerDisplaySettingsDiscoveryTimeout ASPickerDisplaySettingsDiscoveryTimeoutMedium;
```

## See Also

### Determining discovery timeout

- [defaultSettings](../default.md): An empty settings object.
- [ASPickerDisplaySettingsDiscoveryTimeoutShort](short.md): A picker discovery timeout value that times out after about about 60 seconds.
- [ASPickerDisplaySettingsDiscoveryTimeoutLong](long.md): A picker discovery timeout value that times out after about five minutes.
- [ASPickerDisplaySettingsDiscoveryTimeoutUnbounded](unbounded.md): A picker discovery that only times out when the app tells it to.
