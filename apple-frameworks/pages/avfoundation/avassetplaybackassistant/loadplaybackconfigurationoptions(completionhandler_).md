> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetplaybackassistant/loadplaybackconfigurationoptions(completionhandler:)](https://developer.apple.com/documentation/avfoundation/avassetplaybackassistant/loadplaybackconfigurationoptions(completionhandler:))

# loadPlaybackConfigurationOptions(completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Loads playback configuration options for an asset.

## Declaration

```swift
func loadPlaybackConfigurationOptions(completionHandler: @escaping @Sendable ([AVAssetPlaybackConfigurationOption]) -> Void)
```

```swift
var playbackConfigurationOptions: [AVAssetPlaybackConfigurationOption] { get async }
```

## Parameters

- `completionHandler`: A callback the system invokes with an array of [AVAssetPlaybackConfigurationOption](../avassetplaybackconfigurationoption.md) values that describe capabilities of the asset.

# loadPlaybackConfigurationOptionsWithCompletionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Loads playback configuration options for an asset.

## Declaration

```objectivec
- (void) loadPlaybackConfigurationOptionsWithCompletionHandler:(void (^)(NSArray<NSString *> *playbackConfigurationOptions)) completionHandler;
```

## Parameters

- `completionHandler`: A callback the system invokes with an array of [AVAssetPlaybackConfigurationOption](../avassetplaybackconfigurationoption.md) values that describe capabilities of the asset.
