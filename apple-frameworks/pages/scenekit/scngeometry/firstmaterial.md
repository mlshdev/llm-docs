> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometry/firstmaterial](https://developer.apple.com/documentation/scenekit/scngeometry/firstmaterial)

# firstMaterial (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The first material attached to the geometry.

## Declaration

```swift
var firstMaterial: SCNMaterial? { get set }
```

<a id="Discussion"></a>

## Discussion

Calling this convenience method is equivalent to retrieving the first object from the geometry’s [materials](materials.md) array. This property’s value is `nil` if the geometry has no attached materials.

## See Also

### Managing a Geometry’s Materials

- [materials](materials.md): An array of [SCNMaterial](../scnmaterial.md) objects that determine the geometry’s appearance when rendered.
- [material(named:)](material%28named_%29.md): Returns the first material attached to the geometry with the specified name.
- [insertMaterial(\_:at:)](insertmaterial%28__at_%29.md): Attaches a material to the geometry at the specified index.
- [removeMaterial(at:)](removematerial%28at_%29.md): Removes a material attached to the geometry.
- [replaceMaterial(at:with:)](replacematerial%28at_with_%29.md): Replaces a material attached to the geometry with another.

# firstMaterial (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The first material attached to the geometry.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SCNMaterial * firstMaterial;
```

<a id="Discussion"></a>

## Discussion

Calling this convenience method is equivalent to retrieving the first object from the geometry’s [materials](materials.md) array. This property’s value is `nil` if the geometry has no attached materials.

## See Also

### Managing a Geometry’s Materials

- [materials](materials.md): An array of [SCNMaterial](../scnmaterial.md) objects that determine the geometry’s appearance when rendered.
- [materialWithName:](material%28named_%29.md): Returns the first material attached to the geometry with the specified name.
- [insertMaterial:atIndex:](insertmaterial%28__at_%29.md): Attaches a material to the geometry at the specified index.
- [removeMaterialAtIndex:](removematerial%28at_%29.md): Removes a material attached to the geometry.
- [replaceMaterialAtIndex:withMaterial:](replacematerial%28at_with_%29.md): Replaces a material attached to the geometry with another.
