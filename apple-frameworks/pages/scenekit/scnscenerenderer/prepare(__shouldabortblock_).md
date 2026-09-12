> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenerenderer/prepare(_:shouldabortblock:)](https://developer.apple.com/documentation/scenekit/scnscenerenderer/prepare(_:shouldabortblock:))

# prepare(\_:shouldAbortBlock:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Prepares a SceneKit object for rendering.

## Declaration

```swift
func prepare(_ object: Any, shouldAbortBlock block: (() -> Bool)? = nil) -> Bool
```

## Parameters

- `object`: An [SCNScene](../scnscene.md), [SCNNode](../scnnode.md), [SCNGeometry](../scngeometry.md), or [SCNMaterial](../scnmaterial.md) instance.
- `block`: A block that SceneKit calls periodically while preparing the object. The block takes no parameters.

  Your block should return [false](https://developer.apple.com/documentation/swift/false) to tell SceneKit to continue preparing the object, or [true](https://developer.apple.com/documentation/swift/true) to cancel preparation.

  Pass `nil` for this parameter if you do not need an opportunity to cancel preparing the object.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the object was successfully prepared for rendering, or [false](https://developer.apple.com/documentation/swift/false) if preparation was canceled.

<a id="Discussion"></a>

## Discussion

By default, SceneKit lazily loads resources onto the GPU for rendering. This approach uses memory and GPU bandwidth efficiently, but can lead to stutters in an otherwise smooth frame rate when you add large amounts of new content to an animated scene. To avoid such issues, use this method to prepare content for drawing before adding it to the scene. You can call this method on a secondary thread to prepare content asynchronously.

SceneKit prepares all content associated with the `object` parameter you provide. If you provide an [SCNMaterial](../scnmaterial.md) object, SceneKit loads any texture images assigned to its material properties. If you provide an [SCNGeometry](../scngeometry.md) object, SceneKit loads all materials attached to the geometry, as well as its vertex data. If you provide an [SCNNode](../scnnode.md) or [SCNScene](../scnscene.md) object, SceneKit loads all geometries and materials associated with the node and all its child nodes, or with the entire node hierarchy of the scene.

You can use the `block` parameter to cancel preparation if content is no longer needed. For example, in a game you might use this method to preload areas of the game world the player is soon to enter, but if the player character dies before entering those areas, you can return [true](https://developer.apple.com/documentation/swift/true) from the block to cancel preloading.

You can observe the progress of this operation with the [Progress](../../foundation/progress.md) class. For details, see [Progress](../../foundation/progress.md).

## See Also

### Preloading Renderer Resources

- [prepare(\_:completionHandler:)](prepare%28__completionhandler_%29.md): Prepares the specified SceneKit objects for rendering, using a background thread.

# prepareObject:shouldAbortBlock: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

Prepares a SceneKit object for rendering.

## Declaration

```objectivec
- (BOOL) prepareObject:(id) object shouldAbortBlock:(BOOL (^)()) block;
```

## Parameters

- `object`: An [SCNScene](../scnscene.md), [SCNNode](../scnnode.md), [SCNGeometry](../scngeometry.md), or [SCNMaterial](../scnmaterial.md) instance.
- `block`: A block that SceneKit calls periodically while preparing the object. The block takes no parameters.

  Your block should return [false](https://developer.apple.com/documentation/swift/false) to tell SceneKit to continue preparing the object, or [true](https://developer.apple.com/documentation/swift/true) to cancel preparation.

  Pass `nil` for this parameter if you do not need an opportunity to cancel preparing the object.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the object was successfully prepared for rendering, or [false](https://developer.apple.com/documentation/swift/false) if preparation was canceled.

<a id="Discussion"></a>

## Discussion

By default, SceneKit lazily loads resources onto the GPU for rendering. This approach uses memory and GPU bandwidth efficiently, but can lead to stutters in an otherwise smooth frame rate when you add large amounts of new content to an animated scene. To avoid such issues, use this method to prepare content for drawing before adding it to the scene. You can call this method on a secondary thread to prepare content asynchronously.

SceneKit prepares all content associated with the `object` parameter you provide. If you provide an [SCNMaterial](../scnmaterial.md) object, SceneKit loads any texture images assigned to its material properties. If you provide an [SCNGeometry](../scngeometry.md) object, SceneKit loads all materials attached to the geometry, as well as its vertex data. If you provide an [SCNNode](../scnnode.md) or [SCNScene](../scnscene.md) object, SceneKit loads all geometries and materials associated with the node and all its child nodes, or with the entire node hierarchy of the scene.

You can use the `block` parameter to cancel preparation if content is no longer needed. For example, in a game you might use this method to preload areas of the game world the player is soon to enter, but if the player character dies before entering those areas, you can return [true](https://developer.apple.com/documentation/swift/true) from the block to cancel preloading.

You can observe the progress of this operation with the [NSProgress](../../foundation/progress.md) class. For details, see [NSProgress](../../foundation/progress.md).

## See Also

### Preloading Renderer Resources

- [prepareObjects:withCompletionHandler:](prepare%28__completionhandler_%29.md): Prepares the specified SceneKit objects for rendering, using a background thread.
