> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/maketensor(descriptor:attachments:)](https://developer.apple.com/documentation/metal/mtldevice/maketensor(descriptor:attachments:))

# makeTensor(descriptor:attachments:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a tensor with the specified descriptor and per-plane buffer backing storage.

## Declaration

```swift
func makeTensor(descriptor: MTLTensorDescriptor, attachments: MTLTensorBufferAttachments) throws -> any MTLTensor
```

## Parameters

- `descriptor`: The tensor descriptor configuring the data plane and auxiliary planes.
- `attachments`: The per-plane buffer backing storage. Must not be `nil`.

<a id="return-value"></a>

## Return Value

A tensor, or `nil` if validation fails.

<a id="discussion"></a>

## Discussion

This method validates the constraints documented on [MTLTensorDescriptor](../mtltensordescriptor.md) and [MTLTensorBufferAttachments](../mtltensorbufferattachments.md), and additionally requires that every plane configured in `descriptor` (data plane and all auxiliary planes) has a corresponding entry in `attachments`.

# newTensorWithDescriptor:attachments:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a tensor with the specified descriptor and per-plane buffer backing storage.

## Declaration

```objectivec
- (id<MTLTensor>) newTensorWithDescriptor:(MTLTensorDescriptor *) descriptor attachments:(MTLTensorBufferAttachments *) attachments error:(NSError **) error;
```

## Parameters

- `descriptor`: The tensor descriptor configuring the data plane and auxiliary planes.
- `attachments`: The per-plane buffer backing storage. Must not be `nil`.
- `error`: On failure, an NSError instance that describes the validation failure.

<a id="return-value"></a>

## Return Value

A tensor, or `nil` if validation fails.

<a id="discussion"></a>

## Discussion

This method validates the constraints documented on [MTLTensorDescriptor](../mtltensordescriptor.md) and [MTLTensorBufferAttachments](../mtltensorbufferattachments.md), and additionally requires that every plane configured in `descriptor` (data plane and all auxiliary planes) has a corresponding entry in `attachments`.
