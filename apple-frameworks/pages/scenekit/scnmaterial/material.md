> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterial/material](https://developer.apple.com/documentation/scenekit/scnmaterial/material)

# material

**Interface language:** Objective-C

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a new material object.

## Declaration

```objectivec
+ (instancetype) material;
```

<a id="return-value"></a>

## Return Value

A new material object.

<a id="Discussion"></a>

## Discussion

A newly created material contains an [SCNMaterialProperty](../scnmaterialproperty.md) object for each of its eight visual properties. You change a material’s appearance by setting the [contents](../scnmaterialproperty/contents.md) of each visual property. For information on each visual property’s default contents and how it affects a material’s appearance, see Visual Properties for Special Effects.

## See Also

### Creating a Material

- [materialWithMDLMaterial:](materialwithmdlmaterial_.md): Deprecated. Creates a material from the specified Model I/O material object.
- [name](name.md): A name associated with the material.
