> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/location](https://developer.apple.com/documentation/avfaudio/avaudiosession/location)

# AVAudioSession.Location (Swift)

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Constants that describe the location of the data source on device.

## Declaration

```swift
struct Location
```

## Topics

### Creating a Location

- [init(rawValue:)](location/init%28rawvalue_%29.md): Creates a new instance with the raw value you specify.

### Getting Standard Locations

- [lower](location/lower.md): A value that indicates that the data source is located near the bottom end of the device.
- [upper](location/upper.md): A value that indicates that the data source is located near the top end of the device.

### Deprecated

- [Deprecated Symbols](../location-deprecated-symbols.md): Review unsupported symbols and their replacements.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Retrieving the Data Source Location

- [location](../avaudiosessiondatasourcedescription/location.md): The location of the data source on the device.

# AVAudioSessionLocation (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that describe the location of the data source on device.

## Declaration

```objectivec
typedef NSString * AVAudioSessionLocation;
```

## Topics

### Getting Standard Locations

- [AVAudioSessionLocationLower](location/lower.md): A value that indicates that the data source is located near the bottom end of the device.
- [AVAudioSessionLocationUpper](location/upper.md): A value that indicates that the data source is located near the top end of the device.

### Deprecated

- [Deprecated Symbols](../location-deprecated-symbols.md): Review unsupported symbols and their replacements.

## See Also

### Retrieving the Data Source Location

- [location](../avaudiosessiondatasourcedescription/location.md): The location of the data source on the device.
