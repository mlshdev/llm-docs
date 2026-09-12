> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/pointerargument](https://developer.apple.com/documentation/accelerate/bnnsgraph/pointerargument)

# BNNSGraph.PointerArgument

**Framework:** Accelerate  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS · watchOS 11.0+

A type that BNNS Graph accepts as an input-output argument.

## Declaration

```swift
protocol PointerArgument
```

## Topics

### Querying a pointer argument’s properties

- [baseAddress](pointerargument/baseaddress.md): A pointer to the first element of the buffer.
- [count](pointerargument/count.md): The number of elements in the buffer.

### Associated Types

- [Element](pointerargument/element.md): The pointer argument’s element type.

## See Also

### Executing a graph

- [executeFunction(\_:arguments:)](context/executefunction%28__arguments_%29-8bhcn.md): Executes the specified function using an array of input and output tensors.
- [executeFunction(\_:arguments:)](context/executefunction%28__arguments_%29-95snr.md): Executes the specified function using an array of input and output pointers.
