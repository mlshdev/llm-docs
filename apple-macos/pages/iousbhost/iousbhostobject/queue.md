> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostobject/queue](https://developer.apple.com/documentation/iousbhost/iousbhostobject/queue)

# queue (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The queue for servicing input/output requests.

## Declaration

```swift
var queue: dispatch_queue_t { get }
```

<a id="Discussion"></a>

## Discussion

Use this queue only for asynchronous input/output requests.

## See Also

### Managing the Object Life Cycle

- [IOUSBHostObjectInitOptions](../iousbhostobjectinitoptions.md): Options for initializing the host object.
- [IOUSBHostInterestHandler](../iousbhostinteresthandler.md): The callback that handles underlying service-state changes.
- [ioService](ioservice.md): A reference to the kernel object.
- [destroy()](destroy%28%29.md): Removes underlying allocations and connections from the USB host object.

# queue (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The queue for servicing input/output requests.

## Declaration

```objectivec
@property (readonly) dispatch_queue_t queue;
```

<a id="Discussion"></a>

## Discussion

Use this queue only for asynchronous input/output requests.

## See Also

### Managing the Object Life Cycle

- [IOUSBHostObjectInitOptions](../iousbhostobjectinitoptions.md): Options for initializing the host object.
- [initWithIOService:options:queue:error:interestHandler:](initwithioservice_options_queue_error_interesthandler_.md): Creates a USB host object and sets up a communication channel to the kernel.
- [initWithIOService:queue:error:interestHandler:](initwithioservice_queue_error_interesthandler_.md): Creates a USB host object and sets up a default communication channel to the kernel.
- [IOUSBHostInterestHandler](../iousbhostinteresthandler.md): The callback that handles underlying service-state changes.
- [ioService](ioservice.md): A reference to the kernel object.
- [destroy](destroy%28%29.md): Removes underlying allocations and connections from the USB host object.
