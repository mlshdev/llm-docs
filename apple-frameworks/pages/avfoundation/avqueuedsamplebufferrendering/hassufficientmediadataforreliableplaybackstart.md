> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avqueuedsamplebufferrendering/hassufficientmediadataforreliableplaybackstart](https://developer.apple.com/documentation/avfoundation/avqueuedsamplebufferrendering/hassufficientmediadataforreliableplaybackstart)

# hasSufficientMediaDataForReliablePlaybackStart (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ (deprecated in 27.0) · iPadOS 14.5+ (deprecated in 27.0) · Mac Catalyst 14.5+ (deprecated in 27.0) · macOS 11.3+ (deprecated in 27.0) · tvOS 14.5+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 7.4+ (deprecated in 27.0)

A Boolean value that indicates whether the enqued media meets the required preroll level for reliable playback.

## Declaration

```swift
var hasSufficientMediaDataForReliablePlaybackStart: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Starting playback when this property is [false](https://developer.apple.com/documentation/swift/false) may prevent smooth playback following an immediate start.

# hasSufficientMediaDataForReliablePlaybackStart (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

A Boolean value that indicates whether the enqued media meets the required preroll level for reliable playback.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasSufficientMediaDataForReliablePlaybackStart;
```

<a id="Discussion"></a>

## Discussion

Starting playback when this property is [false](https://developer.apple.com/documentation/swift/false) may prevent smooth playback following an immediate start.
