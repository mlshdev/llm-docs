> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsiperipheralsdriverkit/iouserscsiperipheraldevicetype00/userresumeservices](https://developer.apple.com/documentation/scsiperipheralsdriverkit/iouserscsiperipheraldevicetype00/userresumeservices)

# UserResumeServices

**Interface language:** Objective-C

**Framework:** SCSIPeripheralsDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 22.0+

Resumes normal services after a suspension.

## Declaration

```objectivec
virtual kern_return_t UserResumeServices();
```

<a id="return-value"></a>

## Return Value

A value that indicates the result of the resume request. [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) indicates success. For error definitions, see [IOKit Constants](../../iokit/iokit_constants.md).

<a id="Discussion"></a>

## Discussion

Call this method when the dext finishes using its window of exclusivity from a previous [UserSuspendServices](usersuspendservices.md) call so file systems can continue communicating with the drive.

## See Also

### Suspending and resuming services

- [UserSuspendServices](usersuspendservices.md): Suspends services and allows the dext to communicate with the external drive.
