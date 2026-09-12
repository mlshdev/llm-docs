> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlindexbitdepth](https://developer.apple.com/documentation/modelio/mdlindexbitdepth)

# MDLIndexBitDepth (Swift)

**Framework:** Model I/O  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Options for the size of integer data in a submesh’s index buffer, used by the [indexType](mdlsubmesh/indextype.md) property.

## Declaration

```swift
enum MDLIndexBitDepth
```

<a id="overview"></a>

## Overview

For optimum performance, an index buffer should generally use the smallest data type that fits the number of indices it contains.

## Topics

### Constants

- [MDLIndexBitDepth.invalid](mdlindexbitdepth/invalid.md): The submesh has not been initialized or its data type is unknown.
- [MDLIndexBitDepth.uInt8](mdlindexbitdepth/uint8-swift.enum.case.md): Each index in the submesh’s index buffer is an 8-bit integer.
- [MDLIndexBitDepth.uInt16](mdlindexbitdepth/uint16-swift.enum.case.md): Each index in the submesh’s index buffer is a 16-bit integer.
- [MDLIndexBitDepth.uInt32](mdlindexbitdepth/uint32-swift.enum.case.md): Each index in the submesh’s index buffer is a 32-bit integer.

### Initializers

- [init(rawValue:)](mdlindexbitdepth/init%28rawvalue_%29.md)

### Type Properties

- [uint16](mdlindexbitdepth/uint16-swift.type.property.md)
- [uint32](mdlindexbitdepth/uint32-swift.type.property.md)
- [uint8](mdlindexbitdepth/uint8-swift.type.property.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [MDLGeometryType](mdlgeometrytype.md): Types of geometric primitives for rendering a submesh, used by the [geometryType](mdlsubmesh/geometrytype.md) property.

# MDLIndexBitDepth (Objective-C)

**Framework:** Model I/O  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Options for the size of integer data in a submesh’s index buffer, used by the [indexType](mdlsubmesh/indextype.md) property.

## Declaration

```objectivec
enum MDLIndexBitDepth : NSUInteger;
```

<a id="overview"></a>

## Overview

For optimum performance, an index buffer should generally use the smallest data type that fits the number of indices it contains.

## Topics

### Constants

- [MDLIndexBitDepthInvalid](mdlindexbitdepth/invalid.md): The submesh has not been initialized or its data type is unknown.
- [MDLIndexBitDepthUInt8](mdlindexbitdepth/uint8-swift.enum.case.md): Each index in the submesh’s index buffer is an 8-bit integer.
- [MDLIndexBitDepthUInt16](mdlindexbitdepth/uint16-swift.enum.case.md): Each index in the submesh’s index buffer is a 16-bit integer.
- [MDLIndexBitDepthUInt32](mdlindexbitdepth/uint32-swift.enum.case.md): Each index in the submesh’s index buffer is a 32-bit integer.

### Enumeration Cases

- [MDLIndexBitDepthUint16](mdlindexbitdepth/uint16-swift.type.property.md)
- [MDLIndexBitDepthUint32](mdlindexbitdepth/uint32-swift.type.property.md)
- [MDLIndexBitDepthUint8](mdlindexbitdepth/uint8-swift.type.property.md)

## See Also

### Constants

- [MDLGeometryType](mdlgeometrytype.md): Types of geometric primitives for rendering a submesh, used by the [geometryType](mdlsubmesh/geometrytype.md) property.
