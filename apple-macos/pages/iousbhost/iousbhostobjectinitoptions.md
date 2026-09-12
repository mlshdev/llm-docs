> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostobjectinitoptions](https://developer.apple.com/documentation/iousbhost/iousbhostobjectinitoptions)

# IOUSBHostObjectInitOptions (Swift)

**Framework:** IOUSBHost  
**Kind:** Structure  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Options for initializing the host object.

## Declaration

```swift
struct IOUSBHostObjectInitOptions
```

## Topics

### Options

- [deviceCapture](iousbhostobjectinitoptions/devicecapture.md): The option to capture the device and terminate existing drivers.

### Initializing the Structure

- [init(rawValue:)](iousbhostobjectinitoptions/init%28rawvalue_%29.md): Initializes the object.

### Type Properties

- [deviceSeize](iousbhostobjectinitoptions/deviceseize.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Managing the Object Life Cycle

- [IOUSBHostInterestHandler](iousbhostinteresthandler.md): The callback that handles underlying service-state changes.
- [ioService](iousbhostobject/ioservice.md): A reference to the kernel object.
- [queue](iousbhostobject/queue.md): The queue for servicing input/output requests.
- [destroy()](iousbhostobject/destroy%28%29.md): Removes underlying allocations and connections from the USB host object.

# IOUSBHostObjectInitOptions (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Options for initializing the host object.

## Declaration

```objectivec
enum IOUSBHostObjectInitOptions : NSUInteger;
```

## Topics

### Options

- [IOUSBHostObjectInitOptionsNone](iousbhostobjectinitoptions/iousbhostobjectinitoptionsnone.md): The default argument for initializing the host object.
- [IOUSBHostObjectInitOptionsDeviceCapture](iousbhostobjectinitoptions/devicecapture.md): The option to capture the device and terminate existing drivers.

### Enumeration Cases

- [IOUSBHostObjectInitOptionsDeviceSeize](iousbhostobjectinitoptions/deviceseize.md)

## See Also

### Managing the Object Life Cycle

- [initWithIOService:options:queue:error:interestHandler:](iousbhostobject/initwithioservice_options_queue_error_interesthandler_.md): Creates a USB host object and sets up a communication channel to the kernel.
- [initWithIOService:queue:error:interestHandler:](iousbhostobject/initwithioservice_queue_error_interesthandler_.md): Creates a USB host object and sets up a default communication channel to the kernel.
- [IOUSBHostInterestHandler](iousbhostinteresthandler.md): The callback that handles underlying service-state changes.
- [ioService](iousbhostobject/ioservice.md): A reference to the kernel object.
- [queue](iousbhostobject/queue.md): The queue for servicing input/output requests.
- [destroy](iousbhostobject/destroy%28%29.md): Removes underlying allocations and connections from the USB host object.
