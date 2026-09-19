> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/blendtreenode/weight

# weight

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A normalized percentage that designates how much effect this node has relative to peer nodes.

## Declaration

```swift
var weight: BlendWeight { get set }
```

<a id="discussion"></a>

## Discussion

The value of this property relates to the node’s peers in a [sources](../blendtreeblendnode/sources.md) array. The sum of all node weights in a given [sources](../blendtreeblendnode/sources.md) array needs to equal `1.0`.

## See Also

### Configuring the blend tree node

- [name](name.md): A textual name for the blend node.
