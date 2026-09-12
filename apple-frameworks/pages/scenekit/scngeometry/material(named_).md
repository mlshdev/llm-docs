> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometry/material(named:)](https://developer.apple.com/documentation/scenekit/scngeometry/material(named:))

# material(named:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns the first material attached to the geometry with the specified name.

## Declaration

```swift
func material(named name: String) -> SCNMaterial?
```

## Parameters

- `name`: The name of the material to be retrieved.

<a id="return-value"></a>

## Return Value

A material object with the specified name.

<a id="Discussion"></a>

## Discussion

You can use the [name](../scnmaterial/name.md) property of each [SCNMaterial](../scnmaterial.md) object to make managing your scene graph easier. Materials loaded from a scene file may have names assigned by an artist using a 3D authoring tool.

If a geometry has multiple materials attached with the same name, this method returns the first according to the order of the [materials](materials.md) array.

## See Also

### Managing a Geometry’s Materials

- [materials](materials.md): An array of [SCNMaterial](../scnmaterial.md) objects that determine the geometry’s appearance when rendered.
- [firstMaterial](firstmaterial.md): The first material attached to the geometry.
- [insertMaterial(\_:at:)](insertmaterial%28__at_%29.md): Attaches a material to the geometry at the specified index.
- [removeMaterial(at:)](removematerial%28at_%29.md): Removes a material attached to the geometry.
- [replaceMaterial(at:with:)](replacematerial%28at_with_%29.md): Replaces a material attached to the geometry with another.

# materialWithName: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the first material attached to the geometry with the specified name.

## Declaration

```objectivec
- (SCNMaterial *) materialWithName:(NSString *) name;
```

## Parameters

- `name`: The name of the material to be retrieved.

<a id="return-value"></a>

## Return Value

A material object with the specified name.

<a id="Discussion"></a>

## Discussion

You can use the [name](../scnmaterial/name.md) property of each [SCNMaterial](../scnmaterial.md) object to make managing your scene graph easier. Materials loaded from a scene file may have names assigned by an artist using a 3D authoring tool.

If a geometry has multiple materials attached with the same name, this method returns the first according to the order of the [materials](materials.md) array.

## See Also

### Managing a Geometry’s Materials

- [materials](materials.md): An array of [SCNMaterial](../scnmaterial.md) objects that determine the geometry’s appearance when rendered.
- [firstMaterial](firstmaterial.md): The first material attached to the geometry.
- [insertMaterial:atIndex:](insertmaterial%28__at_%29.md): Attaches a material to the geometry at the specified index.
- [removeMaterialAtIndex:](removematerial%28at_%29.md): Removes a material attached to the geometry.
- [replaceMaterialAtIndex:withMaterial:](replacematerial%28at_with_%29.md): Replaces a material attached to the geometry with another.
