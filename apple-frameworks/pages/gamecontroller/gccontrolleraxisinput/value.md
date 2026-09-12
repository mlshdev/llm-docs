> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrolleraxisinput/value](https://developer.apple.com/documentation/gamecontroller/gccontrolleraxisinput/value)

# value (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The current value of the axis.

## Declaration

```swift
var value: Float { get }
```

<a id="Discussion"></a>

## Discussion

Often a physical controller ignores values near the neutral position called the dead zone. The [GCControllerAxisInput](../gccontrolleraxisinput.md) element handles this dead zone, and other physical constraints of a hardware control, by computing a normalized value.

The normalized value ranges from `-1` to `1`. If the value is `0`, the movement is in the dead zone. A nonzero value indicates the moment is outside of the dead zone.

## See Also

### Accessing the input values

- [setValue(\_:)](setvalue%28__%29.md): Sets the normalized value of the axis.

# value (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The current value of the axis.

## Declaration

```objectivec
@property (nonatomic, readonly) float value;
```

<a id="Discussion"></a>

## Discussion

Often a physical controller ignores values near the neutral position called the dead zone. The [GCControllerAxisInput](../gccontrolleraxisinput.md) element handles this dead zone, and other physical constraints of a hardware control, by computing a normalized value.

The normalized value ranges from `-1` to `1`. If the value is `0`, the movement is in the dead zone. A nonzero value indicates the moment is outside of the dead zone.

## See Also

### Accessing the input values

- [setValue:](setvalue%28__%29.md): Sets the normalized value of the axis.
