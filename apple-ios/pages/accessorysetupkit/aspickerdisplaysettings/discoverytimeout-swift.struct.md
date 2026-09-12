> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/aspickerdisplaysettings/discoverytimeout-swift.struct](https://developer.apple.com/documentation/accessorysetupkit/aspickerdisplaysettings/discoverytimeout-swift.struct)

# ASPickerDisplaySettings.DiscoveryTimeout (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The type used for the accessory picker’s discovery timeout value.

## Declaration

```swift
struct DiscoveryTimeout
```

## Topics

### Determining discovery timeout

- [default](default.md): An empty settings object.
- [short](discoverytimeout-swift.struct/short.md): A picker discovery timeout value that times out after about about 60 seconds.
- [medium](discoverytimeout-swift.struct/medium.md): A picker discovery timeout value that times out after about two minutes.
- [long](discoverytimeout-swift.struct/long.md): A picker discovery timeout value that times out after about five minutes.
- [unbounded](discoverytimeout-swift.struct/unbounded.md): A picker discovery that only times out when the app tells it to.

### Working with raw values

- [init(rawValue:)](discoverytimeout-swift.struct/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Customizing the discovery timeout

- [discoveryTimeout](discoverytimeout-swift.property.md): Custom timeout for picker. Default is 30 seconds.

# ASPickerDisplaySettingsDiscoveryTimeout (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Type Alias  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The type used for the accessory picker’s discovery timeout value.

## Declaration

```objectivec
typedef NSTimeInterval ASPickerDisplaySettingsDiscoveryTimeout;
```

## Topics

### Determining discovery timeout

- [defaultSettings](default.md): An empty settings object.
- [ASPickerDisplaySettingsDiscoveryTimeoutShort](discoverytimeout-swift.struct/short.md): A picker discovery timeout value that times out after about about 60 seconds.
- [ASPickerDisplaySettingsDiscoveryTimeoutMedium](discoverytimeout-swift.struct/medium.md): A picker discovery timeout value that times out after about two minutes.
- [ASPickerDisplaySettingsDiscoveryTimeoutLong](discoverytimeout-swift.struct/long.md): A picker discovery timeout value that times out after about five minutes.
- [ASPickerDisplaySettingsDiscoveryTimeoutUnbounded](discoverytimeout-swift.struct/unbounded.md): A picker discovery that only times out when the app tells it to.

## See Also

### Customizing the discovery timeout

- [discoveryTimeout](discoverytimeout-swift.property.md): Custom timeout for picker. Default is 30 seconds.
