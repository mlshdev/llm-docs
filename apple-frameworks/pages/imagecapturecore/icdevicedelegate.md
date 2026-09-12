> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicedelegate](https://developer.apple.com/documentation/imagecapturecore/icdevicedelegate)

# ICDeviceDelegate (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Methods for responding to device events and changes.

## Declaration

```swift
protocol ICDeviceDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Unless otherwise noted, all completion blocks execute on the calling thread.

## Topics

### Responding to Device Events

- [device(\_:didOpenSessionWithError:)](icdevicedelegate/device%28__didopensessionwitherror_%29.md): Tells the delegate when a session is opened on a device.
- [device(\_:didCloseSessionWithError:)](icdevicedelegate/device%28__didclosesessionwitherror_%29.md): Tells the delegate when a session is closed on a device.
- [didRemove(\_:)](icdevicedelegate/didremove%28__%29.md): Tells the delegate that a device has been removed.
- [deviceDidBecomeReady(\_:)](icdevicedelegate/devicedidbecomeready%28__%29.md): Tells the delegate when the device is ready to receive requests.
- [device(\_:didReceiveStatusInformation:)](icdevicedelegate/device%28__didreceivestatusinformation_%29.md): Tells the delegate when status information is received from a device.
- [device(\_:didEncounterError:)](icdevicedelegate/device%28__didencountererror_%29.md): Tells the delegate when a device encounters an error.
- [device(\_:didEjectWithError:)](icdevicedelegate/device%28__didejectwitherror_%29.md): Tells the delegate when the ejection is complete.

### Responding to Device Changes

- [deviceDidChangeName(\_:)](icdevicedelegate/devicedidchangename%28__%29.md): Tells the delegate when the name of a device changes.
- [deviceDidChangeSharingState(\_:)](icdevicedelegate/devicedidchangesharingstate%28__%29.md): Deprecated. Tells the delegate when the sharing state of a device changes.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [ICCameraDeviceDelegate](iccameradevicedelegate.md)
- [ICScannerDeviceDelegate](icscannerdevicedelegate.md)

## See Also

### Managing a Device

- [delegate](icdevice/delegate.md): The delegate to receive messages once a session is opened on the device.
- [hasOpenSession](icdevice/hasopensession.md): A Boolean value that indicates whether the device has an open session.
- [requestOpenSession()](icdevice/requestopensession%28%29.md): Requests to open a session on the device.
- [requestOpenSession(options:completion:)](icdevice/requestopensession%28options_completion_%29.md): Requests to open a session on the device, then executes the completion handler.
- [requestSendMessage(\_:outData:maxReturnedDataSize:sendMessageDelegate:didSendMessageSelector:contextInfo:)](icdevice/requestsendmessage%28__outdata_maxreturneddatasize_sendmessagedelegate_didsendmessageselector_contextinfo_%29.md): Asynchronously sends an arbitrary message with optional data to a device.
- [requestCloseSession()](icdevice/requestclosesession%28%29.md): Requests to close an open session on the device.
- [requestCloseSession(options:completion:)](icdevice/requestclosesession%28options_completion_%29.md): Requests to close an open session on the device, then executes the completion handler.
- [requestEject()](icdevice/requesteject%28%29.md): Requests to eject the media if permitted by the device, or to disconnect from a remote device.
- [requestEject(completion:)](icdevice/requesteject%28completion_%29.md): Requests to eject the media if permitted by the device, or to disconnect from a remote device, then executes the completion handler.

# ICDeviceDelegate (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS

Methods for responding to device events and changes.

## Declaration

```objectivec
@protocol ICDeviceDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Unless otherwise noted, all completion blocks execute on the calling thread.

## Topics

### Responding to Device Events

- [device:didOpenSessionWithError:](icdevicedelegate/device%28__didopensessionwitherror_%29.md): Tells the delegate when a session is opened on a device.
- [device:didCloseSessionWithError:](icdevicedelegate/device%28__didclosesessionwitherror_%29.md): Tells the delegate when a session is closed on a device.
- [didRemoveDevice:](icdevicedelegate/didremove%28__%29.md): Tells the delegate that a device has been removed.
- [deviceDidBecomeReady:](icdevicedelegate/devicedidbecomeready%28__%29.md): Tells the delegate when the device is ready to receive requests.
- [device:didReceiveStatusInformation:](icdevicedelegate/device%28__didreceivestatusinformation_%29.md): Tells the delegate when status information is received from a device.
- [device:didEncounterError:](icdevicedelegate/device%28__didencountererror_%29.md): Tells the delegate when a device encounters an error.
- [device:didEjectWithError:](icdevicedelegate/device%28__didejectwitherror_%29.md): Tells the delegate when the ejection is complete.

### Responding to Device Changes

- [deviceDidChangeName:](icdevicedelegate/devicedidchangename%28__%29.md): Tells the delegate when the name of a device changes.
- [deviceDidChangeSharingState:](icdevicedelegate/devicedidchangesharingstate%28__%29.md): Deprecated. Tells the delegate when the sharing state of a device changes.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [ICCameraDeviceDelegate](iccameradevicedelegate.md)
- [ICScannerDeviceDelegate](icscannerdevicedelegate.md)

## See Also

### Managing a Device

- [delegate](icdevice/delegate.md): The delegate to receive messages once a session is opened on the device.
- [hasOpenSession](icdevice/hasopensession.md): A Boolean value that indicates whether the device has an open session.
- [requestOpenSession](icdevice/requestopensession%28%29.md): Requests to open a session on the device.
- [requestOpenSessionWithOptions:completion:](icdevice/requestopensession%28options_completion_%29.md): Requests to open a session on the device, then executes the completion handler.
- [requestSendMessage:outData:maxReturnedDataSize:sendMessageDelegate:didSendMessageSelector:contextInfo:](icdevice/requestsendmessage%28__outdata_maxreturneddatasize_sendmessagedelegate_didsendmessageselector_contextinfo_%29.md): Asynchronously sends an arbitrary message with optional data to a device.
- [requestCloseSession](icdevice/requestclosesession%28%29.md): Requests to close an open session on the device.
- [requestCloseSessionWithOptions:completion:](icdevice/requestclosesession%28options_completion_%29.md): Requests to close an open session on the device, then executes the completion handler.
- [requestEject](icdevice/requesteject%28%29.md): Requests to eject the media if permitted by the device, or to disconnect from a remote device.
- [requestEjectWithCompletion:](icdevice/requesteject%28completion_%29.md): Requests to eject the media if permitted by the device, or to disconnect from a remote device, then executes the completion handler.
