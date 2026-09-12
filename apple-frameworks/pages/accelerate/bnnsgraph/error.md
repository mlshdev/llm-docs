> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/error](https://developer.apple.com/documentation/accelerate/bnnsgraph/error)

# BNNSGraph.Error

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS · watchOS 11.0+

Error codes that a graph context throws.

## Declaration

```swift
enum Error
```

## Topics

### Error codes

- [BNNSGraph.Error.unableToCreateContext](error/unabletocreatecontext.md): The call to the underlying context-creation function failed.
- [BNNSGraph.Error.unableToCreateGraph](error/unabletocreategraph.md): The call to the underlying graph-creation function failed.
- [BNNSGraph.Error.unableToExecute](error/unabletoexecute.md): The call to the underlying graph-execute function failed.
- [BNNSGraph.Error.unableToSetDynamicShapes](error/unabletosetdynamicshapes.md): The call to the underlying set dynamic shapes function failed.

### Enumeration Cases

- [BNNSGraph.Error.unableToMakeGraph(\_:)](error/unabletomakegraph%28__%29.md): Indicates that the call to the underlying `BNNSGraphContextSetDynamicShapes` function failed.

## Relationships

### Conforms To

- [Error](https://developer.apple.com/documentation/swift/error)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
