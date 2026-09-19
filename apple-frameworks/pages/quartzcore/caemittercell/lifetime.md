> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartzcore/caemittercell/lifetime

# lifetime (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The lifetime of the cell, in seconds. Animatable.

## Declaration

```swift
var lifetime: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The lifetime of the cell will vary by a random amount with the range specified by [lifetimeRange](lifetimerange.md).

The default value of this property is `0.0`.

## See Also

### Setting Emitter Cell Temporal Attributes

- [lifetimeRange](lifetimerange.md): The mean value by which the [lifetime](lifetime.md) of the cell can vary. Animatable.
- [birthRate](birthrate.md): The number of emitted objects created every second. Animatable.
- [scaleSpeed](scalespeed.md): The speed at which the scale changes over the lifetime of the cell. Animatable.
- [velocity](velocity.md): The initial velocity of the cell. Animatable.
- [velocityRange](velocityrange.md): The amount by which the velocity of the cell can vary. Animatable.
- [xAcceleration](xacceleration.md): The x component of an acceleration vector applied to cell.
- [yAcceleration](yacceleration.md): The y component of an acceleration vector applied to cell.
- [zAcceleration](zacceleration.md): The z component of an acceleration vector applied to cell.

# lifetime (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The lifetime of the cell, in seconds. Animatable.

## Declaration

```objectivec
@property float lifetime;
```

<a id="Discussion"></a>

## Discussion

The lifetime of the cell will vary by a random amount with the range specified by [lifetimeRange](lifetimerange.md).

The default value of this property is `0.0`.

## See Also

### Setting Emitter Cell Temporal Attributes

- [lifetimeRange](lifetimerange.md): The mean value by which the [lifetime](lifetime.md) of the cell can vary. Animatable.
- [birthRate](birthrate.md): The number of emitted objects created every second. Animatable.
- [scaleSpeed](scalespeed.md): The speed at which the scale changes over the lifetime of the cell. Animatable.
- [velocity](velocity.md): The initial velocity of the cell. Animatable.
- [velocityRange](velocityrange.md): The amount by which the velocity of the cell can vary. Animatable.
- [xAcceleration](xacceleration.md): The x component of an acceleration vector applied to cell.
- [yAcceleration](yacceleration.md): The y component of an acceleration vector applied to cell.
- [zAcceleration](zacceleration.md): The z component of an acceleration vector applied to cell.
