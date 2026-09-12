> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue/timevalue](https://developer.apple.com/documentation/foundation/nsvalue/timevalue)

# timeValue (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The CoreMedia time structure representation of the value.

## Declaration

```swift
var timeValue: CMTime { get }
```

## See Also

### Related Documentation

- [CMTime](../../coremedia/cmtime.md): A structure that represents time.

### Working with Media Time Values

- [init(CMTime:)](init%28cmtime_%29.md): Creates a new value object containing the specified CoreMedia time structure.
- [init(CMTimeRange:)](init%28cmtimerange_%29.md): Creates a new value object containing the specified CoreMedia time range structure.
- [init(CMTimeMapping:)](init%28cmtimemapping_%29.md): Creates a new value object containing the specified CoreMedia time mapping structure.
- [timeRangeValue](timerangevalue.md): The CoreMedia time range structure representation of the value.
- [timeMappingValue](timemappingvalue.md): The CoreMedia time mapping structure representation of the value.

# CMTimeValue (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The CoreMedia time structure representation of the value.

## Declaration

```objectivec
@property (readonly) CMTime CMTimeValue;
```

## See Also

### Related Documentation

- [CMTime](../../coremedia/cmtime.md): A structure that represents time.

### Working with Media Time Values

- [valueWithCMTime:](init%28cmtime_%29.md): Creates a new value object containing the specified CoreMedia time structure.
- [valueWithCMTimeRange:](init%28cmtimerange_%29.md): Creates a new value object containing the specified CoreMedia time range structure.
- [valueWithCMTimeMapping:](init%28cmtimemapping_%29.md): Creates a new value object containing the specified CoreMedia time mapping structure.
- [CMTimeRangeValue](timerangevalue.md): The CoreMedia time range structure representation of the value.
- [CMTimeMappingValue](timemappingvalue.md): The CoreMedia time mapping structure representation of the value.
