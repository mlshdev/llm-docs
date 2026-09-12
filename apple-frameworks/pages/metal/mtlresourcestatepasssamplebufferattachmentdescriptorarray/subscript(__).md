> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlresourcestatepasssamplebufferattachmentdescriptorarray/subscript(_:)](https://developer.apple.com/documentation/metal/mtlresourcestatepasssamplebufferattachmentdescriptorarray/subscript(_:))

# subscript(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Subscript  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Returns the descriptor object for the specified sample buffer attachment.

## Declaration

```swift
subscript(attachmentIndex: Int) -> MTLResourceStatePassSampleBufferAttachmentDescriptor! { get set }
```

## Parameters

- `attachmentIndex`: An index for the object to fetch.

<a id="return-value"></a>

## Return Value

The requested [MTLResourceStatePassSampleBufferAttachmentDescriptor](../mtlresourcestatepasssamplebufferattachmentdescriptor.md) object.

# objectAtIndexedSubscript: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Returns the descriptor object for the specified sample buffer attachment.

## Declaration

```objectivec
- (MTLResourceStatePassSampleBufferAttachmentDescriptor *) objectAtIndexedSubscript:(NSUInteger) attachmentIndex;
```

## Parameters

- `attachmentIndex`: An index for the object to fetch.

<a id="return-value"></a>

## Return Value

The requested [MTLResourceStatePassSampleBufferAttachmentDescriptor](../mtlresourcestatepasssamplebufferattachmentdescriptor.md) object.

## See Also

### Accessing a sample buffer attachment

- [setObject:atIndexedSubscript:](setobject_atindexedsubscript_.md): Sets the descriptor object for the specified sample buffer attachment.
