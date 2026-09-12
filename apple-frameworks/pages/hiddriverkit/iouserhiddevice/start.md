> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iouserhiddevice/start](https://developer.apple.com/documentation/hiddriverkit/iouserhiddevice/start)

# Start

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Starts the device service and associates it with the specified provider object.

## Declaration

```objectivec
virtual kern_return_t Start(IOService *provider);
```

## Parameters

- `provider`: The provider object that matches the current device. Cast this object to the class you expect. The system retains this object for the duration of your `Start` method. The system continues to retain the object if your service starts successfully, releasing it only after calling your service’s [Stop](../iouserhideventservice/stop.md) method.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

After successfully matching the specified provider to your device, the system instantiates your device object and calls this method. Don’t override this method directly. Instead, implement your custom initialization code in the [handleStart](handlestart.md) method.

This method calls [newDeviceDescription](newdevicedescription.md) and [newReportDescriptor](newreportdescriptor.md) to retrieve information about your device. It then stores the results and starts your service.

## See Also

### Running the Service

- [handleStart](handlestart.md): Performs any custom initialization associated with starting the device service.
