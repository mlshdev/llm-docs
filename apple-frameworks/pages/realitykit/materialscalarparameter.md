> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/materialscalarparameter](https://developer.apple.com/documentation/realitykit/materialscalarparameter)

# MaterialScalarParameter

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The scalar parameter applied to a material.

## Declaration

```swift
enum MaterialScalarParameter
```

## Topics

### Getting scalar parameters

- [MaterialScalarParameter.float(\_:)](materialscalarparameter/float%28__%29.md): A scalar, single-precision value.
- [MaterialScalarParameter.texture(\_:)](materialscalarparameter/texture%28__%29.md): A one-channel texture.

### Creating a scalar parameter

- [init(floatLiteral:)](materialscalarparameter/init%28floatliteral_%29.md): Creates a scalar parameter from a floating-point literal.
- [init(integerLiteral:)](materialscalarparameter/init%28integerliteral_%29.md): Creates a scalar parameter from an integer literal.

### Operators

- [==(\_:\_:)](materialscalarparameter/==%28____%29.md): Indicates whether two scalar parameters are equal.

### Instance Methods

- [hash(into:)](materialscalarparameter/hash%28into_%29.md): Hashes the essential components of the scalar parameter by feeding them into the given hash function.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByFloatLiteral](https://developer.apple.com/documentation/swift/expressiblebyfloatliteral)
- [ExpressibleByIntegerLiteral](https://developer.apple.com/documentation/swift/expressiblebyintegerliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Material types

- [Material](material.md): A type that describes the material aspects of a mesh, like color and texture.
- [Material.Color](material/color.md): An alias for the color type that’s appropriate for the current platform.
- [Material.Parameters](material/parameters.md): The parameter type that custom materials uses for properties the framework passes to shader functions.
- [MaterialParameterTypes](materialparametertypes.md): A set of types that material parameters can use.
- [MaterialParameters](materialparameters.md)
- [MaterialColorParameter](materialcolorparameter.md): The color parameter applied to a material.
