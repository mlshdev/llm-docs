> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepasssamplebufferattachmentdescriptorarray/subscript(_:)](https://developer.apple.com/documentation/metal/mtlcomputepasssamplebufferattachmentdescriptorarray/subscript(_:))

# subscript(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Subscript  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns the descriptor object for the specified sample buffer attachment.

## Declaration

```swift
subscript(attachmentIndex: Int) -> MTLComputePassSampleBufferAttachmentDescriptor! { get set }
```

## Parameters

- `attachmentIndex`: An index for the sample buffer attachment to fetch.

<a id="return-value"></a>

## Return Value

The requested  [MTLComputePassSampleBufferAttachmentDescriptor](../mtlcomputepasssamplebufferattachmentdescriptor.md) object.

# objectAtIndexedSubscript: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns the descriptor object for the specified sample buffer attachment.

## Declaration

```objectivec
- (MTLComputePassSampleBufferAttachmentDescriptor *) objectAtIndexedSubscript:(NSUInteger) attachmentIndex;
```

## Parameters

- `attachmentIndex`: An index for the sample buffer attachment to fetch.

<a id="return-value"></a>

## Return Value

The requested  [MTLComputePassSampleBufferAttachmentDescriptor](../mtlcomputepasssamplebufferattachmentdescriptor.md) object.

## See Also

### Accessing a sample buffer attachment

- [setObject:atIndexedSubscript:](setobject_atindexedsubscript_.md): Sets the descriptor object for the specified sample buffer attachment.
