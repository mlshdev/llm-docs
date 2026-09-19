> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcaptionconversiontimerangeadjustment/durationoffset

# durationOffset (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The time value by which the system offsets the durations of captions to correct a problem.

## Declaration

```swift
var durationOffset: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

The value may any numeric value, positive, negative, or zero.

## See Also

### Accessing time offsets

- [startTimeOffset](starttimeoffset.md): The time value by which the system offsets the start times of captions to correct a problem.

# durationOffset (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The time value by which the system offsets the durations of captions to correct a problem.

## Declaration

```objectivec
@property (readonly) CMTime durationOffset;
```

<a id="Discussion"></a>

## Discussion

The value may any numeric value, positive, negative, or zero.

## See Also

### Accessing time offsets

- [startTimeOffset](starttimeoffset.md): The time value by which the system offsets the start times of captions to correct a problem.
