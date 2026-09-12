> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/aspickerdisplaysettings/discoverytimeout-swift.struct/long](https://developer.apple.com/documentation/accessorysetupkit/aspickerdisplaysettings/discoverytimeout-swift.struct/long)

# long (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A picker discovery timeout value that times out after about five minutes.

## Declaration

```swift
static let long: ASPickerDisplaySettings.DiscoveryTimeout
```

## See Also

### Determining discovery timeout

- [default](../default.md): An empty settings object.
- [short](short.md): A picker discovery timeout value that times out after about about 60 seconds.
- [medium](medium.md): A picker discovery timeout value that times out after about two minutes.
- [unbounded](unbounded.md): A picker discovery that only times out when the app tells it to.

# ASPickerDisplaySettingsDiscoveryTimeoutLong (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A picker discovery timeout value that times out after about five minutes.

## Declaration

```objectivec
extern const ASPickerDisplaySettingsDiscoveryTimeout ASPickerDisplaySettingsDiscoveryTimeoutLong;
```

## See Also

### Determining discovery timeout

- [defaultSettings](../default.md): An empty settings object.
- [ASPickerDisplaySettingsDiscoveryTimeoutShort](short.md): A picker discovery timeout value that times out after about about 60 seconds.
- [ASPickerDisplaySettingsDiscoveryTimeoutMedium](medium.md): A picker discovery timeout value that times out after about two minutes.
- [ASPickerDisplaySettingsDiscoveryTimeoutUnbounded](unbounded.md): A picker discovery that only times out when the app tells it to.
