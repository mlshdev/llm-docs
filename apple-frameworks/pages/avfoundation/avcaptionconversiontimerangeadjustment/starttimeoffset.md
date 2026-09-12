> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionconversiontimerangeadjustment/starttimeoffset](https://developer.apple.com/documentation/avfoundation/avcaptionconversiontimerangeadjustment/starttimeoffset)

# startTimeOffset (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The time value by which the system offsets the start times of captions to correct a problem.

## Declaration

```swift
var startTimeOffset: CMTime { get }
```

<a id="Discussion"></a>

## Discussion

The value may any numeric value, positive, negative, or zero.

## See Also

### Accessing time offsets

- [durationOffset](durationoffset.md): The time value by which the system offsets the durations of captions to correct a problem.

# startTimeOffset (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The time value by which the system offsets the start times of captions to correct a problem.

## Declaration

```objectivec
@property (readonly) CMTime startTimeOffset;
```

<a id="Discussion"></a>

## Discussion

The value may any numeric value, positive, negative, or zero.

## See Also

### Accessing time offsets

- [durationOffset](durationoffset.md): The time value by which the system offsets the durations of captions to correct a problem.
