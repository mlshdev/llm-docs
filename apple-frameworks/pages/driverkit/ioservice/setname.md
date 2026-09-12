> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioservice/setname](https://developer.apple.com/documentation/driverkit/ioservice/setname)

# SetName

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Sets the name of the service in the system’s registry.

## Declaration

```objectivec
virtual kern_return_t SetName(const IOServiceName name);
```

## Parameters

- `name`: The new name for the service. This method copies the string you provide.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../error-codes.md).

## See Also

### Registering the Service with IOKit

- [RegisterService](registerservice.md): Starts the registration process for the service and performs any additional matching.
- [GetRegistryEntryID](getregistryentryid.md): Returns the registry ID for the current service.
- [IOServiceName](../ioservicename.md): A string type for setting the name of the service in the system’s registry.
