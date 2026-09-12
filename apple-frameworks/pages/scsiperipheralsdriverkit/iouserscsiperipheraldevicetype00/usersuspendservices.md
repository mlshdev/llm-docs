> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsiperipheralsdriverkit/iouserscsiperipheraldevicetype00/usersuspendservices](https://developer.apple.com/documentation/scsiperipheralsdriverkit/iouserscsiperipheraldevicetype00/usersuspendservices)

# UserSuspendServices

**Interface language:** Objective-C

**Framework:** SCSIPeripheralsDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 22.0+

Suspends services and allows the dext to communicate with the external drive.

## Declaration

```objectivec
virtual kern_return_t UserSuspendServices();
```

<a id="return-value"></a>

## Return Value

A value that indicates the result of the suspend request. [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) indicates success. For error definitions, see [IOKit Constants](../../iokit/iokit_constants.md).

<a id="Discussion"></a>

## Discussion

This method allows the dext to try to obtain a clear window to communicate with the external drive. Calling this method attempts to close any open references to the media. This informs file systems that someone is accessing the media. You can use this cleared window of communication for things like firmware updates without risking harm to the user’s data.

This call expects you to unmount existing volumes upstream of this drive before invoking this API. You can use the [Disk Arbitration](https://developer.apple.com/documentation/diskarbitration) APIs to programmatically unmount any such volumes.

To prevent power state transitions during this window, you can optionally acquire a power assertion before invoking this API.

## See Also

### Suspending and resuming services

- [UserResumeServices](userresumeservices.md): Resumes normal services after a suspension.
