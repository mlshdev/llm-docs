> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/accessoryaccess/aausbaccessory/close(completionhandler:)](https://developer.apple.com/documentation/accessoryaccess/aausbaccessory/close(completionhandler:))

# close(completionHandler:) (Swift)

**Framework:** Accessory Access  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Closes all connections to the USB accessory for this process.

## Declaration

```swift
func close(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func close() async throws
```

## Parameters

- `completionHandler`: A block the framework calls after the client has successfully closed the USB accessory. The error parameter the framework passes to the block is `nil` if the operation was successful. The framework invokes the block on an arbitrary thread.

<a id="Discussion"></a>

## Discussion

> **Warning**

> Closing an accessory by calling the `destroy()` method on an [IOUSBHostDevice](../../iousbhost/iousbhostdevice.md) is a blocking operation. Such an operation causes a deadlock, if you call it from a completion handler.

This operation closes the USB accessory, that the app previously opened through [open(serviceQueue:completionHandler:)](open%28servicequeue_completionhandler_%29.md). Once this operation completes, the framework invalidates any [IOUSBHostDevice](../../iousbhost/iousbhostdevice.md) object it previously returned and you can’t use it for USB transfers. This operation has the same effect as calling the destroy method on [IOUSBHostDevice](../../iousbhost/iousbhostdevice.md).

Once the app closes the accessory, the app can re-open the accessory using this process or any other worker process of this client application for exclusive access using [open(serviceQueue:completionHandler:)](open%28servicequeue_completionhandler_%29.md).

## See Also

### Managing a USB accessory

- [open(serviceQueue:completionHandler:)](open%28servicequeue_completionhandler_%29.md): Opens a connection to the USB accessory for this process to access it exclusively.

# closeWithCompletionHandler: (Objective-C)

**Framework:** Accessory Access  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Closes all connections to the USB accessory for this process.

## Declaration

```objectivec
- (void) closeWithCompletionHandler:(void (^)(NSError *)) completionHandler;
```

## Parameters

- `completionHandler`: A block the framework calls after the client has successfully closed the USB accessory. The error parameter the framework passes to the block is `nil` if the operation was successful. The framework invokes the block on an arbitrary thread.

<a id="Discussion"></a>

## Discussion

> **Warning**

> Closing an accessory by calling the `destroy()` method on an [IOUSBHostDevice](../../iousbhost/iousbhostdevice.md) is a blocking operation. Such an operation causes a deadlock, if you call it from a completion handler.

This operation closes the USB accessory, that the app previously opened through [openWithServiceQueue:completionHandler:](open%28servicequeue_completionhandler_%29.md). Once this operation completes, the framework invalidates any [IOUSBHostDevice](../../iousbhost/iousbhostdevice.md) object it previously returned and you can’t use it for USB transfers. This operation has the same effect as calling the destroy method on [IOUSBHostDevice](../../iousbhost/iousbhostdevice.md).

Once the app closes the accessory, the app can re-open the accessory using this process or any other worker process of this client application for exclusive access using [openWithServiceQueue:completionHandler:](open%28servicequeue_completionhandler_%29.md).

## See Also

### Managing a USB accessory

- [openWithServiceQueue:completionHandler:](open%28servicequeue_completionhandler_%29.md): Opens a connection to the USB accessory for this process to access it exclusively.
