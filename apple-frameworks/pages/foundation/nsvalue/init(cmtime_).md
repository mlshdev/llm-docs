> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsvalue/init(cmtime:)](https://developer.apple.com/documentation/foundation/nsvalue/init(cmtime:))

# init(CMTime:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a new value object containing the specified CoreMedia time structure.

## Declaration

```swift
init(CMTime time: CMTime)
```

```swift
init(time: CMTime)
```

## Parameters

- `time`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the media time information.

## See Also

### Related Documentation

- [CMTime](../../coremedia/cmtime.md): A structure that represents time.

### Working with Media Time Values

- [init(CMTimeRange:)](init%28cmtimerange_%29.md): Creates a new value object containing the specified CoreMedia time range structure.
- [init(CMTimeMapping:)](init%28cmtimemapping_%29.md): Creates a new value object containing the specified CoreMedia time mapping structure.
- [timeValue](timevalue.md): The CoreMedia time structure representation of the value.
- [timeRangeValue](timerangevalue.md): The CoreMedia time range structure representation of the value.
- [timeMappingValue](timemappingvalue.md): The CoreMedia time mapping structure representation of the value.

# valueWithCMTime: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a new value object containing the specified CoreMedia time structure.

## Declaration

```objectivec
+ (NSValue *) valueWithCMTime:(CMTime) time;
```

## Parameters

- `time`: The value for the new object.

<a id="return-value"></a>

## Return Value

A new value object that contains the media time information.

## See Also

### Related Documentation

- [CMTime](../../coremedia/cmtime.md): A structure that represents time.

### Working with Media Time Values

- [valueWithCMTimeRange:](init%28cmtimerange_%29.md): Creates a new value object containing the specified CoreMedia time range structure.
- [valueWithCMTimeMapping:](init%28cmtimemapping_%29.md): Creates a new value object containing the specified CoreMedia time mapping structure.
- [CMTimeValue](timevalue.md): The CoreMedia time structure representation of the value.
- [CMTimeRangeValue](timerangevalue.md): The CoreMedia time range structure representation of the value.
- [CMTimeMappingValue](timemappingvalue.md): The CoreMedia time mapping structure representation of the value.
