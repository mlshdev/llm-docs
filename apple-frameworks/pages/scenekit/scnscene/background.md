> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscene/background](https://developer.apple.com/documentation/scenekit/scnscene/background)

# background (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A background to be rendered before the rest of the scene.

## Declaration

```swift
var background: SCNMaterialProperty { get }
```

<a id="Discussion"></a>

## Discussion

If the material property’s [contents](../scnmaterialproperty/contents.md) object is `nil`, SceneKit does not draw any background before drawing the rest of the scene. (If the scene is presented in an [SCNView](../scnview.md) instance, the view’s background color is visible behind the contents of the scene.)

If you specify a cube map texture for the material property (see the discussion of the [contents](../scnmaterialproperty/contents.md) property), SceneKit renders the background as a skybox.

## See Also

### Accessing Scene Contents

- [rootNode](rootnode.md): The root node of the scene graph.
- [lightingEnvironment](lightingenvironment.md): A cube map texture that depicts the environment surrounding the scene’s contents, used for advanced lighting effects.

# background (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

A background to be rendered before the rest of the scene.

## Declaration

```objectivec
@property (nonatomic, readonly) SCNMaterialProperty * background;
```

<a id="Discussion"></a>

## Discussion

If the material property’s [contents](../scnmaterialproperty/contents.md) object is `nil`, SceneKit does not draw any background before drawing the rest of the scene. (If the scene is presented in an [SCNView](../scnview.md) instance, the view’s background color is visible behind the contents of the scene.)

If you specify a cube map texture for the material property (see the discussion of the [contents](../scnmaterialproperty/contents.md) property), SceneKit renders the background as a skybox.

## See Also

### Accessing Scene Contents

- [rootNode](rootnode.md): The root node of the scene graph.
- [lightingEnvironment](lightingenvironment.md): A cube map texture that depicts the environment surrounding the scene’s contents, used for advanced lighting effects.
