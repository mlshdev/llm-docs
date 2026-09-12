> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemoutput/itemtime(formachabsolutetime:)](https://developer.apple.com/documentation/avfoundation/avplayeritemoutput/itemtime(formachabsolutetime:))

# itemTime(forMachAbsoluteTime:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Converts a Mach host time to the item’s timebase.

## Declaration

```swift
func itemTime(forMachAbsoluteTime machAbsoluteTime: Int64) -> CMTime
```

## Parameters

- `machAbsoluteTime`: The Mach host time to convert. You typically retrieve this value using the `mach_absolute_time` function.

<a id="return-value"></a>

## Return Value

The equivalent time in the item’s timebase.

## See Also

### Time conversion

- [itemTime(forHostTime:)](itemtime%28forhosttime_%29.md): Converts a host time, specified in seconds, to the item’s timebase.
- [itemTime(for:)](itemtime%28for_%29.md): Converts a Core Video timestamp to the item’s timebase.

# itemTimeForMachAbsoluteTime: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Converts a Mach host time to the item’s timebase.

## Declaration

```objectivec
- (CMTime) itemTimeForMachAbsoluteTime:(int64_t) machAbsoluteTime;
```

## Parameters

- `machAbsoluteTime`: The Mach host time to convert. You typically retrieve this value using the `mach_absolute_time` function.

<a id="return-value"></a>

## Return Value

The equivalent time in the item’s timebase.

## See Also

### Time conversion

- [itemTimeForHostTime:](itemtime%28forhosttime_%29.md): Converts a host time, specified in seconds, to the item’s timebase.
- [itemTimeForCVTimeStamp:](itemtime%28for_%29.md): Converts a Core Video timestamp to the item’s timebase.
