> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdualsenseadaptivetrigger/armposition](https://developer.apple.com/documentation/gamecontroller/gcdualsenseadaptivetrigger/armposition)

# armPosition (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+

The position of the trigger’s arm.

## Declaration

```swift
var armPosition: Float { get }
```

<a id="Discussion"></a>

## Discussion

This property represents the value of the stepped mechanical arm inside the trigger and isn’t the same as the trigger’s inherited `value` property. This property ranges between `0` and `1`, where `0` represents the minimum and `1` represents the maximum position.

## See Also

### Getting the arm position

- [discretePositionCount](discretepositioncount.md): The number of discrete control positions that the DualSense adaptive triggers support.

# armPosition (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+

The position of the trigger’s arm.

## Declaration

```objectivec
@property (nonatomic, readonly) float armPosition;
```

<a id="Discussion"></a>

## Discussion

This property represents the value of the stepped mechanical arm inside the trigger and isn’t the same as the trigger’s inherited `value` property. This property ranges between `0` and `1`, where `0` represents the minimum and `1` represents the maximum position.

## See Also

### Getting the arm position

- [GCDualSenseAdaptiveTriggerDiscretePositionCount](discretepositioncount.md): The number of discrete control positions that the DualSense adaptive triggers support.
