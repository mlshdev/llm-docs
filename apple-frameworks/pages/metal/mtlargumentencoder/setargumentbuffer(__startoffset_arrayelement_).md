> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentencoder/setargumentbuffer(_:startoffset:arrayelement:)](https://developer.apple.com/documentation/metal/mtlargumentencoder/setargumentbuffer(_:startoffset:arrayelement:))

# setArgumentBuffer(\_:startOffset:arrayElement:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Specifies an array element within a buffer where the encoder writes argument data.

## Declaration

```swift
func setArgumentBuffer(_ argumentBuffer: (any MTLBuffer)?, startOffset: Int, arrayElement: Int)
```

## Parameters

- `argumentBuffer`: The destination buffer that represents an argument buffer.
- `startOffset`: The starting byte offset of the buffer data.
- `arrayElement`: The desired element of the argument buffer array targeted by encoding.

## See Also

### Creating an argument buffer

- [setArgumentBuffer(\_:offset:)](setargumentbuffer%28__offset_%29.md): Specifies the position in a buffer where the encoder writes argument data.
- [encodedLength](encodedlength.md): The number of bytes required to store the encoded resources of an argument buffer.

# setArgumentBuffer:startOffset:arrayElement: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Specifies an array element within a buffer where the encoder writes argument data.

## Declaration

```objectivec
- (void) setArgumentBuffer:(id<MTLBuffer>) argumentBuffer startOffset:(NSUInteger) startOffset arrayElement:(NSUInteger) arrayElement;
```

## Parameters

- `argumentBuffer`: The destination buffer that represents an argument buffer.
- `startOffset`: The starting byte offset of the buffer data.
- `arrayElement`: The desired element of the argument buffer array targeted by encoding.

## See Also

### Creating an argument buffer

- [setArgumentBuffer:offset:](setargumentbuffer%28__offset_%29.md): Specifies the position in a buffer where the encoder writes argument data.
- [encodedLength](encodedlength.md): The number of bytes required to store the encoded resources of an argument buffer.
