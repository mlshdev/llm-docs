> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/accessoryaccess/aausbaccessory/open(servicequeue:completionhandler:)](https://developer.apple.com/documentation/accessoryaccess/aausbaccessory/open(servicequeue:completionhandler:))

# open(serviceQueue:completionHandler:) (Swift)

**Framework:** Accessory Access  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Opens a connection to the USB accessory for this process to access it exclusively.

## Declaration

```swift
func open(serviceQueue: dispatch_queue_t?, completionHandler: @escaping @Sendable (IOUSBHostDevice, (any Error)?) -> Void)
```

```swift
func open(serviceQueue: dispatch_queue_t?) async throws -> IOUSBHostDevice
```

## Parameters

- `serviceQueue`: A serial queue that the app uses to service all the asynchronous requests it submits to the default control endpoint. By default the framework creates an internal serial queue for the client process.
- `completionHandler`: The block the framework calls after the client has successfully opened the USB accessory. The error parameter passed to the block is `nil` if the operation was successful. The framework invokes the block on an arbitrary thread.

<a id="Discussion"></a>

## Discussion

This operation opens a connection to the USB accessory for exclusive access and returns its [IOUSBHostDevice](../../iousbhost/iousbhostdevice.md) object. An app can call this multiple times, subsequent calls will return the same `IOUSBHostDevice` instance.

When the process no longer needs exclusive access to this accessory, call [close(completionHandler:)](close%28completionhandler_%29.md) to close the accessory. This will close all open connections to the accessory and invalidate all the IOUSBHostDevice objects.

## See Also

### Managing a USB accessory

- [close(completionHandler:)](close%28completionhandler_%29.md): Closes all connections to the USB accessory for this process.

# openWithServiceQueue:completionHandler: (Objective-C)

**Framework:** Accessory Access  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Opens a connection to the USB accessory for this process to access it exclusively.

## Declaration

```objectivec
- (void) openWithServiceQueue:(dispatch_queue_t) serviceQueue completionHandler:(void (^)(IOUSBHostDevice *_Nullable_on_error, NSError *)) completionHandler;
```

## Parameters

- `serviceQueue`: A serial queue that the app uses to service all the asynchronous requests it submits to the default control endpoint. By default the framework creates an internal serial queue for the client process.
- `completionHandler`: The block the framework calls after the client has successfully opened the USB accessory. The error parameter passed to the block is `nil` if the operation was successful. The framework invokes the block on an arbitrary thread.

<a id="Discussion"></a>

## Discussion

This operation opens a connection to the USB accessory for exclusive access and returns its [IOUSBHostDevice](../../iousbhost/iousbhostdevice.md) object. An app can call this multiple times, subsequent calls will return the same `IOUSBHostDevice` instance.

When the process no longer needs exclusive access to this accessory, call [closeWithCompletionHandler:](close%28completionhandler_%29.md) to close the accessory. This will close all open connections to the accessory and invalidate all the IOUSBHostDevice objects.

## See Also

### Managing a USB accessory

- [closeWithCompletionHandler:](close%28completionhandler_%29.md): Closes all connections to the USB accessory for this process.
