> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseshape/init(engine:mesh:materials:)](https://developer.apple.com/documentation/phase/phaseshape/init(engine:mesh:materials:))

# init(engine:mesh:materials:) (Swift)

**Framework:** PHASE  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates an object of a specific material that the given geometric data shapes.

## Declaration

```swift
convenience init(engine: PHASEEngine, mesh: MDLMesh, materials: [PHASEMaterial])
```

## Parameters

- `engine`: The object that controls this class’s associated audio output.
- `mesh`: A collection of points that connect to form a shape.
- `materials`: An array of objects that describe surface characteristics.

<a id="Discussion"></a>

## Discussion

The framework assigns a material from the material array for every submesh in the mesh object. For example, PHASE infers that the first mesh is wooden if the first element of the material array is [PHASEMaterialPreset.wood](../phasematerialpreset/wood.md).

If the number of submeshes within the mesh is less than or equal to the material array count, each material indexes the corresponding element. If the number of submeshes is greater than the material array count, each material indexes the element at the element index modulo the material count.

The framework generates an error for empty material arrays or `nil` array entries.

## See Also

### Creating a Shape

- [init(engine:mesh:)](init%28engine_mesh_%29.md): Creates an object that the given geometric data shapes.

# initWithEngine:mesh:materials: (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Creates an object of a specific material that the given geometric data shapes.

## Declaration

```objectivec
- (instancetype) initWithEngine:(PHASEEngine *) engine mesh:(MDLMesh *) mesh materials:(NSArray<PHASEMaterial *> *) materials;
```

## Parameters

- `engine`: The object that controls this class’s associated audio output.
- `mesh`: A collection of points that connect to form a shape.
- `materials`: An array of objects that describe surface characteristics.

<a id="Discussion"></a>

## Discussion

The framework assigns a material from the material array for every submesh in the mesh object. For example, PHASE infers that the first mesh is wooden if the first element of the material array is [PHASEMaterialPresetWood](../phasematerialpreset/wood.md).

If the number of submeshes within the mesh is less than or equal to the material array count, each material indexes the corresponding element. If the number of submeshes is greater than the material array count, each material indexes the element at the element index modulo the material count.

The framework generates an error for empty material arrays or `nil` array entries.

## See Also

### Creating a Shape

- [initWithEngine:mesh:](init%28engine_mesh_%29.md): Creates an object that the given geometric data shapes.
