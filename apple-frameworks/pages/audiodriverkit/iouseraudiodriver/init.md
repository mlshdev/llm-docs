> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiodriver/init](https://developer.apple.com/documentation/audiodriverkit/iouseraudiodriver/init)

# init

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Handles the basic initialization of the service.

## Declaration

```objectivec
virtual bool init();
```

<a id="return-value"></a>

## Return Value

`true` if initialization was successful, or `false` if an error occurred.

<a id="Discussion"></a>

## Discussion

Override this method inherited from [IOService](../../driverkit/ioservice.md).

The system calls this method shortly after it instantiates your custom [IOService](../../driverkit/ioservice.md) subclass, and before it calls the [Start](start.md) method of your service. Limit the work you do in this method to simple tasks that must occur before your service starts. For example, use this method to allocate memory for your `ivars` structure.

Always call `super` early in your implementation of this method.

## See Also

### Running the Driver Service

- [Start](start.md): Starts the current service and associates it with the specified provider.
- [Stop](stop.md): Stops the service associated with the specified provider.
- [free](free.md): Performs any final cleanup for the service.
