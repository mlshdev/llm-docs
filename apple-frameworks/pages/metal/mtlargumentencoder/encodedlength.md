> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentencoder/encodedlength](https://developer.apple.com/documentation/metal/mtlargumentencoder/encodedlength)

# encodedLength (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The number of bytes required to store the encoded resources of an argument buffer.

## Declaration

```swift
var encodedLength: Int { get }
```

<a id="discussion"></a>

## Discussion

After creating an [MTLArgumentEncoder](../mtlargumentencoder.md) instance, use this value to create the [MTLBuffer](../mtlbuffer.md) instance that represents an argument buffer.

```swift
id <MTLArgumentEncoder> encoder = [_function newArgumentEncoderWithBufferIndex:0];
id <MTLBuffer> buffer = [_device newBufferWithLength:encoder.encodedLength options:_options];
[encoder setArgumentBuffer:buffer offset:0];
```

## See Also

### Creating an argument buffer

- [setArgumentBuffer(\_:offset:)](setargumentbuffer%28__offset_%29.md): Specifies the position in a buffer where the encoder writes argument data.
- [setArgumentBuffer(\_:startOffset:arrayElement:)](setargumentbuffer%28__startoffset_arrayelement_%29.md): Specifies an array element within a buffer where the encoder writes argument data.

# encodedLength (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

The number of bytes required to store the encoded resources of an argument buffer.

## Declaration

```objectivec
@property (readonly) NSUInteger encodedLength;
```

<a id="discussion"></a>

## Discussion

After creating an [MTLArgumentEncoder](../mtlargumentencoder.md) instance, use this value to create the [MTLBuffer](../mtlbuffer.md) instance that represents an argument buffer.

```swift
id <MTLArgumentEncoder> encoder = [_function newArgumentEncoderWithBufferIndex:0];
id <MTLBuffer> buffer = [_device newBufferWithLength:encoder.encodedLength options:_options];
[encoder setArgumentBuffer:buffer offset:0];
```

## See Also

### Creating an argument buffer

- [setArgumentBuffer:offset:](setargumentbuffer%28__offset_%29.md): Specifies the position in a buffer where the encoder writes argument data.
- [setArgumentBuffer:startOffset:arrayElement:](setargumentbuffer%28__startoffset_arrayelement_%29.md): Specifies an array element within a buffer where the encoder writes argument data.
