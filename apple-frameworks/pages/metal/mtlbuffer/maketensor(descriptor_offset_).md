> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlbuffer/maketensor(descriptor:offset:)](https://developer.apple.com/documentation/metal/mtlbuffer/maketensor(descriptor:offset:))

# makeTensor(descriptor:offset:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a single-plane tensor with the specified descriptor that shares storage with this buffer.

## Declaration

```swift
func makeTensor(descriptor: MTLTensorDescriptor, offset: Int) throws -> any MTLTensor
```

## Parameters

- `descriptor`: The tensor descriptor configuring the data plane.
- `offset`: The byte offset into the buffer where tensor data begins.

<a id="return-value"></a>

## Return Value

A tensor, or `nil` if validation fails.

<a id="discussion"></a>

## Discussion

This method validates the constraints documented on [MTLTensorDescriptor](../mtltensordescriptor.md), and additionally requires:

- `offset` is 0 when [usage](../mtltensordescriptor/usage.md) contains [machineLearning](../mtltensorusage/machinelearning.md).
- `offset` is aligned to 128 bytes if the data plane uses a format [MTLTensorDataType](../mtltensordatatype.md).
- `offset` is aligned to the size of the data type in bytes otherwise.

This method doesn’t create tensors that contain auxiliary planes. Use [makeTensor(descriptor:attachments:)](../mtldevice/maketensor%28descriptor_attachments_%29.md) instead to create a multi-plane tensor with per-plane buffer backing storage.

# newTensorWithDescriptor:offset:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a single-plane tensor with the specified descriptor that shares storage with this buffer.

## Declaration

```objectivec
- (id<MTLTensor>) newTensorWithDescriptor:(MTLTensorDescriptor *) descriptor offset:(NSUInteger) offset error:(NSError **) error;
```

## Parameters

- `descriptor`: The tensor descriptor configuring the data plane.
- `offset`: The byte offset into the buffer where tensor data begins.
- `error`: On failure, an NSError instance that describes the validation failure.

<a id="return-value"></a>

## Return Value

A tensor, or `nil` if validation fails.

<a id="discussion"></a>

## Discussion

This method validates the constraints documented on [MTLTensorDescriptor](../mtltensordescriptor.md), and additionally requires:

- `offset` is 0 when [usage](../mtltensordescriptor/usage.md) contains [MTLTensorUsageMachineLearning](../mtltensorusage/machinelearning.md).
- `offset` is aligned to 128 bytes if the data plane uses a format [MTLTensorDataType](../mtltensordatatype.md).
- `offset` is aligned to the size of the data type in bytes otherwise.

This method doesn’t create tensors that contain auxiliary planes. Use [newTensorWithDescriptor:attachments:error:](../mtldevice/maketensor%28descriptor_attachments_%29.md) instead to create a multi-plane tensor with per-plane buffer backing storage.
