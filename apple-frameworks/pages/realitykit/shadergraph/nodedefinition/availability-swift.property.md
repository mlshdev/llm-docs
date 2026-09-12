> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraph/nodedefinition/availability-swift.property](https://developer.apple.com/documentation/realitykit/shadergraph/nodedefinition/availability-swift.property)

# availability

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The availability of this node definition on each platform.

## Declaration

```swift
var availability: [ShaderGraph.NodeDefinition.Platform : ShaderGraph.NodeDefinition.Availability] { get }
```

<a id="discussion"></a>

## Discussion

Prefer [isAvailable(on:version:)](isavailable%28on_version_%29.md) for point-in-time availability checks. Use this property when you need the full version range — for example, to display availability annotations in a node library UI.
