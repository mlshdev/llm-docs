> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscene/rootnode](https://developer.apple.com/documentation/scenekit/scnscene/rootnode)

# rootNode (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The root node of the scene graph.

## Declaration

```swift
var rootNode: SCNNode { get }
```

<a id="Discussion"></a>

## Discussion

All scene content—nodes, geometries and their materials, lights, cameras, and related objects—is organized in a node hierarchy with a single common root node.

Some scene files created using external tools may describe node hierarchies containing multiple root nodes. When SceneKit imports such files, their separate root nodes will be made children of a new, unique root node.

Each child node’s coordinate system is defined relative to the transformation of its parent node. You should not modify the [transform](../scnnode/transform.md) property of the root node.

## See Also

### Accessing Scene Contents

- [background](background.md): A background to be rendered before the rest of the scene.
- [lightingEnvironment](lightingenvironment.md): A cube map texture that depicts the environment surrounding the scene’s contents, used for advanced lighting effects.

# rootNode (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The root node of the scene graph.

## Declaration

```objectivec
@property (nonatomic, readonly) SCNNode * rootNode;
```

<a id="Discussion"></a>

## Discussion

All scene content—nodes, geometries and their materials, lights, cameras, and related objects—is organized in a node hierarchy with a single common root node.

Some scene files created using external tools may describe node hierarchies containing multiple root nodes. When SceneKit imports such files, their separate root nodes will be made children of a new, unique root node.

Each child node’s coordinate system is defined relative to the transformation of its parent node. You should not modify the [transform](../scnnode/transform.md) property of the root node.

## See Also

### Accessing Scene Contents

- [background](background.md): A background to be rendered before the rest of the scene.
- [lightingEnvironment](lightingenvironment.md): A cube map texture that depicts the environment surrounding the scene’s contents, used for advanced lighting effects.
