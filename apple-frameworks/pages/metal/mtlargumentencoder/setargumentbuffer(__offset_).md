> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentencoder/setargumentbuffer(_:offset:)](https://developer.apple.com/documentation/metal/mtlargumentencoder/setargumentbuffer(_:offset:))

# setArgumentBuffer(\_:offset:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Specifies the position in a buffer where the encoder writes argument data.

## Declaration

```swift
func setArgumentBuffer(_ argumentBuffer: (any MTLBuffer)?, offset: Int)
```

## Parameters

- `argumentBuffer`: The destination buffer that represents an argument buffer.
- `offset`: The byte offset of the buffer.

## See Also

### Creating an argument buffer

- [setArgumentBuffer(\_:startOffset:arrayElement:)](setargumentbuffer%28__startoffset_arrayelement_%29.md): Specifies an array element within a buffer where the encoder writes argument data.
- [encodedLength](encodedlength.md): The number of bytes required to store the encoded resources of an argument buffer.

# setArgumentBuffer:offset: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Specifies the position in a buffer where the encoder writes argument data.

## Declaration

```objectivec
- (void) setArgumentBuffer:(id<MTLBuffer>) argumentBuffer offset:(NSUInteger) offset;
```

## Parameters

- `argumentBuffer`: The destination buffer that represents an argument buffer.
- `offset`: The byte offset of the buffer.

## See Also

### Creating an argument buffer

- [setArgumentBuffer:startOffset:arrayElement:](setargumentbuffer%28__startoffset_arrayelement_%29.md): Specifies an array element within a buffer where the encoder writes argument data.
- [encodedLength](encodedlength.md): The number of bytes required to store the encoded resources of an argument buffer.
