> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscene/lightingenvironment](https://developer.apple.com/documentation/scenekit/scnscene/lightingenvironment)

# lightingEnvironment (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A cube map texture that depicts the environment surrounding the scene’s contents, used for advanced lighting effects.

## Declaration

```swift
var lightingEnvironment: SCNMaterialProperty { get }
```

<a id="Discussion"></a>

## Discussion

When rendering materials with the [physicallyBased](../scnmaterial/lightingmodel-swift.struct/physicallybased.md) lighting model, SceneKit illuminates surfaces differently according to the environment that surrounds them. For example, with physically based shading, even a diffuse surface takes on some color from the sky above it and the ground below it.

> **Tip**

>  For realistic results, reuse the same contents for both the lighting environment and the [background](background.md) property.

For information about defining cube maps, see the discussion of the [contents](../scnmaterialproperty/contents.md) property.

## See Also

### Accessing Scene Contents

- [rootNode](rootnode.md): The root node of the scene graph.
- [background](background.md): A background to be rendered before the rest of the scene.

# lightingEnvironment (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A cube map texture that depicts the environment surrounding the scene’s contents, used for advanced lighting effects.

## Declaration

```objectivec
@property (nonatomic, readonly) SCNMaterialProperty * lightingEnvironment;
```

<a id="Discussion"></a>

## Discussion

When rendering materials with the [SCNLightingModelPhysicallyBased](../scnmaterial/lightingmodel-swift.struct/physicallybased.md) lighting model, SceneKit illuminates surfaces differently according to the environment that surrounds them. For example, with physically based shading, even a diffuse surface takes on some color from the sky above it and the ground below it.

> **Tip**

>  For realistic results, reuse the same contents for both the lighting environment and the [background](background.md) property.

For information about defining cube maps, see the discussion of the [contents](../scnmaterialproperty/contents.md) property.

## See Also

### Accessing Scene Contents

- [rootNode](rootnode.md): The root node of the scene graph.
- [background](background.md): A background to be rendered before the rest of the scene.
