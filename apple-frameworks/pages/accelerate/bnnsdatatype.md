> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsdatatype](https://developer.apple.com/documentation/accelerate/bnnsdatatype)

# BNNSDataType (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

BNNS Data Types.

## Declaration

```swift
struct BNNSDataType
```

## Topics

### Types

- [BNNSDataTypeBFloat16](bnnsdatatypebfloat16.md)
- [BNNSDataTypeBoolean](bnnsdatatypeboolean.md)
- [BNNSDataTypeIndexed1](bnnsdatatypeindexed1.md)
- [BNNSDataTypeIndexed2](bnnsdatatypeindexed2.md)
- [BNNSDataTypeIndexed4](bnnsdatatypeindexed4.md)
- [BNNSDataTypeInt1](bnnsdatatypeint1.md)
- [BNNSDataTypeInt2](bnnsdatatypeint2.md)
- [BNNSDataTypeInt4](bnnsdatatypeint4.md)
- [BNNSDataTypeInt64](bnnsdatatypeint64.md)
- [BNNSDataTypeMiscellaneousBit](bnnsdatatypemiscellaneousbit.md)
- [BNNSDataTypeUInt1](bnnsdatatypeuint1.md)
- [BNNSDataTypeUInt2](bnnsdatatypeuint2.md)
- [BNNSDataTypeUInt3](bnnsdatatypeuint3.md)
- [BNNSDataTypeUInt4](bnnsdatatypeuint4.md)
- [BNNSDataTypeUInt6](bnnsdatatypeuint6.md)
- [BNNSDataTypeUInt64](bnnsdatatypeuint64.md)

### Initializers

- [init(\_:)](bnnsdatatype/init%28__%29.md)
- [init(rawValue:)](bnnsdatatype/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](bnnsdatatype/rawvalue.md)

### Type Properties

- [float](bnnsdatatype/float.md)
- [float16](bnnsdatatype/float16.md)
- [indexed8](bnnsdatatype/indexed8.md)
- [int16](bnnsdatatype/int16.md)
- [int32](bnnsdatatype/int32.md)
- [int8](bnnsdatatype/int8.md)
- [uint16](bnnsdatatype/uint16.md)
- [uint32](bnnsdatatype/uint32.md)
- [uint8](bnnsdatatype/uint8.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Structures

- [BNNSSparsityParameters](bnnssparsityparameters.md)
- [BNNSSparsityType](bnnssparsitytype.md)
- [BNNSTargetSystem](bnnstargetsystem.md)
- [bnns_graph_argument_t](bnns_graph_argument_t.md): Describes data associated with an input or output argument
- [BNNSImageStackDescriptor](bnnsimagestackdescriptor.md): Deprecated.
- [BNNSVectorDescriptor](bnnsvectordescriptor.md): Deprecated.

# BNNSDataType (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

BNNS Data Types.

## Declaration

```objectivec
typedef enum { ... } BNNSDataType;
```

## Topics

### Types

- [BNNSDataTypeBFloat16](bnnsdatatypebfloat16.md)
- [BNNSDataTypeBoolean](bnnsdatatypeboolean.md)
- [BNNSDataTypeIndexed1](bnnsdatatypeindexed1.md)
- [BNNSDataTypeIndexed2](bnnsdatatypeindexed2.md)
- [BNNSDataTypeIndexed4](bnnsdatatypeindexed4.md)
- [BNNSDataTypeInt1](bnnsdatatypeint1.md)
- [BNNSDataTypeInt2](bnnsdatatypeint2.md)
- [BNNSDataTypeInt4](bnnsdatatypeint4.md)
- [BNNSDataTypeInt64](bnnsdatatypeint64.md)
- [BNNSDataTypeMiscellaneousBit](bnnsdatatypemiscellaneousbit.md)
- [BNNSDataTypeUInt1](bnnsdatatypeuint1.md)
- [BNNSDataTypeUInt2](bnnsdatatypeuint2.md)
- [BNNSDataTypeUInt3](bnnsdatatypeuint3.md)
- [BNNSDataTypeUInt4](bnnsdatatypeuint4.md)
- [BNNSDataTypeUInt6](bnnsdatatypeuint6.md)
- [BNNSDataTypeUInt64](bnnsdatatypeuint64.md)

### Enumeration Cases

- [BNNSDataTypeFloat16](bnnsdatatype/bnnsdatatypefloat16.md)
- [BNNSDataTypeFloat32](bnnsdatatype/bnnsdatatypefloat32.md)
- [BNNSDataTypeFloatBit](bnnsdatatype/bnnsdatatypefloatbit.md)
- [BNNSDataTypeIndexed8](bnnsdatatype/bnnsdatatypeindexed8.md)
- [BNNSDataTypeIndexedBit](bnnsdatatype/bnnsdatatypeindexedbit.md)
- [BNNSDataTypeInt16](bnnsdatatype/bnnsdatatypeint16.md)
- [BNNSDataTypeInt32](bnnsdatatype/bnnsdatatypeint32.md)
- [BNNSDataTypeInt8](bnnsdatatype/bnnsdatatypeint8.md)
- [BNNSDataTypeIntBit](bnnsdatatype/bnnsdatatypeintbit.md)
- [BNNSDataTypeUInt16](bnnsdatatype/bnnsdatatypeuint16.md)
- [BNNSDataTypeUInt32](bnnsdatatype/bnnsdatatypeuint32.md)
- [BNNSDataTypeUInt8](bnnsdatatype/bnnsdatatypeuint8.md)
- [BNNSDataTypeUIntBit](bnnsdatatype/bnnsdatatypeuintbit.md)

## See Also

### Structures

- [BNNSSparsityParameters](bnnssparsityparameters.md)
- [BNNSSparsityType](bnnssparsitytype.md)
- [BNNSTargetSystem](bnnstargetsystem.md)
- [bnns_graph_argument_t](bnns_graph_argument_t.md): Describes data associated with an input or output argument
- [BNNSImageStackDescriptor](bnnsimagestackdescriptor.md): Deprecated.
- [BNNSVectorDescriptor](bnnsvectordescriptor.md): Deprecated.
