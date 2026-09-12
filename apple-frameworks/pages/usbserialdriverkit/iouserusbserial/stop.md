> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbserialdriverkit/iouserusbserial/stop](https://developer.apple.com/documentation/usbserialdriverkit/iouserusbserial/stop)

# Stop

**Interface language:** Objective-C

**Framework:** USBSerialDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Stops the service that matches the specified provider.

## Declaration

```objectivec
virtual kern_return_t Stop(IOService *provider);
```

## Parameters

- `provider`: The provider associated with the current service. This object is the same one that the system previously passed to your service’s [Start](../../serialdriverkit/iouserserial/start.md) method.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

Before terminating a provider, the system calls this method to stop the service associated with that object. Use your implementation of this method to stop all activity and put your driver in a quiescent state. Call `super` at the end of your implementation. After you call `super`, it is a programmer error to access the `provider` object.

## See Also

### Configuring the Service

- [init](init.md): Handles the basic initialization of the service.
- [Start](start.md): Starts the service for the specified provider.
- [free](free.md): Performs any final cleanup for the service.
- [initWith](initwith.md): Initializes the private data structures associated with this class.
