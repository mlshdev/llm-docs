> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostobject/destroy()](https://developer.apple.com/documentation/iousbhost/iousbhostobject/destroy())

# destroy() (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Removes underlying allocations and connections from the USB host object.

## Declaration

```swift
func destroy()
```

<a id="Discussion"></a>

## Discussion

When you no longer need the [IOUSBHostObject](../iousbhostobject.md), call [destroy()](destroy%28%29.md). This method destroys the connection with the kernel object and deregisters interest on [io_service_t](https://developer.apple.com/documentation/iokit/io_service_t). Calling [destroy()](destroy%28%29.md) multiple times has no effect.

## See Also

### Managing the Object Life Cycle

- [IOUSBHostObjectInitOptions](../iousbhostobjectinitoptions.md): Options for initializing the host object.
- [IOUSBHostInterestHandler](../iousbhostinteresthandler.md): The callback that handles underlying service-state changes.
- [ioService](ioservice.md): A reference to the kernel object.
- [queue](queue.md): The queue for servicing input/output requests.

# destroy (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Removes underlying allocations and connections from the USB host object.

## Declaration

```objectivec
- (void) destroy;
```

<a id="Discussion"></a>

## Discussion

When you no longer need the [IOUSBHostObject](../iousbhostobject.md), call [destroy](destroy%28%29.md). This method destroys the connection with the kernel object and deregisters interest on [io_service_t](https://developer.apple.com/documentation/iokit/io_service_t). Calling [destroy](destroy%28%29.md) multiple times has no effect.

## See Also

### Managing the Object Life Cycle

- [IOUSBHostObjectInitOptions](../iousbhostobjectinitoptions.md): Options for initializing the host object.
- [initWithIOService:options:queue:error:interestHandler:](initwithioservice_options_queue_error_interesthandler_.md): Creates a USB host object and sets up a communication channel to the kernel.
- [initWithIOService:queue:error:interestHandler:](initwithioservice_queue_error_interesthandler_.md): Creates a USB host object and sets up a default communication channel to the kernel.
- [IOUSBHostInterestHandler](../iousbhostinteresthandler.md): The callback that handles underlying service-state changes.
- [ioService](ioservice.md): A reference to the kernel object.
- [queue](queue.md): The queue for servicing input/output requests.
