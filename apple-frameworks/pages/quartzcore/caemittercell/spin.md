> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caemittercell/spin](https://developer.apple.com/documentation/quartzcore/caemittercell/spin)

# spin (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The rotational velocity, measured in radians per second, to apply to the cell. Animatable.

## Declaration

```swift
var spin: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The spin of the cell will vary by a random amount with the range specified by [spinRange](spinrange.md).

The default value of this property is `0.0`.

## See Also

### Setting Emitter Cell Motion Attributes

- [spinRange](spinrange.md): The amount by which the spin of the cell can vary over its lifetime. Animatable.
- [emissionLatitude](emissionlatitude.md): The latitudinal orientation of the emission angle. Animatable.
- [emissionLongitude](emissionlongitude.md): The longitudinal orientation of the emission angle. Animatable.
- [emissionRange](emissionrange.md): The angle, in radians, defining a cone around the emission angle. Animatable.

# spin (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

The rotational velocity, measured in radians per second, to apply to the cell. Animatable.

## Declaration

```objectivec
@property CGFloat spin;
```

<a id="Discussion"></a>

## Discussion

The spin of the cell will vary by a random amount with the range specified by [spinRange](spinrange.md).

The default value of this property is `0.0`.

## See Also

### Setting Emitter Cell Motion Attributes

- [spinRange](spinrange.md): The amount by which the spin of the cell can vary over its lifetime. Animatable.
- [emissionLatitude](emissionlatitude.md): The latitudinal orientation of the emission angle. Animatable.
- [emissionLongitude](emissionlongitude.md): The longitudinal orientation of the emission angle. Animatable.
- [emissionRange](emissionrange.md): The angle, in radians, defining a cone around the emission angle. Animatable.
