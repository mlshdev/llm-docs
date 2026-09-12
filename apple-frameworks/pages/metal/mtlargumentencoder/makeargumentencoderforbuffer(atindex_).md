> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargumentencoder/makeargumentencoderforbuffer(atindex:)](https://developer.apple.com/documentation/metal/mtlargumentencoder/makeargumentencoderforbuffer(atindex:))

# makeArgumentEncoderForBuffer(atIndex:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a new argument encoder for a nested argument buffer.

## Declaration

```swift
func makeArgumentEncoderForBuffer(atIndex index: Int) -> (any MTLArgumentEncoder)?
```

## Parameters

- `index`: The index of a nested argument-buffer within the argument buffer. The value corresponds to either the index ID of a declaration in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of an [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instance.

<a id="return-value"></a>

## Return Value

An argument encoder targeting the nested argument buffer.

<a id="discussion"></a>

## Discussion

If an argument buffer contains nested argument buffers in its structure, then each nested argument buffer needs to use its own [MTLArgumentEncoder](../mtlargumentencoder.md) object to encode its individual resources.

# newArgumentEncoderForBufferAtIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Creates a new argument encoder for a nested argument buffer.

## Declaration

```objectivec
- (id<MTLArgumentEncoder>) newArgumentEncoderForBufferAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: The index of a nested argument-buffer within the argument buffer. The value corresponds to either the index ID of a declaration in Metal Shading Language (MSL) or the [index](../mtlargumentdescriptor/index.md) property of an [MTLArgumentDescriptor](../mtlargumentdescriptor.md) instance.

<a id="return-value"></a>

## Return Value

An argument encoder targeting the nested argument buffer.

<a id="discussion"></a>

## Discussion

If an argument buffer contains nested argument buffers in its structure, then each nested argument buffer needs to use its own [MTLArgumentEncoder](../mtlargumentencoder.md) object to encode its individual resources.
