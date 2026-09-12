> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostinteresthandler](https://developer.apple.com/documentation/iousbhost/iousbhostinteresthandler)

# IOUSBHostInterestHandler (Swift)

**Framework:** IOUSBHost  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The callback that handles underlying service-state changes.

## Declaration

```swift
typealias IOUSBHostInterestHandler = (IOUSBHostObject, UInt32, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `hostObject`: The [IOUSBHostObject](iousbhostobject.md) of the interest notification.
- `messageType`: A `messageType` enumeration that `IOKit/IOMessage.h` or the [IOService](../kernel/ioservice.md) family defines.
- `messageArgument`: An argument for the message, dependent on the message type. If the message data is larger than `sizeof(void*)`, `messageArgument` contains a pointer to the message data; otherwise, `messageArgument` contains the message data.

<a id="Discussion"></a>

## Discussion

This is the block for the `kIOGeneralInterest` handler, and handles underlying service-state changes, such as termination. See [IOServiceInterestCallback](https://developer.apple.com/documentation/iokit/ioserviceinterestcallback) in [IOKit](https://developer.apple.com/documentation/iokit) for more details. An internal serial queue separate from the input/output queue services all notifications.

## See Also

### Managing the Object Life Cycle

- [IOUSBHostObjectInitOptions](iousbhostobjectinitoptions.md): Options for initializing the host object.
- [ioService](iousbhostobject/ioservice.md): A reference to the kernel object.
- [queue](iousbhostobject/queue.md): The queue for servicing input/output requests.
- [destroy()](iousbhostobject/destroy%28%29.md): Removes underlying allocations and connections from the USB host object.

# IOUSBHostInterestHandler (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The callback that handles underlying service-state changes.

## Declaration

```objectivec
typedef void (^)(IOUSBHostObject *, unsigned int, void *) IOUSBHostInterestHandler;
```

## Parameters

- `hostObject`: The [IOUSBHostObject](iousbhostobject.md) of the interest notification.
- `messageType`: A `messageType` enumeration that `IOKit/IOMessage.h` or the [IOService](../kernel/ioservice.md) family defines.
- `messageArgument`: An argument for the message, dependent on the message type. If the message data is larger than `sizeof(void*)`, `messageArgument` contains a pointer to the message data; otherwise, `messageArgument` contains the message data.

<a id="Discussion"></a>

## Discussion

This is the block for the `kIOGeneralInterest` handler, and handles underlying service-state changes, such as termination. See [IOServiceInterestCallback](https://developer.apple.com/documentation/iokit/ioserviceinterestcallback) in [IOKit](https://developer.apple.com/documentation/iokit) for more details. An internal serial queue separate from the input/output queue services all notifications.

## See Also

### Managing the Object Life Cycle

- [IOUSBHostObjectInitOptions](iousbhostobjectinitoptions.md): Options for initializing the host object.
- [initWithIOService:options:queue:error:interestHandler:](iousbhostobject/initwithioservice_options_queue_error_interesthandler_.md): Creates a USB host object and sets up a communication channel to the kernel.
- [initWithIOService:queue:error:interestHandler:](iousbhostobject/initwithioservice_queue_error_interesthandler_.md): Creates a USB host object and sets up a default communication channel to the kernel.
- [ioService](iousbhostobject/ioservice.md): A reference to the kernel object.
- [queue](iousbhostobject/queue.md): The queue for servicing input/output requests.
- [destroy](iousbhostobject/destroy%28%29.md): Removes underlying allocations and connections from the USB host object.
