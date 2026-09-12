> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iouserusbhosthiddevice/start](https://developer.apple.com/documentation/hiddriverkit/iouserusbhosthiddevice/start)

# Start

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Starts the current device service and associates it with the specified provider object.

## Declaration

```objectivec
virtual kern_return_t Start(IOService *provider);
```

## Parameters

- `provider`: The provider object that matches the current service. This method requires that the provider be an [IOUSBHostInterface](../../usbdriverkit/iousbhostinterface.md) object, and returns an error if it isn’t. The system retains this object for the duration of the `Start` method. The system continues to retain the object if your service starts successfully, releasing it only after calling your service’s [Stop](../iouserhideventservice/stop.md) method.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

After successfully matching the specified provider to your device, the system instantiates your device object and calls this method. This method configures the USB device and sets up the pipes needed for communication.

Don’t override this method directly. Instead, implement your custom initialization code in the [handleStart](../iouserhiddevice/handlestart.md) method.

## See Also

### Running the Service

- [init](init.md): Handles the basic initialization of the event service.
- [handleStart](handlestart.md): Performs any custom initialization associated with starting the device service.
- [Stop](stop.md): Stops the device service associated with the specified provider.
- [free](free.md): Performs any final cleanup for the service.
