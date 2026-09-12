> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/tracks](https://developer.apple.com/documentation/avfoundation/avplayeritem/tracks)

# tracks (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An array of player item track objects.

## Declaration

```swift
nonisolated var tracks: [AVPlayerItemTrack] { get }
```

<a id="Discussion"></a>

## Discussion

The value is an empty array before the player loads the underlying tracks. Key-value observe this property value to access valid tracks as soon as they’re available.

# tracks (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An array of player item track objects.

## Declaration

```objectivec
@property (readonly) NSArray<AVPlayerItemTrack *> * tracks;
```

<a id="Discussion"></a>

## Discussion

The value is an empty array before the player loads the underlying tracks. Key-value observe this property value to access valid tracks as soon as they’re available.
