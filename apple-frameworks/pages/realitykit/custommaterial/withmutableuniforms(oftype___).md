> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/custommaterial/withmutableuniforms(oftype:_:)](https://developer.apple.com/documentation/realitykit/custommaterial/withmutableuniforms(oftype:_:))

# withMutableUniforms(ofType:\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+

Calls the given closure with an inout reference to the underlying storage bound to the custom uniforms argument of a surface shader and geometry modifier.

## Declaration

```swift
mutating func withMutableUniforms<UniformsType>(ofType: UniformsType.Type, _ callback: (inout UniformsType, inout CustomMaterial.ResourceStorage<UniformsType>) -> Void)
```

<a id="discussion"></a>

## Discussion

This method operates like [withMutableUniforms(ofType:stage:\_:)](withmutableuniforms%28oftype_stage___%29.md) but sets the same value for all stages at once.

When using this form, ensure that the custom uniforms arguments passed to each stage of your CustomMaterial are of the same type.

## See Also

### Setting shader properties

- [program](program-swift.property.md)
- [custom](custom-swift.property.md): User-defined properties for the material’s shader functions.
- [lightingModel](lightingmodel-swift.property.md): The lighting model that the material uses.
- [withMutableUniforms(ofType:stage:\_:)](withmutableuniforms%28oftype_stage___%29.md): Calls the given closure with an inout reference to the underlying storage bound to the custom uniforms argument of a surface shader or geometry modifier.
