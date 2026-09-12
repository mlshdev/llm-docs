> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevice/requestclosesession()](https://developer.apple.com/documentation/imagecapturecore/icdevice/requestclosesession())

# requestCloseSession() (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Requests to close an open session on the device.

## Declaration

```swift
func requestCloseSession()
```

<a id="Discussion"></a>

## Discussion

Once the request to close the session has completed, [device(\_:didCloseSessionWithError:)](../icdevicedelegate/device%28__didclosesessionwitherror_%29.md) is called on the delegate.

Execution of the delegate callback occurs on the main thread.

## See Also

### Managing a Device

- [delegate](delegate.md): The delegate to receive messages once a session is opened on the device.
- [ICDeviceDelegate](../icdevicedelegate.md): Methods for responding to device events and changes.
- [hasOpenSession](hasopensession.md): A Boolean value that indicates whether the device has an open session.
- [requestOpenSession()](requestopensession%28%29.md): Requests to open a session on the device.
- [requestOpenSession(options:completion:)](requestopensession%28options_completion_%29.md): Requests to open a session on the device, then executes the completion handler.
- [requestSendMessage(\_:outData:maxReturnedDataSize:sendMessageDelegate:didSendMessageSelector:contextInfo:)](requestsendmessage%28__outdata_maxreturneddatasize_sendmessagedelegate_didsendmessageselector_contextinfo_%29.md): Asynchronously sends an arbitrary message with optional data to a device.
- [requestCloseSession(options:completion:)](requestclosesession%28options_completion_%29.md): Requests to close an open session on the device, then executes the completion handler.
- [requestEject()](requesteject%28%29.md): Requests to eject the media if permitted by the device, or to disconnect from a remote device.
- [requestEject(completion:)](requesteject%28completion_%29.md): Requests to eject the media if permitted by the device, or to disconnect from a remote device, then executes the completion handler.

# requestCloseSession (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Requests to close an open session on the device.

## Declaration

```objectivec
- (void) requestCloseSession;
```

<a id="Discussion"></a>

## Discussion

Once the request to close the session has completed, [device:didCloseSessionWithError:](../icdevicedelegate/device%28__didclosesessionwitherror_%29.md) is called on the delegate.

Execution of the delegate callback occurs on the main thread.

## See Also

### Managing a Device

- [delegate](delegate.md): The delegate to receive messages once a session is opened on the device.
- [ICDeviceDelegate](../icdevicedelegate.md): Methods for responding to device events and changes.
- [hasOpenSession](hasopensession.md): A Boolean value that indicates whether the device has an open session.
- [requestOpenSession](requestopensession%28%29.md): Requests to open a session on the device.
- [requestOpenSessionWithOptions:completion:](requestopensession%28options_completion_%29.md): Requests to open a session on the device, then executes the completion handler.
- [requestSendMessage:outData:maxReturnedDataSize:sendMessageDelegate:didSendMessageSelector:contextInfo:](requestsendmessage%28__outdata_maxreturneddatasize_sendmessagedelegate_didsendmessageselector_contextinfo_%29.md): Asynchronously sends an arbitrary message with optional data to a device.
- [requestCloseSessionWithOptions:completion:](requestclosesession%28options_completion_%29.md): Requests to close an open session on the device, then executes the completion handler.
- [requestEject](requesteject%28%29.md): Requests to eject the media if permitted by the device, or to disconnect from a remote device.
- [requestEjectWithCompletion:](requesteject%28completion_%29.md): Requests to eject the media if permitted by the device, or to disconnect from a remote device, then executes the completion handler.
