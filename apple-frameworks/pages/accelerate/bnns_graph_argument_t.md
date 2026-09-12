> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns_graph_argument_t](https://developer.apple.com/documentation/accelerate/bnns_graph_argument_t)

# bnns_graph_argument_t (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Describes data associated with an input or output argument

## Declaration

```swift
struct bnns_graph_argument_t
```

<a id="overview"></a>

## Overview

Exactly one of descriptor or data_ptr should be set based on the configuration specified with `BNNSGraphContextSetArgumentType()`

## Topics

### Initializers

- [init()](bnns_graph_argument_t/init%28%29.md)

### Instance Properties

- [data_ptr](bnns_graph_argument_t/data_ptr-89cqn.md)
- [data_ptr_size](bnns_graph_argument_t/data_ptr_size.md): size in bytes of `data_ptr`, if set
- [descriptor](bnns_graph_argument_t/descriptor-8d2bd.md)
- [tensor](bnns_graph_argument_t/tensor-6l2lt.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Structures

- [BNNSDataType](bnnsdatatype.md): BNNS Data Types.
- [BNNSSparsityParameters](bnnssparsityparameters.md)
- [BNNSSparsityType](bnnssparsitytype.md)
- [BNNSTargetSystem](bnnstargetsystem.md)
- [BNNSImageStackDescriptor](bnnsimagestackdescriptor.md): Deprecated.
- [BNNSVectorDescriptor](bnnsvectordescriptor.md): Deprecated.

# bnns_graph_argument_t (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Describes data associated with an input or output argument

## Declaration

```objectivec
typedef struct { ... } bnns_graph_argument_t;
```

<a id="overview"></a>

## Overview

Exactly one of descriptor or data_ptr should be set based on the configuration specified with `BNNSGraphContextSetArgumentType()`

## Topics

### Instance Properties

- [data_ptr](bnns_graph_argument_t/data_ptr-10vgq.md): Direct pointer to numerical data
- [data_ptr_size](bnns_graph_argument_t/data_ptr_size.md): size in bytes of `data_ptr`, if set
- [descriptor](bnns_graph_argument_t/descriptor-jg2s.md): Pointer to BNNSNDArrayDescriptor (deprecated, use BNNSTensor instead)
- [tensor](bnns_graph_argument_t/tensor-6224h.md): Pointer to BNNSTensor

## See Also

### Structures

- [BNNSDataType](bnnsdatatype.md): BNNS Data Types.
- [BNNSSparsityParameters](bnnssparsityparameters.md)
- [BNNSSparsityType](bnnssparsitytype.md)
- [BNNSTargetSystem](bnnstargetsystem.md)
- [BNNSImageStackDescriptor](bnnsimagestackdescriptor.md): Deprecated.
- [BNNSVectorDescriptor](bnnsvectordescriptor.md): Deprecated.
