> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnoderendererdelegate/rendernode(_:renderer:arguments:)](https://developer.apple.com/documentation/scenekit/scnnoderendererdelegate/rendernode(_:renderer:arguments:))

# renderNode(\_:renderer:arguments:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Tells the delegate to perform rendering for a node.

## Declaration

```swift
optional func renderNode(_ node: SCNNode, renderer: SCNRenderer, arguments: [String : Any])
```

## Parameters

- `node`: The node to render.
- `renderer`: The SceneKit object (such as an [SCNView](../scnview.md) instance) responsible for rendering the scene.
- `arguments`: A dictionary containing transform information necessary for rendering the node. See Rendering Transform Keys for possible keys. The value for each key is an [NSValue](../../foundation/nsvalue.md) object containing an [SCNMatrix4](../scnmatrix4-swift.struct.md) value.

<a id="Discussion"></a>

## Discussion

Implement this method to perform custom rendering for a node. You should only execute Metal or OpenGL drawing commands (and any setup required to perform them) in this method—the results of modifying SceneKit objects in this method are undefined.

- To render using Metal, use the `renderer` parameter to retrieve the scene renderer’s [currentRenderCommandEncoder](../scnscenerenderer/currentrendercommandencoder.md) object and encode your own drawing commands. If you need to reference other Metal state, see the properties listed in [SCNSceneRenderer](../scnscenerenderer.md).
- To render using OpenGL, simply call the relevant OpenGL drawing commands—SceneKit automatically makes its OpenGL context the current context before calling this method. If you need to reference the OpenGL context being rendered into, examine the [context](../scnscenerenderer/context.md) property of the `renderer` parameter.

You must draw using the appropriate graphics technology for the view currently being rendered. Use the [renderingAPI](../scnscenerenderer/renderingapi.md) property of the `renderer` object to determine whether Metal or OpenGL is in use.

# renderNode:renderer:arguments: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Tells the delegate to perform rendering for a node.

## Declaration

```objectivec
- (void) renderNode:(SCNNode *) node renderer:(SCNRenderer *) renderer arguments:(NSDictionary<NSString *,id> *) arguments;
```

## Parameters

- `node`: The node to render.
- `renderer`: The SceneKit object (such as an [SCNView](../scnview.md) instance) responsible for rendering the scene.
- `arguments`: A dictionary containing transform information necessary for rendering the node. See Rendering Transform Keys for possible keys. The value for each key is an [NSValue](../../foundation/nsvalue.md) object containing an [SCNMatrix4](../scnmatrix4-swift.struct.md) value.

<a id="Discussion"></a>

## Discussion

Implement this method to perform custom rendering for a node. You should only execute Metal or OpenGL drawing commands (and any setup required to perform them) in this method—the results of modifying SceneKit objects in this method are undefined.

- To render using Metal, use the `renderer` parameter to retrieve the scene renderer’s [currentRenderCommandEncoder](../scnscenerenderer/currentrendercommandencoder.md) object and encode your own drawing commands. If you need to reference other Metal state, see the properties listed in [SCNSceneRenderer](../scnscenerenderer.md).
- To render using OpenGL, simply call the relevant OpenGL drawing commands—SceneKit automatically makes its OpenGL context the current context before calling this method. If you need to reference the OpenGL context being rendered into, examine the [context](../scnscenerenderer/context.md) property of the `renderer` parameter.

You must draw using the appropriate graphics technology for the view currently being rendered. Use the [renderingAPI](../scnscenerenderer/renderingapi.md) property of the `renderer` object to determine whether Metal or OpenGL is in use.
