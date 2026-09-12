> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunction/makeargumentencoder(bufferindex:reflection:)](https://developer.apple.com/documentation/metal/mtlfunction/makeargumentencoder(bufferindex:reflection:))

# makeArgumentEncoder(bufferIndex:reflection:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 16.0) · iPadOS 11.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.13+ (deprecated in 13.0) · tvOS 11.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Creates an argument encoder and returns reflection information for an argument buffer that’s one of this function’s arguments

> Use the [makeArgumentEncoder(bufferBinding:)](../mtldevice/makeargumentencoder%28bufferbinding_%29.md) method of an [MTLDevice](../mtldevice.md) instance.

## Declaration

```swift
func makeArgumentEncoder(bufferIndex: Int, reflection: AutoreleasingUnsafeMutablePointer<MTLAutoreleasedArgument?>?) -> any MTLArgumentEncoder
```

## Parameters

- `bufferIndex`: The index of an argument buffer in the function’s argument list. This method fails if the specified index doesn’t correspond to an argument buffer.
- `reflection`: A pointer that Metal populates with the function reflection data in the argument buffer at `bufferIndex`.

<a id="discussion"></a>

## Discussion

Resources encoded into an argument buffer by the [MTLArgumentEncoder](../mtlargumentencoder.md) object need to match the structure of the argument buffer located at the function’s specified buffer index.

## See Also

### Creating argument encoders

- [makeArgumentEncoder(bufferIndex:)](makeargumentencoder%28bufferindex_%29.md): Creates an argument encoder for an argument buffer that’s one of this function’s arguments.

# newArgumentEncoderWithBufferIndex:reflection: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 16.0) · iPadOS 11.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.13+ (deprecated in 13.0) · tvOS 11.0+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Creates an argument encoder and returns reflection information for an argument buffer that’s one of this function’s arguments

> Use the [newArgumentEncoderWithBufferBinding:](../mtldevice/makeargumentencoder%28bufferbinding_%29.md) method of an [MTLDevice](../mtldevice.md) instance.

## Declaration

```objectivec
- (id<MTLArgumentEncoder>) newArgumentEncoderWithBufferIndex:(NSUInteger) bufferIndex reflection:(MTLAutoreleasedArgument*) reflection;
```

## Parameters

- `bufferIndex`: The index of an argument buffer in the function’s argument list. This method fails if the specified index doesn’t correspond to an argument buffer.
- `reflection`: A pointer that Metal populates with the function reflection data in the argument buffer at `bufferIndex`.

<a id="discussion"></a>

## Discussion

Resources encoded into an argument buffer by the [MTLArgumentEncoder](../mtlargumentencoder.md) object need to match the structure of the argument buffer located at the function’s specified buffer index.

## See Also

### Creating argument encoders

- [newArgumentEncoderWithBufferIndex:](makeargumentencoder%28bufferindex_%29.md): Creates an argument encoder for an argument buffer that’s one of this function’s arguments.
