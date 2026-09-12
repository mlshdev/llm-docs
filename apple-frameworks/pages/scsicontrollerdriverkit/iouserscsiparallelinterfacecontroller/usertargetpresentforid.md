> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/usertargetpresentforid](https://developer.apple.com/documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/usertargetpresentforid)

# UserTargetPresentForID

**Interface language:** Objective-C

**Framework:** SCSIControllerDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Checks if a specific target is present.

## Declaration

```objectivec
virtual kern_return_t UserTargetPresentForID(SCSIDeviceIdentifier targetID, bool *result);
```

## Parameters

- `targetID`: The ID of the target to check.
- `result`: A pointer to a Boolean value that the framework sets to `true` if the target is present and `false` otherwise.

<a id="return-value"></a>

## Return Value

A value that indicates the result of checking for the target’s existence. [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) indicates success. For error definitions, see [IOKit Constants](../../iokit/iokit_constants.md).

<a id="Discussion"></a>

## Discussion

Your driver extension can call this method to determine if a target ID is actually present.

## See Also

### Managing Targets

- [UserInitializeTargetForID](userinitializetargetforid.md): Initializes a target device in response to a call from the framework.
- [UserCreateTargetForID](usercreatetargetforid.md): Creates the specified target.
- [UserDestroyTargetForID](userdestroytargetforid.md): Destroys the specified target.
- [UserSetTargetProperties](usersettargetproperties.md): Sets properties on the target.
- [UserRemoveTargetProperties](userremovetargetproperties.md): Removes properties from a target.
