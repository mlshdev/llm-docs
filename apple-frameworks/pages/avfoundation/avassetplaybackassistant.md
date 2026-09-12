> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetplaybackassistant](https://developer.apple.com/documentation/avfoundation/avassetplaybackassistant)

# AVAssetPlaybackAssistant (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An object that provides playback information for an asset.

## Declaration

```swift
class AVAssetPlaybackAssistant
```

## Topics

### Creating a playback assistant

- [init(asset:)](avassetplaybackassistant/init%28asset_%29.md): Creates a playback assistant to inspect the specified asset.

### Loading playback configuration options

- [loadPlaybackConfigurationOptions(completionHandler:)](avassetplaybackassistant/loadplaybackconfigurationoptions%28completionhandler_%29.md): Loads playback configuration options for an asset.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Utilities

- [AVAssetPlaybackConfigurationOption](avassetplaybackconfigurationoption.md): A structure that defines playback configuration options for an asset.

# AVAssetPlaybackAssistant (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An object that provides playback information for an asset.

## Declaration

```objectivec
@interface AVAssetPlaybackAssistant : NSObject
```

## Topics

### Creating a playback assistant

- [assetPlaybackAssistantWithAsset:](avassetplaybackassistant/init%28asset_%29.md): Creates a playback assistant to inspect the specified asset.

### Loading playback configuration options

- [loadPlaybackConfigurationOptionsWithCompletionHandler:](avassetplaybackassistant/loadplaybackconfigurationoptions%28completionhandler_%29.md): Loads playback configuration options for an asset.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Utilities

- [AVAssetPlaybackConfigurationOption](avassetplaybackconfigurationoption.md): A structure that defines playback configuration options for an asset.
