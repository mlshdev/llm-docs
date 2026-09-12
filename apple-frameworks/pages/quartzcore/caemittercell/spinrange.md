> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caemittercell/spinrange](https://developer.apple.com/documentation/quartzcore/caemittercell/spinrange)

# spinRange (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The amount by which the spin of the cell can vary over its lifetime. Animatable.

## Declaration

```swift
var spinRange: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The range specifies the mean amount the [spin](spin.md) value can vary over the cell’s lifetime.

The default value of this property is `0.0`.

## See Also

### Setting Emitter Cell Motion Attributes

- [spin](spin.md): The rotational velocity, measured in radians per second, to apply to the cell. Animatable.
- [emissionLatitude](emissionlatitude.md): The latitudinal orientation of the emission angle. Animatable.
- [emissionLongitude](emissionlongitude.md): The longitudinal orientation of the emission angle. Animatable.
- [emissionRange](emissionrange.md): The angle, in radians, defining a cone around the emission angle. Animatable.

# spinRange (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The amount by which the spin of the cell can vary over its lifetime. Animatable.

## Declaration

```objectivec
@property CGFloat spinRange;
```

<a id="Discussion"></a>

## Discussion

The range specifies the mean amount the [spin](spin.md) value can vary over the cell’s lifetime.

The default value of this property is `0.0`.

## See Also

### Setting Emitter Cell Motion Attributes

- [spin](spin.md): The rotational velocity, measured in radians per second, to apply to the cell. Animatable.
- [emissionLatitude](emissionlatitude.md): The latitudinal orientation of the emission angle. Animatable.
- [emissionLongitude](emissionlongitude.md): The longitudinal orientation of the emission angle. Animatable.
- [emissionRange](emissionrange.md): The angle, in radians, defining a cone around the emission angle. Animatable.
