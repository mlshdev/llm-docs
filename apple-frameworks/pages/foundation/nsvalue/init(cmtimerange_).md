> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue/init(cmtimerange:)](https://developer.apple.com/documentation/foundation/nsvalue/init(cmtimerange:))

# init(CMTimeRange:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a new value object containing the specified CoreMedia time range structure.

## Declaration

```swift
init(CMTimeRange timeRange: CMTimeRange)
```

```swift
init(timeRange: CMTimeRange)
```

## Parameters

- `timeRange`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the time range information.

## See Also

### Related Documentation

- [CMTimeRange](../../coremedia/cmtimerange.md): A structure that represents a time range.

### Working with Media Time Values

- [init(CMTime:)](init%28cmtime_%29.md): Creates a new value object containing the specified CoreMedia time structure.
- [init(CMTimeMapping:)](init%28cmtimemapping_%29.md): Creates a new value object containing the specified CoreMedia time mapping structure.
- [timeValue](timevalue.md): The CoreMedia time structure representation of the value.
- [timeRangeValue](timerangevalue.md): The CoreMedia time range structure representation of the value.
- [timeMappingValue](timemappingvalue.md): The CoreMedia time mapping structure representation of the value.

# valueWithCMTimeRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a new value object containing the specified CoreMedia time range structure.

## Declaration

```objectivec
+ (NSValue *) valueWithCMTimeRange:(CMTimeRange) timeRange;
```

## Parameters

- `timeRange`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the time range information.

## See Also

### Related Documentation

- [CMTimeRange](../../coremedia/cmtimerange.md): A structure that represents a time range.

### Working with Media Time Values

- [valueWithCMTime:](init%28cmtime_%29.md): Creates a new value object containing the specified CoreMedia time structure.
- [valueWithCMTimeMapping:](init%28cmtimemapping_%29.md): Creates a new value object containing the specified CoreMedia time mapping structure.
- [CMTimeValue](timevalue.md): The CoreMedia time structure representation of the value.
- [CMTimeRangeValue](timerangevalue.md): The CoreMedia time range structure representation of the value.
- [CMTimeMappingValue](timemappingvalue.md): The CoreMedia time mapping structure representation of the value.
