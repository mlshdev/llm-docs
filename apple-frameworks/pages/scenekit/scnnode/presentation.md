> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/presentation](https://developer.apple.com/documentation/scenekit/scnnode/presentation)

# presentation (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A node object representing the state of the node as it currently appears onscreen.

## Declaration

```swift
var presentation: SCNNode { get }
```

<a id="Discussion"></a>

## Discussion

When you use implicit animation (see [SCNTransaction](../scntransaction.md)) to change a node’s properties, those node properties are set immediately to their target values, even though the animated node content appears to transition from the old property values to the new. During the animation SceneKit maintains a copy of the node, called the **presentation node**, whose properties reflect the transitory values determined by any in-flight animations currently affecting the node. The presentation node’s properties provide a close approximation to the version of the node that is currently displayed. SceneKit also uses the presentation node when computing the results of explicit animations, physics, and constraints.

Do not modify the properties of the presentation node. (Attempting to do so results in undefined behavior.) Instead, you use the presentation node to read current animation values—for example, to create a new animation starting at those values.

The presentation node has no parent or child nodes. To access animated properties of related nodes, use the node’s own [parent](parent.md) and [childNodes](childnodes.md) properties and the [presentation](presentation.md) property of each related node.

## See Also

### Working with Node Animation

- [isPaused](ispaused.md): A Boolean value that determines whether to run actions and animations attached to the node and its child nodes.

# presentationNode (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A node object representing the state of the node as it currently appears onscreen.

## Declaration

```objectivec
@property (nonatomic, readonly) SCNNode * presentationNode;
```

<a id="Discussion"></a>

## Discussion

When you use implicit animation (see [SCNTransaction](../scntransaction.md)) to change a node’s properties, those node properties are set immediately to their target values, even though the animated node content appears to transition from the old property values to the new. During the animation SceneKit maintains a copy of the node, called the **presentation node**, whose properties reflect the transitory values determined by any in-flight animations currently affecting the node. The presentation node’s properties provide a close approximation to the version of the node that is currently displayed. SceneKit also uses the presentation node when computing the results of explicit animations, physics, and constraints.

Do not modify the properties of the presentation node. (Attempting to do so results in undefined behavior.) Instead, you use the presentation node to read current animation values—for example, to create a new animation starting at those values.

The presentation node has no parent or child nodes. To access animated properties of related nodes, use the node’s own [parentNode](parent.md) and [childNodes](childnodes.md) properties and the [presentationNode](presentation.md) property of each related node.

## See Also

### Working with Node Animation

- [paused](ispaused.md): A Boolean value that determines whether to run actions and animations attached to the node and its child nodes.
