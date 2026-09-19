> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelmaterialparametermapping/constantlocation(named:)

# constantLocation(named:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the resolved buffer and constant indices for the named constant parameter, or `nil` if no parameter with that name exists.

## Declaration

```swift
func constantLocation(named name: String) -> LowLevelMaterialParameterMapping.ConstantLocation?
```

## Parameters

- `name`: The name of the constant parameter as declared in the Metal shader.

<a id="return-value"></a>

## Return Value

A [LowLevelMaterialParameterMapping.ConstantLocation](constantlocation.md) with the buffer and constant indices, or `nil` if no constant parameter with that name exists.

## See Also

### Locating parameters

- [bufferLocation(named:)](bufferlocation%28named_%29.md): Returns the argument table buffer slot index for the named buffer parameter, or `nil` if no parameter with that name exists.
- [textureLocation(named:)](texturelocation%28named_%29.md): Returns the argument table texture slot index for the named texture parameter, or `nil` if no parameter with that name exists.
- [LowLevelMaterialParameterMapping.ConstantLocation](constantlocation.md): The resolved buffer and constant slot indices for a named constant parameter.
