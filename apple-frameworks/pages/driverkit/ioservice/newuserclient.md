> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioservice/newuserclient](https://developer.apple.com/documentation/driverkit/ioservice/newuserclient)

# NewUserClient

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Requests the creation of a new user client for the service.

## Declaration

```objectivec
virtual kern_return_t NewUserClient(uint32_t type, IOUserClient **userClient);
```

## Parameters

- `type`: The type passed to [IOServiceOpen](../../iokit/1514515-ioserviceopen.md).
- `userClient`: A pointer to a variable for returning the new user client object. Upon the successful creation of the user client object, assign it to this variable.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../error-codes.md).

<a id="Discussion"></a>

## Discussion

Override this method if your service supports communication though an external user client. When an app calls [IOServiceOpen](../../iokit/1514515-ioserviceopen.md) to start a new service, the system calls this method on the service passed to that function. In your implementation, call the [Create](create.md) method to create a new [IOUserClient](../iouserclient.md) object for your service and return that object in the `userClient` parameter.

## See Also

### Creating a New Service

- [Create](create.md): Requests the creation of a new service object.
