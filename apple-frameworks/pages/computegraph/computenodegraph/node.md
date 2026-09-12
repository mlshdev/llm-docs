> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/node](https://developer.apple.com/documentation/computegraph/computenodegraph/node)

# ComputeNodeGraph.Node

**Framework:** Compute Graph  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

## Declaration

```swift
struct Node
```

## Topics

### Initializers

- [init(definition:label:)](node/init%28definition_label_%29.md)

### Instance Properties

- [definition](node/definition.md)
- [kind](node/kind-swift.property.md): Type of the node
- [label](node/label.md): Optional user-provided label for the node
- [metadata](node/metadata.md): Node metadata – data which is not needed during compilation but might be useful at edit time.
- [uniforms](node/uniforms.md): Uniform values for the node.

### Instance Methods

- [input(at:)](node/input%28at_%29.md)
- [input(named:)](node/input%28named_%29.md)
- [inputData(named:)](node/inputdata%28named_%29.md)
- [setInput(\_:\_:)](node/setinput%28____%29-2ittk.md)
- [setInput(\_:\_:)](node/setinput%28____%29-35srn.md)
- [setInput(\_:\_:)](node/setinput%28____%29-3yk57.md)
- [setInput(\_:\_:)](node/setinput%28____%29-9n5yb.md)
- [setInput(at:\_:)](node/setinput%28at___%29-95j9n.md)
- [setInput(at:\_:)](node/setinput%28at___%29-9xg3z.md)

### Enumerations

- [ComputeNodeGraph.Node.Kind](node/kind-swift.enum.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
