> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/unaryoperation](https://developer.apple.com/documentation/computegraph/unaryoperation)

# UnaryOperation

**Framework:** Compute Graph  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

An enumeration of single-operand operations.

## Declaration

```swift
enum UnaryOperation
```

<a id="overview"></a>

## Overview

These follow Metal’s rules for compatibility with operands.

## Topics

### Enumeration Cases

- [UnaryOperation.bitwiseNot](unaryoperation/bitwisenot.md)
- [UnaryOperation.logicalNot](unaryoperation/logicalnot.md)
- [UnaryOperation.negate](unaryoperation/negate.md)
- [UnaryOperation.oneMinus](unaryoperation/oneminus.md)

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Node parameters and connections

- [PortReference](portreference.md): A reference to another group’s values.
- [BinaryOperation](binaryoperation.md): An enumeration of binary operations.
- [StandardLibraryFunction](standardlibraryfunction.md)
