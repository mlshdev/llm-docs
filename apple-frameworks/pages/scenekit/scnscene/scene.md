> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscene/scene](https://developer.apple.com/documentation/scenekit/scnscene/scene)

# scene

**Interface language:** Objective-C

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates and returns an empty scene.

## Declaration

```objectivec
+ (instancetype) scene;
```

<a id="return-value"></a>

## Return Value

A new, empty scene object.

<a id="Discussion"></a>

## Discussion

An empty scene contains only a root [SCNNode](../scnnode.md) object with no contents. To populate the scene, add children to the root node.

## See Also

### Related Documentation

- [rootNode](rootnode.md): The root node of the scene graph.

### Creating a Scene from a File

- [sceneNamed:](init%28named_%29.md): Loads a scene from a file with the specified name in the app’s main bundle.
- [sceneNamed:inDirectory:options:](init%28named_indirectory_options_%29.md): Loads a scene from a file with the specified name in a specific subdirectory of the app’s main bundle.
- [sceneWithURL:options:error:](init%28url_options_%29-7ugvv.md): Loads a scene from the specified URL.
