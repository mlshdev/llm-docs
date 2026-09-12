> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostiosourcedescriptors](https://developer.apple.com/documentation/iousbhost/iousbhostiosourcedescriptors)

# IOUSBHostIOSourceDescriptors (Swift)

**Framework:** IOUSBHost  
**Kind:** Structure  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The descriptors for a single endpoint.

## Declaration

```swift
struct IOUSBHostIOSourceDescriptors
```

<a id="overview"></a>

## Overview

The [IOUSBHostIOSourceDescriptors](iousbhostiosourcedescriptors.md) structure initializes and adjusts pipes in the system.

## Topics

### Descriptors

- [bcdUSB](iousbhostiosourcedescriptors/bcdusb.md): The USB version that the device supports.
- [descriptor](iousbhostiosourcedescriptors/descriptor.md): The descriptor for a USB endpoint.
- [ssCompanionDescriptor](iousbhostiosourcedescriptors/sscompaniondescriptor.md): The descriptor for a SuperSpeed USB endpoint companion.
- [sspCompanionDescriptor](iousbhostiosourcedescriptors/sspcompaniondescriptor.md): The descriptor for a SuperSpeedPlus isochronous USB endpoint companion.

### Initializing the Structure

- [init()](iousbhostiosourcedescriptors/init%28%29.md): Creates a new source descriptor structure.
- [init(bcdUSB:descriptor:ssCompanionDescriptor:sspCompanionDescriptor:)](iousbhostiosourcedescriptors/init%28bcdusb_descriptor_sscompaniondescriptor_sspcompaniondescriptor_%29.md): Creates a new source descriptor structure.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Managing Periodic Bandwidth

- [adjust(with:)](iousbhostpipe/adjust%28with_%29.md): Adjusts the behavior of periodic endpoints to consume a different amount of bus bandwidth.
- [descriptors](iousbhostpipe/descriptors.md): A property that retrieves the current endpoint descriptors controlling the endpoint.
- [originalDescriptors](iousbhostpipe/originaldescriptors.md): A property that retrieves the original endpoint descriptors from the pipe at the point of creation.

# IOUSBHostIOSourceDescriptors (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Structure  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The descriptors for a single endpoint.

## Declaration

```objectivec
typedef struct IOUSBHostIOSourceDescriptors { ... } IOUSBHostIOSourceDescriptors;
```

<a id="overview"></a>

## Overview

The [IOUSBHostIOSourceDescriptors](iousbhostiosourcedescriptors.md) structure initializes and adjusts pipes in the system.

## Topics

### Descriptors

- [bcdUSB](iousbhostiosourcedescriptors/bcdusb.md): The USB version that the device supports.
- [descriptor](iousbhostiosourcedescriptors/descriptor.md): The descriptor for a USB endpoint.
- [ssCompanionDescriptor](iousbhostiosourcedescriptors/sscompaniondescriptor.md): The descriptor for a SuperSpeed USB endpoint companion.
- [sspCompanionDescriptor](iousbhostiosourcedescriptors/sspcompaniondescriptor.md): The descriptor for a SuperSpeedPlus isochronous USB endpoint companion.

## See Also

### Managing Periodic Bandwidth

- [adjustPipeWithDescriptors:error:](iousbhostpipe/adjust%28with_%29.md): Adjusts the behavior of periodic endpoints to consume a different amount of bus bandwidth.
- [descriptors](iousbhostpipe/descriptors.md): A property that retrieves the current endpoint descriptors controlling the endpoint.
- [originalDescriptors](iousbhostpipe/originaldescriptors.md): A property that retrieves the original endpoint descriptors from the pipe at the point of creation.
