> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue/timemappingvalue](https://developer.apple.com/documentation/foundation/nsvalue/timemappingvalue)

# timeMappingValue (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The CoreMedia time mapping structure representation of the value.

## Declaration

```swift
var timeMappingValue: CMTimeMapping { get }
```

## See Also

### Related Documentation

- [CMTimeMapping](../../coremedia/cmtimemapping.md): A structure that maps a segment of a source time range to a target time range.

### Working with Media Time Values

- [init(CMTime:)](init%28cmtime_%29.md): Creates a new value object containing the specified CoreMedia time structure.
- [init(CMTimeRange:)](init%28cmtimerange_%29.md): Creates a new value object containing the specified CoreMedia time range structure.
- [init(CMTimeMapping:)](init%28cmtimemapping_%29.md): Creates a new value object containing the specified CoreMedia time mapping structure.
- [timeValue](timevalue.md): The CoreMedia time structure representation of the value.
- [timeRangeValue](timerangevalue.md): The CoreMedia time range structure representation of the value.

# CMTimeMappingValue (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The CoreMedia time mapping structure representation of the value.

## Declaration

```objectivec
@property (readonly) CMTimeMapping CMTimeMappingValue;
```

## See Also

### Related Documentation

- [CMTimeMapping](../../coremedia/cmtimemapping.md): A structure that maps a segment of a source time range to a target time range.

### Working with Media Time Values

- [valueWithCMTime:](init%28cmtime_%29.md): Creates a new value object containing the specified CoreMedia time structure.
- [valueWithCMTimeRange:](init%28cmtimerange_%29.md): Creates a new value object containing the specified CoreMedia time range structure.
- [valueWithCMTimeMapping:](init%28cmtimemapping_%29.md): Creates a new value object containing the specified CoreMedia time mapping structure.
- [CMTimeValue](timevalue.md): The CoreMedia time structure representation of the value.
- [CMTimeRangeValue](timerangevalue.md): The CoreMedia time range structure representation of the value.
