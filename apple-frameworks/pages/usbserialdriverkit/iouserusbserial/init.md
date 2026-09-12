> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbserialdriverkit/iouserusbserial/init](https://developer.apple.com/documentation/usbserialdriverkit/iouserusbserial/init)

# init

**Interface language:** Objective-C

**Framework:** USBSerialDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Handles the basic initialization of the service.

## Declaration

```objectivec
virtual bool init();
```

<a id="return-value"></a>

## Return Value

`YES` if initialization is successful, or `NO` if an error occurred.

<a id="Discussion"></a>

## Discussion

The system calls this method shortly after it instantiates your `IOUserUSBSerial` subclass, and before it calls the [Start](../../serialdriverkit/iouserserial/start.md) method of your service. Limit the work you do in this method to simple tasks that must occur before your service starts. For example, use this method to allocate memory for your `ivars` structure.

Always call `super` at the beginning of your implementation of this method.

## See Also

### Configuring the Service

- [Start](start.md): Starts the service for the specified provider.
- [Stop](stop.md): Stops the service that matches the specified provider.
- [free](free.md): Performs any final cleanup for the service.
- [initWith](initwith.md): Initializes the private data structures associated with this class.
