> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioservice/getregistryentryid](https://developer.apple.com/documentation/driverkit/ioservice/getregistryentryid)

# GetRegistryEntryID

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Returns the registry ID for the current service.

## Declaration

```objectivec
virtual kern_return_t GetRegistryEntryID(uint64_t *registryEntryID);
```

## Parameters

- `registryEntryID`: A pointer to an integer that, on return, contains the registry ID for the service. It is a programmer error to specify `NULL` or an invalid pointer for this parameter.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../error-codes.md).

## See Also

### Registering the Service with IOKit

- [RegisterService](registerservice.md): Starts the registration process for the service and performs any additional matching.
- [SetName](setname.md): Sets the name of the service in the system’s registry.
- [IOServiceName](../ioservicename.md): A string type for setting the name of the service in the system’s registry.
