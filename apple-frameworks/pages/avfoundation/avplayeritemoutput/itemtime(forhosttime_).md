> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemoutput/itemtime(forhosttime:)](https://developer.apple.com/documentation/avfoundation/avplayeritemoutput/itemtime(forhosttime:))

# itemTime(forHostTime:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Converts a host time, specified in seconds, to the item’s timebase.

## Declaration

```swift
func itemTime(forHostTime hostTimeInSeconds: CFTimeInterval) -> CMTime
```

## Parameters

- `hostTimeInSeconds`: A host time value, specified in seconds. For example, you might specify the time value returned by the [CACurrentMediaTime()](../../quartzcore/cacurrentmediatime%28%29.md) function or the timestamp from a [CADisplayLink](../../quartzcore/cadisplaylink.md) object for this parameter.

<a id="return-value"></a>

## Return Value

The equivalent time in the item’s timebase.

<a id="Discussion"></a>

## Discussion

The timestamp associated with a [CADisplayLink](../../quartzcore/cadisplaylink.md) object represents the time of the most recent screen refresh, which is usually a time in the past. If you want to find the time associated with the next screen refresh, you need to increment the timestamp by the value in the display link’s `duration` property.

## See Also

### Time conversion

- [itemTime(forMachAbsoluteTime:)](itemtime%28formachabsolutetime_%29.md): Converts a Mach host time to the item’s timebase.
- [itemTime(for:)](itemtime%28for_%29.md): Converts a Core Video timestamp to the item’s timebase.

# itemTimeForHostTime: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Converts a host time, specified in seconds, to the item’s timebase.

## Declaration

```objectivec
- (CMTime) itemTimeForHostTime:(CFTimeInterval) hostTimeInSeconds;
```

## Parameters

- `hostTimeInSeconds`: A host time value, specified in seconds. For example, you might specify the time value returned by the [CACurrentMediaTime](../../quartzcore/cacurrentmediatime%28%29.md) function or the timestamp from a [CADisplayLink](../../quartzcore/cadisplaylink.md) object for this parameter.

<a id="return-value"></a>

## Return Value

The equivalent time in the item’s timebase.

<a id="Discussion"></a>

## Discussion

The timestamp associated with a [CADisplayLink](../../quartzcore/cadisplaylink.md) object represents the time of the most recent screen refresh, which is usually a time in the past. If you want to find the time associated with the next screen refresh, you need to increment the timestamp by the value in the display link’s `duration` property.

## See Also

### Time conversion

- [itemTimeForMachAbsoluteTime:](itemtime%28formachabsolutetime_%29.md): Converts a Mach host time to the item’s timebase.
- [itemTimeForCVTimeStamp:](itemtime%28for_%29.md): Converts a Core Video timestamp to the item’s timebase.
