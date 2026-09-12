> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/flattenedclone()](https://developer.apple.com/documentation/scenekit/scnnode/flattenedclone())

# flattenedClone() (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates an optimized copy of the node and its children.

## Declaration

```swift
func flattenedClone() -> Self
```

<a id="return-value"></a>

## Return Value

A new single node containing the combined geometries and materials of the node and its child node subtree.

<a id="Discussion"></a>

## Discussion

Rendering complex node hierarchies can incur a performance cost. Each geometry and material requires a separate draw command to be sent to the GPU, and each draw command comes with a performance overhead. If you plan for a portion of your scene’s node hierarchy to remain static (with respect to itself, if not the rest of the scene), use this method to create a single node containing all elements of that node hierarchy that SceneKit can render using fewer draw commands.

## See Also

### Copying a Node

- [clone()](clone%28%29.md): Creates a copy of the node and its children.

# flattenedClone (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

Creates an optimized copy of the node and its children.

## Declaration

```objectivec
- (instancetype) flattenedClone;
```

<a id="return-value"></a>

## Return Value

A new single node containing the combined geometries and materials of the node and its child node subtree.

<a id="Discussion"></a>

## Discussion

Rendering complex node hierarchies can incur a performance cost. Each geometry and material requires a separate draw command to be sent to the GPU, and each draw command comes with a performance overhead. If you plan for a portion of your scene’s node hierarchy to remain static (with respect to itself, if not the rest of the scene), use this method to create a single node containing all elements of that node hierarchy that SceneKit can render using fewer draw commands.

## See Also

### Copying a Node

- [clone](clone%28%29.md): Creates a copy of the node and its children.
