> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelmaterialparametermapping/constantlocation

# LowLevelMaterialParameterMapping.ConstantLocation

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The resolved buffer and constant slot indices for a named constant parameter.

## Declaration

```swift
struct ConstantLocation
```

## Topics

### Accessing the constant index

- [constantIndex](constantlocation/constantindex.md): The index of the constant within the buffer slot’s constant array.

### Instance Properties

- [bufferIndex](constantlocation/bufferindex.md): The buffer slot index within the argument table.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Locating parameters

- [bufferLocation(named:)](bufferlocation%28named_%29.md): Returns the argument table buffer slot index for the named buffer parameter, or `nil` if no parameter with that name exists.
- [textureLocation(named:)](texturelocation%28named_%29.md): Returns the argument table texture slot index for the named texture parameter, or `nil` if no parameter with that name exists.
- [constantLocation(named:)](constantlocation%28named_%29.md): Returns the resolved buffer and constant indices for the named constant parameter, or `nil` if no parameter with that name exists.
