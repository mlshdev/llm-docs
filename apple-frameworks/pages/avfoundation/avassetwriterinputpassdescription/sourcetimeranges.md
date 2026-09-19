> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avassetwriterinputpassdescription/sourcetimeranges

# sourceTimeRanges (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An array of time ranges.

## Declaration

```swift
var sourceTimeRanges: [NSValue] { get }
```

<a id="Discussion"></a>

## Discussion

Each element in the array is an [NSValue](../../foundation/nsvalue.md) object that wraps a [CMTimeRange](../../coremedia/cmtimerange.md) structure that represents one source time range. The value of this property is suitable to pass to the [reset(forReadingTimeRanges:)](../avassetreaderoutput/reset%28forreadingtimeranges_%29.md) method of [AVAssetReaderOutput](../avassetreaderoutput.md).

# sourceTimeRanges (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An array of time ranges.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSValue *> * sourceTimeRanges;
```

<a id="Discussion"></a>

## Discussion

Each element in the array is an [NSValue](../../foundation/nsvalue.md) object that wraps a [CMTimeRange](../../coremedia/cmtimerange.md) structure that represents one source time range. The value of this property is suitable to pass to the [resetForReadingTimeRanges:](../avassetreaderoutput/reset%28forreadingtimeranges_%29.md) method of [AVAssetReaderOutput](../avassetreaderoutput.md).
