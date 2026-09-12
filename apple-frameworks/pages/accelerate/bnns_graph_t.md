> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns_graph_t](https://developer.apple.com/documentation/accelerate/bnns_graph_t)

# bnns_graph_t (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The compiled graph object.

## Declaration

```swift
struct bnns_graph_t
```

## Topics

### Initializing a graph

- [init()](bnns_graph_t/init%28%29.md): Creates an empty graph structure.
- [init(data:size:)](bnns_graph_t/init%28data_size_%29.md): Creates a graph structure from the specified opaque graph object.

### Instance properties

- [data](bnns_graph_t/data.md): A pointer to opaque graph object.
- [size](bnns_graph_t/size.md): The size, in bytes, of the opaque graph object.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Compiling a graph object

- [BNNSGraphCompileFromFile(\_:\_:\_:)](bnnsgraphcompilefromfile%28______%29.md): Compiles a source mlmodelc file to a graph object.

# bnns_graph_t (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The compiled graph object.

## Declaration

```objectivec
typedef struct { ... } bnns_graph_t;
```

## Topics

### Instance properties

- [data](bnns_graph_t/data.md): A pointer to opaque graph object.
- [size](bnns_graph_t/size.md): The size, in bytes, of the opaque graph object.

## See Also

### Compiling a graph object

- [BNNSGraphCompileFromFile](bnnsgraphcompilefromfile%28______%29.md): Compiles a source mlmodelc file to a graph object.
