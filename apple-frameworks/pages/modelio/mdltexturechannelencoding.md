> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdltexturechannelencoding](https://developer.apple.com/documentation/modelio/mdltexturechannelencoding)

# MDLTextureChannelEncoding (Swift)

**Framework:** Model I/O  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Options for the data size and type of texel channel values, used by the [channelEncoding](mdltexture/channelencoding.md) property.

## Declaration

```swift
enum MDLTextureChannelEncoding
```

## Topics

### Constants

- [MDLTextureChannelEncoding.uInt8](mdltexturechannelencoding/uint8-swift.enum.case.md): Each channel value per texel is an 8-bit unsigned integer.
- [MDLTextureChannelEncoding.uInt16](mdltexturechannelencoding/uint16-swift.enum.case.md): Each channel value per texel is a 16-bit unsigned integer.
- [MDLTextureChannelEncoding.uInt24](mdltexturechannelencoding/uint24-swift.enum.case.md): Each channel value per texel is a 24-bit unsigned integer.
- [MDLTextureChannelEncoding.uInt32](mdltexturechannelencoding/uint32-swift.enum.case.md): Each channel value per texel is a 32-bit unsigned integer.
- [MDLTextureChannelEncoding.float16](mdltexturechannelencoding/float16.md): Each channel value per texel is a 16-bit floating-point value.
- [MDLTextureChannelEncoding.float32](mdltexturechannelencoding/float32.md): Each channel value per texel is a 32-bit floating-point value.

### Enumeration Cases

- [MDLTextureChannelEncoding.float16SR](mdltexturechannelencoding/float16sr.md)

### Initializers

- [init(rawValue:)](mdltexturechannelencoding/init%28rawvalue_%29.md)

### Type Properties

- [uint16](mdltexturechannelencoding/uint16-swift.type.property.md): Each channel value per texel is a 16-bit unsigned integer.
- [uint24](mdltexturechannelencoding/uint24-swift.type.property.md): Each channel value per texel is a 24-bit unsigned integer.
- [uint32](mdltexturechannelencoding/uint32-swift.type.property.md): Each channel value per texel is a 32-bit unsigned integer.
- [uint8](mdltexturechannelencoding/uint8-swift.type.property.md): Each channel value per texel is an 8-bit unsigned integer.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MDLTextureChannelEncoding (Objective-C)

**Framework:** Model I/O  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Options for the data size and type of texel channel values, used by the [channelEncoding](mdltexture/channelencoding.md) property.

## Declaration

```objectivec
enum MDLTextureChannelEncoding : NSInteger;
```

## Topics

### Constants

- [MDLTextureChannelEncodingUInt8](mdltexturechannelencoding/uint8-swift.enum.case.md): Each channel value per texel is an 8-bit unsigned integer.
- [MDLTextureChannelEncodingUInt16](mdltexturechannelencoding/uint16-swift.enum.case.md): Each channel value per texel is a 16-bit unsigned integer.
- [MDLTextureChannelEncodingUInt24](mdltexturechannelencoding/uint24-swift.enum.case.md): Each channel value per texel is a 24-bit unsigned integer.
- [MDLTextureChannelEncodingUInt32](mdltexturechannelencoding/uint32-swift.enum.case.md): Each channel value per texel is a 32-bit unsigned integer.
- [MDLTextureChannelEncodingFloat16](mdltexturechannelencoding/float16.md): Each channel value per texel is a 16-bit floating-point value.
- [MDLTextureChannelEncodingFloat32](mdltexturechannelencoding/float32.md): Each channel value per texel is a 32-bit floating-point value.

### Enumeration Cases

- [MDLTextureChannelEncodingFloat16SR](mdltexturechannelencoding/float16sr.md)
- [MDLTextureChannelEncodingUint16](mdltexturechannelencoding/uint16-swift.type.property.md): Each channel value per texel is a 16-bit unsigned integer.
- [MDLTextureChannelEncodingUint24](mdltexturechannelencoding/uint24-swift.type.property.md): Each channel value per texel is a 24-bit unsigned integer.
- [MDLTextureChannelEncodingUint32](mdltexturechannelencoding/uint32-swift.type.property.md): Each channel value per texel is a 32-bit unsigned integer.
- [MDLTextureChannelEncodingUint8](mdltexturechannelencoding/uint8-swift.type.property.md): Each channel value per texel is an 8-bit unsigned integer.
