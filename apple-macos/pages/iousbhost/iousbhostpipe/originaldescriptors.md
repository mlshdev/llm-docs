> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostpipe/originaldescriptors](https://developer.apple.com/documentation/iousbhost/iousbhostpipe/originaldescriptors)

# originalDescriptors (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

A property that retrieves the original endpoint descriptors from the pipe at the point of creation.

## Declaration

```swift
var originalDescriptors: UnsafePointer<IOUSBHostIOSourceDescriptors> { get }
```

<a id="return-value"></a>

## Return Value

The original [IOUSBHostIOSourceDescriptors](../iousbhostiosourcedescriptors.md).

## See Also

### Managing Periodic Bandwidth

- [IOUSBHostIOSourceDescriptors](../iousbhostiosourcedescriptors.md): The descriptors for a single endpoint.
- [adjust(with:)](adjust%28with_%29.md): Adjusts the behavior of periodic endpoints to consume a different amount of bus bandwidth.
- [descriptors](descriptors.md): A property that retrieves the current endpoint descriptors controlling the endpoint.

# originalDescriptors (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

A property that retrieves the original endpoint descriptors from the pipe at the point of creation.

## Declaration

```objectivec
@property (readonly) const IOUSBHostIOSourceDescriptors * originalDescriptors;
```

<a id="return-value"></a>

## Return Value

The original [IOUSBHostIOSourceDescriptors](../iousbhostiosourcedescriptors.md).

## See Also

### Managing Periodic Bandwidth

- [IOUSBHostIOSourceDescriptors](../iousbhostiosourcedescriptors.md): The descriptors for a single endpoint.
- [adjustPipeWithDescriptors:error:](adjust%28with_%29.md): Adjusts the behavior of periodic endpoints to consume a different amount of bus bandwidth.
- [descriptors](descriptors.md): A property that retrieves the current endpoint descriptors controlling the endpoint.
