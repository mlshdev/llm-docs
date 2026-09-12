> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometry/materials](https://developer.apple.com/documentation/scenekit/scngeometry/materials)

# materials (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An array of [SCNMaterial](../scnmaterial.md) objects that determine the geometry’s appearance when rendered.

## Declaration

```swift
var materials: [SCNMaterial] { get set }
```

<a id="Discussion"></a>

## Discussion

Materials provide the information SceneKit uses to add color, lighting, texture, and special effects when rendering a geometry. Each [SCNMaterial](../scnmaterial.md) object can be shared between several geometries.

If a geometry contains multiple elements (see [elementCount](elementcount.md)), you can associate a separate material with each geometry element. For example, the teapot in [Figure 1](https://developer.apple.com/documentation/scenekit/scngeometry/1523472-materials#1965912) has four elements, each with a different material.

![](https://developer.apple.com/images/com.apple.scenekit/media-1965912@2x.png)

If a geometry has the same number of materials as it has geometry elements, the material index corresponds to the element index. For geometries with fewer materials than elements, SceneKit determines the material index for each element by calculating the index of that element modulo the number of materials. For example, in a geometry with six elements and three materials, SceneKit renders the element at index `5` using the material at index `5 % 3 = 2`.

## See Also

### Managing a Geometry’s Materials

- [firstMaterial](firstmaterial.md): The first material attached to the geometry.
- [material(named:)](material%28named_%29.md): Returns the first material attached to the geometry with the specified name.
- [insertMaterial(\_:at:)](insertmaterial%28__at_%29.md): Attaches a material to the geometry at the specified index.
- [removeMaterial(at:)](removematerial%28at_%29.md): Removes a material attached to the geometry.
- [replaceMaterial(at:with:)](replacematerial%28at_with_%29.md): Replaces a material attached to the geometry with another.

# materials (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An array of [SCNMaterial](../scnmaterial.md) objects that determine the geometry’s appearance when rendered.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<SCNMaterial *> * materials;
```

<a id="Discussion"></a>

## Discussion

Materials provide the information SceneKit uses to add color, lighting, texture, and special effects when rendering a geometry. Each [SCNMaterial](../scnmaterial.md) object can be shared between several geometries.

If a geometry contains multiple elements (see [geometryElementCount](elementcount.md)), you can associate a separate material with each geometry element. For example, the teapot in [Figure 1](https://developer.apple.com/documentation/scenekit/scngeometry/1523472-materials#1965912) has four elements, each with a different material.

![](https://developer.apple.com/images/com.apple.scenekit/media-1965912@2x.png)

If a geometry has the same number of materials as it has geometry elements, the material index corresponds to the element index. For geometries with fewer materials than elements, SceneKit determines the material index for each element by calculating the index of that element modulo the number of materials. For example, in a geometry with six elements and three materials, SceneKit renders the element at index `5` using the material at index `5 % 3 = 2`.

## See Also

### Managing a Geometry’s Materials

- [firstMaterial](firstmaterial.md): The first material attached to the geometry.
- [materialWithName:](material%28named_%29.md): Returns the first material attached to the geometry with the specified name.
- [insertMaterial:atIndex:](insertmaterial%28__at_%29.md): Attaches a material to the geometry at the specified index.
- [removeMaterialAtIndex:](removematerial%28at_%29.md): Removes a material attached to the geometry.
- [replaceMaterialAtIndex:withMaterial:](replacematerial%28at_with_%29.md): Replaces a material attached to the geometry with another.
