> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometry/removematerial(at:)](https://developer.apple.com/documentation/scenekit/scngeometry/removematerial(at:))

# removeMaterial(at:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Removes a material attached to the geometry.

## Declaration

```swift
func removeMaterial(at index: Int)
```

## Parameters

- `index`: The index of the attached material to be removed.

  > **Important**

  >  Raises an exception ([rangeException](../../foundation/nsexceptionname/rangeexception.md)) if `index` is beyond the bounds of the [materials](materials.md) array.

## See Also

### Managing a Geometry’s Materials

- [materials](materials.md): An array of [SCNMaterial](../scnmaterial.md) objects that determine the geometry’s appearance when rendered.
- [firstMaterial](firstmaterial.md): The first material attached to the geometry.
- [material(named:)](material%28named_%29.md): Returns the first material attached to the geometry with the specified name.
- [insertMaterial(\_:at:)](insertmaterial%28__at_%29.md): Attaches a material to the geometry at the specified index.
- [replaceMaterial(at:with:)](replacematerial%28at_with_%29.md): Replaces a material attached to the geometry with another.

# removeMaterialAtIndex: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes a material attached to the geometry.

## Declaration

```objectivec
- (void) removeMaterialAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: The index of the attached material to be removed.

  > **Important**

  >  Raises an exception ([NSRangeException](../../foundation/nsexceptionname/rangeexception.md)) if `index` is beyond the bounds of the [materials](materials.md) array.

## See Also

### Managing a Geometry’s Materials

- [materials](materials.md): An array of [SCNMaterial](../scnmaterial.md) objects that determine the geometry’s appearance when rendered.
- [firstMaterial](firstmaterial.md): The first material attached to the geometry.
- [materialWithName:](material%28named_%29.md): Returns the first material attached to the geometry with the specified name.
- [insertMaterial:atIndex:](insertmaterial%28__at_%29.md): Attaches a material to the geometry at the specified index.
- [replaceMaterialAtIndex:withMaterial:](replacematerial%28at_with_%29.md): Replaces a material attached to the geometry with another.
