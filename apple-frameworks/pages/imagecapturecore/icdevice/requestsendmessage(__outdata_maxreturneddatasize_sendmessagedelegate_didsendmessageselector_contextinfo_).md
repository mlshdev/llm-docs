> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevice/requestsendmessage(_:outdata:maxreturneddatasize:sendmessagedelegate:didsendmessageselector:contextinfo:)](https://developer.apple.com/documentation/imagecapturecore/icdevice/requestsendmessage(_:outdata:maxreturneddatasize:sendmessagedelegate:didsendmessageselector:contextinfo:))

# requestSendMessage(\_:outData:maxReturnedDataSize:sendMessageDelegate:didSendMessageSelector:contextInfo:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Asynchronously sends an arbitrary message with optional data to a device.

## Declaration

```swift
func requestSendMessage(_ messageCode: UInt32, outData data: Data, maxReturnedDataSize: UInt32, sendMessageDelegate: Any, didSendMessageSelector selector: Selector, contextInfo: UnsafeMutableRawPointer?)
```

<a id="Discussion"></a>

## Discussion

Use this method to send a private message from a client application to a device module.

The `sendMessageDelegate` must implement a function with the signature `(void)didSendMessage:(UInt32)messageCode inData:(NSData*)data error:(NSError*)error contextInfo:(void*)contextInfo`, to be called when the request is completed.

Do not use this method to send PTP pass-through commands to a PTP camera. Use [requestSendPTPCommand(\_:outData:sendCommandDelegate:didSendCommand:contextInfo:)](../iccameradevice/requestsendptpcommand%28__outdata_sendcommanddelegate_didsendcommand_contextinfo_%29.md) instead.

Execution of the delegate callback occurs on the main thread.

## See Also

### Managing a Device

- [delegate](delegate.md): The delegate to receive messages once a session is opened on the device.
- [ICDeviceDelegate](../icdevicedelegate.md): Methods for responding to device events and changes.
- [hasOpenSession](hasopensession.md): A Boolean value that indicates whether the device has an open session.
- [requestOpenSession()](requestopensession%28%29.md): Requests to open a session on the device.
- [requestOpenSession(options:completion:)](requestopensession%28options_completion_%29.md): Requests to open a session on the device, then executes the completion handler.
- [requestCloseSession()](requestclosesession%28%29.md): Requests to close an open session on the device.
- [requestCloseSession(options:completion:)](requestclosesession%28options_completion_%29.md): Requests to close an open session on the device, then executes the completion handler.
- [requestEject()](requesteject%28%29.md): Requests to eject the media if permitted by the device, or to disconnect from a remote device.
- [requestEject(completion:)](requesteject%28completion_%29.md): Requests to eject the media if permitted by the device, or to disconnect from a remote device, then executes the completion handler.

# requestSendMessage:outData:maxReturnedDataSize:sendMessageDelegate:didSendMessageSelector:contextInfo: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Asynchronously sends an arbitrary message with optional data to a device.

## Declaration

```objectivec
- (void) requestSendMessage:(unsigned int) messageCode outData:(NSData *) data maxReturnedDataSize:(unsigned int) maxReturnedDataSize sendMessageDelegate:(id) sendMessageDelegate didSendMessageSelector:(SEL) selector contextInfo:(void *) contextInfo;
```

<a id="Discussion"></a>

## Discussion

Use this method to send a private message from a client application to a device module.

The `sendMessageDelegate` must implement a function with the signature `(void)didSendMessage:(UInt32)messageCode inData:(NSData*)data error:(NSError*)error contextInfo:(void*)contextInfo`, to be called when the request is completed.

Do not use this method to send PTP pass-through commands to a PTP camera. Use [requestSendPTPCommand:outData:sendCommandDelegate:didSendCommandSelector:contextInfo:](../iccameradevice/requestsendptpcommand%28__outdata_sendcommanddelegate_didsendcommand_contextinfo_%29.md) instead.

Execution of the delegate callback occurs on the main thread.

## See Also

### Managing a Device

- [delegate](delegate.md): The delegate to receive messages once a session is opened on the device.
- [ICDeviceDelegate](../icdevicedelegate.md): Methods for responding to device events and changes.
- [hasOpenSession](hasopensession.md): A Boolean value that indicates whether the device has an open session.
- [requestOpenSession](requestopensession%28%29.md): Requests to open a session on the device.
- [requestOpenSessionWithOptions:completion:](requestopensession%28options_completion_%29.md): Requests to open a session on the device, then executes the completion handler.
- [requestCloseSession](requestclosesession%28%29.md): Requests to close an open session on the device.
- [requestCloseSessionWithOptions:completion:](requestclosesession%28options_completion_%29.md): Requests to close an open session on the device, then executes the completion handler.
- [requestEject](requesteject%28%29.md): Requests to eject the media if permitted by the device, or to disconnect from a remote device.
- [requestEjectWithCompletion:](requesteject%28completion_%29.md): Requests to eject the media if permitted by the device, or to disconnect from a remote device, then executes the completion handler.
