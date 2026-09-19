> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/serialdriverkit/iouserserial/free

# free

**Interface language:** Objective-C

**Framework:** SerialDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Performs any final cleanup for the service.

## Declaration

```objectivec
virtual void free();
```

<a id="Discussion"></a>

## Discussion

Use this method to deallocate the memory associated with your service, or perform other cleanup tasks. The system calls this method at some point after it calls your service’s [Stop](stop.md) method.

Always call `super` at the end of your implementation of this method.

## See Also

### Configuring the Service

- [init](init.md): Handles the basic initialization of the service.
- [Start](start.md): Starts the current service and associates it with the specified provider.
- [Stop](stop.md): Stops the service associated with the specified provider.
- [initWith](initwith.md): Initializes the private data structures associated with this class.
