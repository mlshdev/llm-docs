> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostobject/initwithioservice:options:queue:error:interesthandler:](https://developer.apple.com/documentation/iousbhost/iousbhostobject/initwithioservice:options:queue:error:interesthandler:)

# initWithIOService:options:queue:error:interestHandler:

**Interface language:** Objective-C

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Creates a USB host object and sets up a communication channel to the kernel.

## Declaration

```objectivec
- (instancetype) initWithIOService:(io_service_t) ioService options:(IOUSBHostObjectInitOptions) options queue:(dispatch_queue_t) queue error:(NSError **) error interestHandler:(IOUSBHostInterestHandler) interestHandler;
```

## Parameters

- `ioService`: The service type of the [IOUSBHostDevice](../iousbhostdevice.md) or [IOUSBHostInterface](../iousbhostinterface.md). The [IOUSBHostObject](../iousbhostobject.md) keeps a reference to the service type and releases it during [destroy](destroy%28%29.md).
- `options`: Optional arguments for initializing the object. The default value is [IOUSBHostObjectInitOptionsNone](../iousbhostobjectinitoptions/iousbhostobjectinitoptionsnone.md).
- `queue`: A serial dispatch queue for servicable asynchronous input/output requests. By default, this method creates a serial queue on behalf of the client.
- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) that contains an [IOReturn](../../kernel/ioreturn.md) value on failure.
- `interestHandler`: A callback for managing internal device-state changes, such as termination.

<a id="return-value"></a>

## Return Value

An [IOUSBHostObject](../iousbhostobject.md) instance, or `nil` on failure.

<a id="Discussion"></a>

## Discussion

If the kernel [IOUSBHostDevice](../../kernel/iousbhostdevice.md) or [IOUSBHostInterface](../iousbhostinterface.md) is already open for exclusive access, the method returns `nil`. The method establishes exclusive ownership of the [io_service_t](../../kernel/io_service_t.md).

> **Important**

>  When done with the object, call [destroy](destroy%28%29.md).

## Topics

### Interest Handler

- [IOUSBHostInterestHandler](../iousbhostinteresthandler.md): The callback that handles underlying service-state changes.

## See Also

### Managing the Object Life Cycle

- [IOUSBHostObjectInitOptions](../iousbhostobjectinitoptions.md): Options for initializing the host object.
- [initWithIOService:queue:error:interestHandler:](initwithioservice_queue_error_interesthandler_.md): Creates a USB host object and sets up a default communication channel to the kernel.
- [IOUSBHostInterestHandler](../iousbhostinteresthandler.md): The callback that handles underlying service-state changes.
- [ioService](ioservice.md): A reference to the kernel object.
- [queue](queue.md): The queue for servicing input/output requests.
- [destroy](destroy%28%29.md): Removes underlying allocations and connections from the USB host object.
