> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometry/insertmaterial(_:at:)](https://developer.apple.com/documentation/scenekit/scngeometry/insertmaterial(_:at:))

# insertMaterial(\_:at:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Attaches a material to the geometry at the specified index.

## Declaration

```swift
func insertMaterial(_ material: SCNMaterial, at index: Int)
```

## Parameters

- `material`: The material to attach.
- `index`: The location in the geometry’s [materials](materials.md) array at which to add the new material.

  > **Important**

  >  Raises an exception ([rangeException](../../foundation/nsexceptionname/rangeexception.md)) if `index` is greater than the number of elements in the [materials](materials.md) array.

## See Also

### Managing a Geometry’s Materials

- [materials](materials.md): An array of [SCNMaterial](../scnmaterial.md) objects that determine the geometry’s appearance when rendered.
- [firstMaterial](firstmaterial.md): The first material attached to the geometry.
- [material(named:)](material%28named_%29.md): Returns the first material attached to the geometry with the specified name.
- [removeMaterial(at:)](removematerial%28at_%29.md): Removes a material attached to the geometry.
- [replaceMaterial(at:with:)](replacematerial%28at_with_%29.md): Replaces a material attached to the geometry with another.

# insertMaterial:atIndex: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Attaches a material to the geometry at the specified index.

## Declaration

```objectivec
- (void) insertMaterial:(SCNMaterial *) material atIndex:(NSUInteger) index;
```

## Parameters

- `material`: The material to attach.
- `index`: The location in the geometry’s [materials](materials.md) array at which to add the new material.

  > **Important**

  >  Raises an exception ([NSRangeException](../../foundation/nsexceptionname/rangeexception.md)) if `index` is greater than the number of elements in the [materials](materials.md) array.

## See Also

### Managing a Geometry’s Materials

- [materials](materials.md): An array of [SCNMaterial](../scnmaterial.md) objects that determine the geometry’s appearance when rendered.
- [firstMaterial](firstmaterial.md): The first material attached to the geometry.
- [materialWithName:](material%28named_%29.md): Returns the first material attached to the geometry with the specified name.
- [removeMaterialAtIndex:](removematerial%28at_%29.md): Removes a material attached to the geometry.
- [replaceMaterialAtIndex:withMaterial:](replacematerial%28at_with_%29.md): Replaces a material attached to the geometry with another.
