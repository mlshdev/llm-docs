> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbserialdriverkit/iouserusbserial/free](https://developer.apple.com/documentation/usbserialdriverkit/iouserusbserial/free)

# free

**Interface language:** Objective-C

**Framework:** USBSerialDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Performs any final cleanup for the service.

## Declaration

```objectivec
virtual void free();
```

<a id="Discussion"></a>

## Discussion

Use this method to deallocate any memory associated with your service, or perform other cleanup tasks. The system calls this method at some point after it calls your service’s [Stop](../../serialdriverkit/iouserserial/stop.md) method.

Always call `super` at the end of your implementation of this method.

## See Also

### Configuring the Service

- [init](init.md): Handles the basic initialization of the service.
- [Start](start.md): Starts the service for the specified provider.
- [Stop](stop.md): Stops the service that matches the specified provider.
- [initWith](initwith.md): Initializes the private data structures associated with this class.
