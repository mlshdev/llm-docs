> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostpipe/adjust(with:)](https://developer.apple.com/documentation/iousbhost/iousbhostpipe/adjust(with:))

# adjust(with:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Adjusts the behavior of periodic endpoints to consume a different amount of bus bandwidth.

## Declaration

```swift
func adjust(with descriptors: UnsafePointer<IOUSBHostIOSourceDescriptors>) throws
```

## Parameters

- `descriptors`: A reference to [IOUSBHostIOSourceDescriptors](../iousbhostiosourcedescriptors.md) describing the new endpoint policy.

<a id="Discussion"></a>

## Discussion

During creation, periodic (interrupt and isochronous) endpoints reserve bus bandwidth to allow for maximum packet size, mult (the maximum number of packets that this endpoint supports), burst size, and the endpoint service interval.

If an endpoint won’t use all of the allocated bandwidth, use [adjust(with:)](adjust%28with_%29.md) to reduce the bandwidth reserved for the endpoint. Copy the original endpoint descriptors, adjust maximum packet size, mult, burst size, and interval, then pass to [adjust(with:)](adjust%28with_%29.md). The altered descriptors must pass validation from the kernel for policy changes to process.

## See Also

### Managing Periodic Bandwidth

- [IOUSBHostIOSourceDescriptors](../iousbhostiosourcedescriptors.md): The descriptors for a single endpoint.
- [descriptors](descriptors.md): A property that retrieves the current endpoint descriptors controlling the endpoint.
- [originalDescriptors](originaldescriptors.md): A property that retrieves the original endpoint descriptors from the pipe at the point of creation.

# adjustPipeWithDescriptors:error: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Adjusts the behavior of periodic endpoints to consume a different amount of bus bandwidth.

## Declaration

```objectivec
- (BOOL) adjustPipeWithDescriptors:(const IOUSBHostIOSourceDescriptors *) descriptors error:(NSError **) error;
```

## Parameters

- `descriptors`: A reference to [IOUSBHostIOSourceDescriptors](../iousbhostiosourcedescriptors.md) describing the new endpoint policy.
- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) in Objective-C that contains an [IOReturn](../../kernel/ioreturn.md) value on failure.

<a id="return-value"></a>

## Return Value

`YES` if the request completes successfully; otherwise, `NO`.

<a id="Discussion"></a>

## Discussion

During creation, periodic (interrupt and isochronous) endpoints reserve bus bandwidth to allow for maximum packet size, mult (the maximum number of packets that this endpoint supports), burst size, and the endpoint service interval.

If an endpoint won’t use all of the allocated bandwidth, use [adjustPipeWithDescriptors:error:](adjust%28with_%29.md) to reduce the bandwidth reserved for the endpoint. Copy the original endpoint descriptors, adjust maximum packet size, mult, burst size, and interval, then pass to [adjustPipeWithDescriptors:error:](adjust%28with_%29.md). The altered descriptors must pass validation from the kernel for policy changes to process.

## See Also

### Managing Periodic Bandwidth

- [IOUSBHostIOSourceDescriptors](../iousbhostiosourcedescriptors.md): The descriptors for a single endpoint.
- [descriptors](descriptors.md): A property that retrieves the current endpoint descriptors controlling the endpoint.
- [originalDescriptors](originaldescriptors.md): A property that retrieves the original endpoint descriptors from the pipe at the point of creation.
