> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/serialdriverkit/iouserserial/init](https://developer.apple.com/documentation/serialdriverkit/iouserserial/init)

# init

**Interface language:** Objective-C

**Framework:** SerialDriverKit  
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

The system calls this method shortly after it instantiates your `IOUserSerial` subclass, and before it calls the [Start](start.md) method of your service. Override this method and use it to initialize your subclass. Limit the work you do in this method to simple tasks that must occur before your service starts. For example, use this method to allocate memory for your `ivars` structure.

Always call `super` at the beginning of your implementation of this method.

## See Also

### Configuring the Service

- [Start](start.md): Starts the current service and associates it with the specified provider.
- [Stop](stop.md): Stops the service associated with the specified provider.
- [free](free.md): Performs any final cleanup for the service.
- [initWith](initwith.md): Initializes the private data structures associated with this class.
