> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/seekabletimeranges](https://developer.apple.com/documentation/avfoundation/avplayeritem/seekabletimeranges)

# seekableTimeRanges (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An array of time ranges within which it is possible to seek.

## Declaration

```swift
nonisolated var seekableTimeRanges: [NSValue] { get }
```

<a id="Discussion"></a>

## Discussion

The array contains [NSValue](../../foundation/nsvalue.md) objects containing a [CMTimeRange](../../coremedia/cmtimerange.md) value indicating the times ranges to which the player item can seek. The time ranges returned may be discontinuous.

## See Also

### Determining available time ranges

- [loadedTimeRanges](loadedtimeranges.md): An array of time ranges indicating media data that is readily available.

# seekableTimeRanges (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An array of time ranges within which it is possible to seek.

## Declaration

```objectivec
@property (readonly) NSArray<NSValue *> * seekableTimeRanges;
```

<a id="Discussion"></a>

## Discussion

The array contains [NSValue](../../foundation/nsvalue.md) objects containing a [CMTimeRange](../../coremedia/cmtimerange.md) value indicating the times ranges to which the player item can seek. The time ranges returned may be discontinuous.

## See Also

### Determining available time ranges

- [loadedTimeRanges](loadedtimeranges.md): An array of time ranges indicating media data that is readily available.
