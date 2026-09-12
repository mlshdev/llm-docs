> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iouserhideventdriver/start](https://developer.apple.com/documentation/hiddriverkit/iouserhideventdriver/start)

# Start

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

Starts the current event driver and associates it with the specified provider object.

## Declaration

```objectivec
virtual kern_return_t Start(IOService *provider);
```

## Parameters

- `provider`: The provider object that matches the current event driver. Cast this object to the class you expect. The system retains this object for the duration of your [Start](../iouserhideventservice/start.md) method. The system continues to retain the object if your driver starts successfully, releasing it only after calling your driver’s [Stop](../iouserhideventservice/stop.md) method.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

After successfully matching the specified provider to your event driver, the system instantiates your driver object and calls this method. Use this method to configure your custom data structures and any associated hardware. You might also store a reference to the provider object for later use. After you configure your event driver, call the [RegisterService](../../driverkit/ioservice/registerservice.md) method to let the system know that your driver is running.

Always call `super` early in your implementation of this method. This method creates and parses the elements from the device’s initial report, making it easier to process future reports and dispatch events.

## See Also

### Running the Driver

- [init](init.md): Handles the basic initialization of the event service.
- [free](free.md): Performs any final cleanup for the service.
