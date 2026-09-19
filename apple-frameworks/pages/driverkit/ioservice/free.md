> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/driverkit/ioservice/free

# free

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Performs any final cleanup for the service.

## Declaration

```objectivec
virtual void free();
```

## Mentioned In

- [Creating a Driver Using the DriverKit SDK](../creating-a-driver-using-the-driverkit-sdk.md)

<a id="Discussion"></a>

## Discussion

Use this method to perform any final cleanup of your service, such as deallocating any memory you allocated. The system calls this method at some point after it calls your service’s [Stop](stop.md) method.

Always call `super` at the end of your custom implementation.

## See Also

### Running the Service

- [init](init.md): Handles the basic initialization of the service.
- [Start](start.md): Starts the current service and associates it with the specified provider.
- [Stop](stop.md): Stops the service associated with the specified provider.
