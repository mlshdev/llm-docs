> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiodriver/newuserclient](https://developer.apple.com/documentation/audiodriverkit/iouseraudiodriver/newuserclient)

# NewUserClient

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Requests the creation of a new user client for the service.

## Declaration

```objectivec
virtual kern_return_t NewUserClient(uint32_t in_type, IOUserClient **out_user_client);
```

## Parameters

- `in_type`: The type passed to [IOServiceOpen](../../iokit/1514515-ioserviceopen.md).
- `out_user_client`: A pointer to a variable for returning the new user client object. Upon the successful creation of the user client object, assign it to this variable.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

Override this method if your service supports communication though an external user client. When an app calls [IOServiceOpen](../../iokit/1514515-ioserviceopen.md) to start a new service, the system calls this method on the service passed to that function. In your implementation, call the [Create](../../driverkit/ioservice/create.md) method to create a new [IOUserClient](../../driverkit/iouserclient.md) object for your service and return that object in the `userClient` parameter.
