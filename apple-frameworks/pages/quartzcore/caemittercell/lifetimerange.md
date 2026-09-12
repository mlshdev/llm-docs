> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caemittercell/lifetimerange](https://developer.apple.com/documentation/quartzcore/caemittercell/lifetimerange)

# lifetimeRange (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The mean value by which the [lifetime](lifetime.md) of the cell can vary. Animatable.

## Declaration

```swift
var lifetimeRange: Float { get set }
```

<a id="Discussion"></a>

## Discussion

If the [lifetimeRange](lifetimerange.md) is 3 seconds, and the [lifetime](lifetime.md) of the cell is 10 seconds, the cell’s actual lifetime will be between 7 and 13 seconds.

The default value of this property is `0.0`.

## See Also

### Setting Emitter Cell Temporal Attributes

- [lifetime](lifetime.md): The lifetime of the cell, in seconds. Animatable.
- [birthRate](birthrate.md): The number of emitted objects created every second. Animatable.
- [scaleSpeed](scalespeed.md): The speed at which the scale changes over the lifetime of the cell. Animatable.
- [velocity](velocity.md): The initial velocity of the cell. Animatable.
- [velocityRange](velocityrange.md): The amount by which the velocity of the cell can vary. Animatable.
- [xAcceleration](xacceleration.md): The x component of an acceleration vector applied to cell.
- [yAcceleration](yacceleration.md): The y component of an acceleration vector applied to cell.
- [zAcceleration](zacceleration.md): The z component of an acceleration vector applied to cell.

# lifetimeRange (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The mean value by which the [lifetime](lifetime.md) of the cell can vary. Animatable.

## Declaration

```objectivec
@property float lifetimeRange;
```

<a id="Discussion"></a>

## Discussion

If the [lifetimeRange](lifetimerange.md) is 3 seconds, and the [lifetime](lifetime.md) of the cell is 10 seconds, the cell’s actual lifetime will be between 7 and 13 seconds.

The default value of this property is `0.0`.

## See Also

### Setting Emitter Cell Temporal Attributes

- [lifetime](lifetime.md): The lifetime of the cell, in seconds. Animatable.
- [birthRate](birthrate.md): The number of emitted objects created every second. Animatable.
- [scaleSpeed](scalespeed.md): The speed at which the scale changes over the lifetime of the cell. Animatable.
- [velocity](velocity.md): The initial velocity of the cell. Animatable.
- [velocityRange](velocityrange.md): The amount by which the velocity of the cell can vary. Animatable.
- [xAcceleration](xacceleration.md): The x component of an acceleration vector applied to cell.
- [yAcceleration](yacceleration.md): The y component of an acceleration vector applied to cell.
- [zAcceleration](zacceleration.md): The z component of an acceleration vector applied to cell.
