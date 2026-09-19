> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiodriverkit/iouseraudiodriver/free

# free

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Performs any final cleanup for the service.

## Declaration

```objectivec
virtual void free();
```

<a id="Discussion"></a>

## Discussion

Override this method inherited from [IOService](../../driverkit/ioservice.md).

Use this method to perform any final cleanup of your service, such as deallocating any memory you allocated. The system calls this method at some point after it calls your service’s [Stop](stop.md) method.

Always call `super` at the end of your custom implementation.

## See Also

### Running the Driver Service

- [init](init.md): Handles the basic initialization of the service.
- [Start](start.md): Starts the current service and associates it with the specified provider.
- [Stop](stop.md): Stops the service associated with the specified provider.
