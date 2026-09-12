> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnssparsityparameters](https://developer.apple.com/documentation/accelerate/bnnssparsityparameters)

# BNNSSparsityParameters (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
struct BNNSSparsityParameters
```

<a id="overview"></a>

## Overview

Parameters to describe sparsity attributes

use this data structure as hint for BNNSNDArrayFullyConnectedSparsify for BNNSSparsityTypeUnstructured, sparsity_ratio is numerator / denominator

## Topics

### Initializers

- [init()](bnnssparsityparameters/init%28%29.md)
- [init(flags:sparsity_ratio:sparsity_type:target_system:)](bnnssparsityparameters/init%28flags_sparsity_ratio_sparsity_type_target_system_%29.md)

### Instance Properties

- [flags](bnnssparsityparameters/flags.md)
- [sparsity_ratio](bnnssparsityparameters/sparsity_ratio.md)
- [sparsity_type](bnnssparsityparameters/sparsity_type.md)
- [target_system](bnnssparsityparameters/target_system.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Structures

- [BNNSDataType](bnnsdatatype.md): BNNS Data Types.
- [BNNSSparsityType](bnnssparsitytype.md)
- [BNNSTargetSystem](bnnstargetsystem.md)
- [bnns_graph_argument_t](bnns_graph_argument_t.md): Describes data associated with an input or output argument
- [BNNSImageStackDescriptor](bnnsimagestackdescriptor.md): Deprecated.
- [BNNSVectorDescriptor](bnnsvectordescriptor.md): Deprecated.

# BNNSSparsityParameters (Objective-C)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef struct { ... } BNNSSparsityParameters;
```

<a id="overview"></a>

## Overview

Parameters to describe sparsity attributes

use this data structure as hint for BNNSNDArrayFullyConnectedSparsify for BNNSSparsityTypeUnstructured, sparsity_ratio is numerator / denominator

## Topics

### Instance Properties

- [flags](bnnssparsityparameters/flags.md)
- [sparsity_ratio](bnnssparsityparameters/sparsity_ratio.md)
- [sparsity_type](bnnssparsityparameters/sparsity_type.md)
- [target_system](bnnssparsityparameters/target_system.md)

## See Also

### Structures

- [BNNSDataType](bnnsdatatype.md): BNNS Data Types.
- [BNNSSparsityType](bnnssparsitytype.md)
- [BNNSTargetSystem](bnnstargetsystem.md)
- [bnns_graph_argument_t](bnns_graph_argument_t.md): Describes data associated with an input or output argument
- [BNNSImageStackDescriptor](bnnsimagestackdescriptor.md): Deprecated.
- [BNNSVectorDescriptor](bnnsvectordescriptor.md): Deprecated.
