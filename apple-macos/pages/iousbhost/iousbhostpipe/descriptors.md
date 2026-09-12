> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostpipe/descriptors](https://developer.apple.com/documentation/iousbhost/iousbhostpipe/descriptors)

# descriptors (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

A property that retrieves the current endpoint descriptors controlling the endpoint.

## Declaration

```swift
var descriptors: UnsafePointer<IOUSBHostIOSourceDescriptors> { get }
```

<a id="return-value"></a>

## Return Value

The current [IOUSBHostIOSourceDescriptors](../iousbhostiosourcedescriptors.md).

## See Also

### Managing Periodic Bandwidth

- [IOUSBHostIOSourceDescriptors](../iousbhostiosourcedescriptors.md): The descriptors for a single endpoint.
- [adjust(with:)](adjust%28with_%29.md): Adjusts the behavior of periodic endpoints to consume a different amount of bus bandwidth.
- [originalDescriptors](originaldescriptors.md): A property that retrieves the original endpoint descriptors from the pipe at the point of creation.

# descriptors (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

A property that retrieves the current endpoint descriptors controlling the endpoint.

## Declaration

```objectivec
@property (readonly) const IOUSBHostIOSourceDescriptors * descriptors;
```

<a id="return-value"></a>

## Return Value

The current [IOUSBHostIOSourceDescriptors](../iousbhostiosourcedescriptors.md).

## See Also

### Managing Periodic Bandwidth

- [IOUSBHostIOSourceDescriptors](../iousbhostiosourcedescriptors.md): The descriptors for a single endpoint.
- [adjustPipeWithDescriptors:error:](adjust%28with_%29.md): Adjusts the behavior of periodic endpoints to consume a different amount of bus bandwidth.
- [originalDescriptors](originaldescriptors.md): A property that retrieves the original endpoint descriptors from the pipe at the point of creation.
