> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraph/nodedefinition/name](https://developer.apple.com/documentation/realitykit/shadergraph/nodedefinition/name)

# name

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The unique identifier for this node definition.

## Declaration

```swift
var name: String { get }
```

<a id="discussion"></a>

## Discussion

Names follow the MaterialX convention, encoding the functional operation, input types, and output type. For example, `ND_atan2_float` identifies the two-argument arctangent node whose output is a `float`.

Use this value to look up a specific definition via [definition(named:)](../nodelibrary/definition%28named_%29.md).
