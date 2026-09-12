> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/loadedtimeranges](https://developer.apple.com/documentation/avfoundation/avplayeritem/loadedtimeranges)

# loadedTimeRanges (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An array of time ranges indicating media data that is readily available.

## Declaration

```swift
nonisolated var loadedTimeRanges: [NSValue] { get }
```

<a id="Discussion"></a>

## Discussion

The array contains [NSValue](../../foundation/nsvalue.md) objects containing a [CMTimeRange](../../coremedia/cmtimerange.md) value indicating the times ranges for which the player item has media data readily available. The time ranges returned may be discontinuous.

## See Also

### Determining available time ranges

- [seekableTimeRanges](seekabletimeranges.md): An array of time ranges within which it is possible to seek.

# loadedTimeRanges (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An array of time ranges indicating media data that is readily available.

## Declaration

```objectivec
@property (readonly) NSArray<NSValue *> * loadedTimeRanges;
```

<a id="Discussion"></a>

## Discussion

The array contains [NSValue](../../foundation/nsvalue.md) objects containing a [CMTimeRange](../../coremedia/cmtimerange.md) value indicating the times ranges for which the player item has media data readily available. The time ranges returned may be discontinuous.

## See Also

### Determining available time ranges

- [seekableTimeRanges](seekabletimeranges.md): An array of time ranges within which it is possible to seek.
