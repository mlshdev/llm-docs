> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltransform/setidentity()](https://developer.apple.com/documentation/modelio/mdltransform/setidentity())

# setIdentity() (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets all factors of the transform to those of the identity transformation.

## Declaration

```swift
func setIdentity()
```

<a id="Discussion"></a>

## Discussion

The identity transform is equivalent to the lack of a transformation, so an object affected by the transform uses the same coordinate space as its parent. Calling this method also erases any time-sampled data, creating a static transform.

## See Also

### Using Factors of a Static Transform

- [translation](translation.md): The x-, y-, and z-axis offsets of the transform relative to its parent coordinate space.
- [rotation](rotation.md): The orientation, as a vector of Euler angles in radians, of the transform relative to its parent coordinate space.
- [scale](scale.md): The x-, y-, and z-axis scale factors of the transform relative to its parent coordinate space.
- [shear](shear.md): The x-, y-, and z-axis shear factors of the transform relative to its parent coordinate space.

# setIdentity (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Sets all factors of the transform to those of the identity transformation.

## Declaration

```objectivec
- (void) setIdentity;
```

<a id="Discussion"></a>

## Discussion

The identity transform is equivalent to the lack of a transformation, so an object affected by the transform uses the same coordinate space as its parent. Calling this method also erases any time-sampled data, creating a static transform.

## See Also

### Using Factors of a Static Transform

- [translation](translation.md): The x-, y-, and z-axis offsets of the transform relative to its parent coordinate space.
- [rotation](rotation.md): The orientation, as a vector of Euler angles in radians, of the transform relative to its parent coordinate space.
- [scale](scale.md): The x-, y-, and z-axis scale factors of the transform relative to its parent coordinate space.
- [shear](shear.md): The x-, y-, and z-axis shear factors of the transform relative to its parent coordinate space.
