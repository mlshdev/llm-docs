> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue/init(cmtimemapping:)](https://developer.apple.com/documentation/foundation/nsvalue/init(cmtimemapping:))

# init(CMTimeMapping:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a new value object containing the specified CoreMedia time mapping structure.

## Declaration

```swift
init(CMTimeMapping timeMapping: CMTimeMapping)
```

```swift
init(timeMapping: CMTimeMapping)
```

## Parameters

- `timeMapping`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the time mapping information.

## See Also

### Related Documentation

- [CMTimeMapping](../../coremedia/cmtimemapping.md): A structure that maps a segment of a source time range to a target time range.

### Working with Media Time Values

- [init(CMTime:)](init%28cmtime_%29.md): Creates a new value object containing the specified CoreMedia time structure.
- [init(CMTimeRange:)](init%28cmtimerange_%29.md): Creates a new value object containing the specified CoreMedia time range structure.
- [timeValue](timevalue.md): The CoreMedia time structure representation of the value.
- [timeRangeValue](timerangevalue.md): The CoreMedia time range structure representation of the value.
- [timeMappingValue](timemappingvalue.md): The CoreMedia time mapping structure representation of the value.

# valueWithCMTimeMapping: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a new value object containing the specified CoreMedia time mapping structure.

## Declaration

```objectivec
+ (NSValue *) valueWithCMTimeMapping:(CMTimeMapping) timeMapping;
```

## Parameters

- `timeMapping`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the time mapping information.

## See Also

### Related Documentation

- [CMTimeMapping](../../coremedia/cmtimemapping.md): A structure that maps a segment of a source time range to a target time range.

### Working with Media Time Values

- [valueWithCMTime:](init%28cmtime_%29.md): Creates a new value object containing the specified CoreMedia time structure.
- [valueWithCMTimeRange:](init%28cmtimerange_%29.md): Creates a new value object containing the specified CoreMedia time range structure.
- [CMTimeValue](timevalue.md): The CoreMedia time structure representation of the value.
- [CMTimeRangeValue](timerangevalue.md): The CoreMedia time range structure representation of the value.
- [CMTimeMappingValue](timemappingvalue.md): The CoreMedia time mapping structure representation of the value.
