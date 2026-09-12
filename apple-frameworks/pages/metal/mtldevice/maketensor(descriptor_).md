> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/maketensor(descriptor:)](https://developer.apple.com/documentation/metal/mtldevice/maketensor(descriptor:))

# makeTensor(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a tensor with the specified descriptor.

## Declaration

```swift
func makeTensor(descriptor: MTLTensorDescriptor) throws -> any MTLTensor
```

## Parameters

- `descriptor`: The tensor descriptor configuring the data plane and auxiliary planes.

<a id="return-value"></a>

## Return Value

A tensor, or `nil` if validation fails.

<a id="discussion"></a>

## Discussion

This method validates the constraints documented on [MTLTensorDescriptor](../mtltensordescriptor.md).

# newTensorWithDescriptor:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a tensor with the specified descriptor.

## Declaration

```objectivec
- (id<MTLTensor>) newTensorWithDescriptor:(MTLTensorDescriptor *) descriptor error:(NSError **) error;
```

## Parameters

- `descriptor`: The tensor descriptor configuring the data plane and auxiliary planes.
- `error`: On failure, an NSError instance that describes the validation failure.

<a id="return-value"></a>

## Return Value

A tensor, or `nil` if validation fails.

<a id="discussion"></a>

## Discussion

This method validates the constraints documented on [MTLTensorDescriptor](../mtltensordescriptor.md).
