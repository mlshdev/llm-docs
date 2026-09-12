> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostdevice/reset()](https://developer.apple.com/documentation/iousbhost/iousbhostdevice/reset())

# reset() (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Terminates the device and attempts to re-enumerate it.

## Declaration

```swift
func reset() throws
```

<a id="Discussion"></a>

## Discussion

This function resets and attempts to re-enumerate the USB device, and terminates the [IOUSBHostDevice](../../kernel/iousbhostdevice.md) and all of its child [IOService](../../kernel/ioservice.md) objects. If the reset is successful, it also creates and registers a new [IOService](../../kernel/ioservice.md) object after terminating the previous object. After the call returns successfully, the framework [IOUSBHostDevice](../iousbhostdevice.md) no longer has a valid connection with the [IOService](../../kernel/ioservice.md) object.

> **Important**

>  To use the re-enumerated device, you must create a new framework client using [initWithIOService:options:queue:error:interestHandler:](../iousbhostobject/initwithioservice_options_queue_error_interesthandler_.md).

# resetWithError: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Terminates the device and attempts to re-enumerate it.

## Declaration

```objectivec
- (BOOL) resetWithError:(NSError **) error;
```

## Parameters

- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) that contains an [IOReturn](../../kernel/ioreturn.md) value on failure.

<a id="return-value"></a>

## Return Value

`YES` if the request completes successfully; otherwise, `NO`.

<a id="Discussion"></a>

## Discussion

This function resets and attempts to re-enumerate the USB device, and terminates the [IOUSBHostDevice](../../kernel/iousbhostdevice.md) and all of its child [IOService](../../kernel/ioservice.md) objects. If the reset is successful, it also creates and registers a new [IOService](../../kernel/ioservice.md) object after terminating the previous object. After the call returns successfully, the framework [IOUSBHostDevice](../iousbhostdevice.md) no longer has a valid connection with the [IOService](../../kernel/ioservice.md) object.

> **Important**

>  To use the re-enumerated device, you must create a new framework client using [initWithIOService:options:queue:error:interestHandler:](../iousbhostobject/initwithioservice_options_queue_error_interesthandler_.md).
