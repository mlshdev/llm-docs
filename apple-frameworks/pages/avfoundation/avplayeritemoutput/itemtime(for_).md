> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemoutput/itemtime(for:)](https://developer.apple.com/documentation/avfoundation/avplayeritemoutput/itemtime(for:))

# itemTime(for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Converts a Core Video timestamp to the item’s timebase.

## Declaration

```swift
func itemTime(for timestamp: CVTimeStamp) -> CMTime
```

## Parameters

- `timestamp`: A timestamp value provided by the Core Video framework.

<a id="return-value"></a>

## Return Value

The equivalent time in the item’s timebase.

## See Also

### Time conversion

- [itemTime(forHostTime:)](itemtime%28forhosttime_%29.md): Converts a host time, specified in seconds, to the item’s timebase.
- [itemTime(forMachAbsoluteTime:)](itemtime%28formachabsolutetime_%29.md): Converts a Mach host time to the item’s timebase.

# itemTimeForCVTimeStamp: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Converts a Core Video timestamp to the item’s timebase.

## Declaration

```objectivec
- (CMTime) itemTimeForCVTimeStamp:(CVTimeStamp) timestamp;
```

## Parameters

- `timestamp`: A timestamp value provided by the Core Video framework.

<a id="return-value"></a>

## Return Value

The equivalent time in the item’s timebase.

## See Also

### Time conversion

- [itemTimeForHostTime:](itemtime%28forhosttime_%29.md): Converts a host time, specified in seconds, to the item’s timebase.
- [itemTimeForMachAbsoluteTime:](itemtime%28formachabsolutetime_%29.md): Converts a Mach host time to the item’s timebase.
