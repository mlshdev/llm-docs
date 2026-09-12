> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/blockstoragedevicedriverkit/iouserblockstoragedevice/free](https://developer.apple.com/documentation/blockstoragedevicedriverkit/iouserblockstoragedevice/free)

# free

**Interface language:** Objective-C

**Framework:** BlockStorageDeviceDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Performs any final cleanup for the service.

## Declaration

```objectivec
virtual void free();
```

<a id="Discussion"></a>

## Discussion

Use this method to perform tasks such as deallocating any allocated memory. The system calls this method at some point after it calls your service’s [Stop](stop.md) method.

Always call `super` at the end of your custom implementation.

## See Also

### Running the Service

- [init](init.md): Handles the basic initialization of the service.
- [Start](start.md): Starts the current service and associates it with the specified provider.
- [Stop](stop.md): Stops the service associated with the specified provider.
