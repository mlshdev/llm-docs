> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/materialcolorparameter](https://developer.apple.com/documentation/realitykit/materialcolorparameter)

# MaterialColorParameter

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The color parameter applied to a material.

## Declaration

```swift
enum MaterialColorParameter
```

## Topics

### Selecting color parameters

- [MaterialColorParameter.color(\_:)](materialcolorparameter/color%28__%29-7gx04.md): A color value in macOS.
- [MaterialColorParameter.texture(\_:)](materialcolorparameter/texture%28__%29.md): A texture resource.

### Operators

- [==(\_:\_:)](materialcolorparameter/==%28____%29.md): Indicates whether two color parameters are equal.

### Enumeration Cases

- [MaterialColorParameter.color(\_:)](materialcolorparameter/color%28__%29-49aw0.md): A color value in macOS.

### Instance Methods

- [hash(into:)](materialcolorparameter/hash%28into_%29.md): Hashes the essential components of the color parameter by feeding them into the given hash function.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Material types

- [Material](material.md): A type that describes the material aspects of a mesh, like color and texture.
- [Material.Color](material/color.md): An alias for the color type that’s appropriate for the current platform.
- [Material.Parameters](material/parameters.md): The parameter type that custom materials uses for properties the framework passes to shader functions.
- [MaterialParameterTypes](materialparametertypes.md): A set of types that material parameters can use.
- [MaterialParameters](materialparameters.md)
- [MaterialScalarParameter](materialscalarparameter.md): The scalar parameter applied to a material.
