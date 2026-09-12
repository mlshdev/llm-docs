> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioworkgroup/create](https://developer.apple.com/documentation/driverkit/ioworkgroup/create)

# Create

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
static kern_return_t Create(OSString *name, IOUserClient *userClient, IOWorkGroup **workgroup);
```

## Parameters

- `name`: Name of the workgroup
- `userClient`: Userclient to create the workgroup in. The DriverKit runtime will retain the userclient, and will release it in Invalidate() or when the IOWorkGroup is freed.
- `workgroup`: Created IOWorkGroup with +1 retain count to be released by the caller.

<a id="return-value"></a>

## Return Value

kIOReturnSuccess on success. See IOReturn.h for error codes.

<a id="discussion"></a>

## Discussion

Create an IOWorkGroup object. This object is not functional until a workgroup port has been set.
