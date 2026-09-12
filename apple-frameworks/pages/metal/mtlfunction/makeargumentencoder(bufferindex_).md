> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunction/makeargumentencoder(bufferindex:)](https://developer.apple.com/documentation/metal/mtlfunction/makeargumentencoder(bufferindex:))

# makeArgumentEncoder(bufferIndex:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates an argument encoder for an argument buffer that’s one of this function’s arguments.

## Declaration

```swift
func makeArgumentEncoder(bufferIndex: Int) -> any MTLArgumentEncoder
```

## Parameters

- `bufferIndex`: The index of an argument buffer in the function’s argument list. This method fails if the specified index doesn’t correspond to an argument buffer.

<a id="discussion"></a>

## Discussion

Resources encoded into an argument buffer by the [MTLArgumentEncoder](../mtlargumentencoder.md) object need to match the structure of the argument buffer located at the specified buffer index. If you want to interpret a regular structure as an argument buffer, at least one of the members of the structure needs to have an `[[id(n)]]` attribute.

## See Also

### Creating argument encoders

- [makeArgumentEncoder(bufferIndex:reflection:)](makeargumentencoder%28bufferindex_reflection_%29.md): Deprecated. Creates an argument encoder and returns reflection information for an argument buffer that’s one of this function’s arguments

# newArgumentEncoderWithBufferIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates an argument encoder for an argument buffer that’s one of this function’s arguments.

## Declaration

```objectivec
- (id<MTLArgumentEncoder>) newArgumentEncoderWithBufferIndex:(NSUInteger) bufferIndex;
```

## Parameters

- `bufferIndex`: The index of an argument buffer in the function’s argument list. This method fails if the specified index doesn’t correspond to an argument buffer.

<a id="discussion"></a>

## Discussion

Resources encoded into an argument buffer by the [MTLArgumentEncoder](../mtlargumentencoder.md) object need to match the structure of the argument buffer located at the specified buffer index. If you want to interpret a regular structure as an argument buffer, at least one of the members of the structure needs to have an `[[id(n)]]` attribute.

## See Also

### Creating argument encoders

- [newArgumentEncoderWithBufferIndex:reflection:](makeargumentencoder%28bufferindex_reflection_%29.md): Deprecated. Creates an argument encoder and returns reflection information for an argument buffer that’s one of this function’s arguments
