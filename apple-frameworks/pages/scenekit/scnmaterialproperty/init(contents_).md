> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterialproperty/init(contents:)](https://developer.apple.com/documentation/scenekit/scnmaterialproperty/init(contents:))

# init(contents:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a new material property object with the specified contents.

## Declaration

```swift
convenience init(contents: Any)
```

## Parameters

- `contents`: The visual contents of the material property—a color, image, or source of animated content. For details, see the discussion of the  [contents](contents.md) property.

<a id="return-value"></a>

## Return Value

A new material property object.

<a id="Discussion"></a>

## Discussion

Newly created [SCNMaterial](../scnmaterial.md) objects contain [SCNMaterialProperty](../scnmaterialproperty.md) instances for all of their visual properties. To change a material’s visual properties, you modify those instances rather than creating new material property objects.

You create new [SCNMaterialProperty](../scnmaterialproperty.md) instances to provide textures for use with custom GLSL shaders—for details, see [SCNShadable](../scnshadable.md).

# materialPropertyWithContents: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

Creates a new material property object with the specified contents.

## Declaration

```objectivec
+ (instancetype) materialPropertyWithContents:(id) contents;
```

## Parameters

- `contents`: The visual contents of the material property—a color, image, or source of animated content. For details, see the discussion of the  [contents](contents.md) property.

<a id="return-value"></a>

## Return Value

A new material property object.

<a id="Discussion"></a>

## Discussion

Newly created [SCNMaterial](../scnmaterial.md) objects contain [SCNMaterialProperty](../scnmaterialproperty.md) instances for all of their visual properties. To change a material’s visual properties, you modify those instances rather than creating new material property objects.

You create new [SCNMaterialProperty](../scnmaterialproperty.md) instances to provide textures for use with custom GLSL shaders—for details, see [SCNShadable](../scnshadable.md).
