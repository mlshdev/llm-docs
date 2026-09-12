> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/userdestroytargetforid](https://developer.apple.com/documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/userdestroytargetforid)

# UserDestroyTargetForID

**Interface language:** Objective-C

**Framework:** SCSIControllerDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Destroys the specified target.

## Declaration

```objectivec
virtual kern_return_t UserDestroyTargetForID(SCSITargetIdentifier targetID);
```

## Parameters

- `targetID`: The ID of the target to destroy.

<a id="return-value"></a>

## Return Value

A value that indicates the result of target removal. [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) indicates success. For error definitions, see [IOKit Constants](../../iokit/iokit_constants.md).

<a id="Discussion"></a>

## Discussion

Your driver extension calls this method to remove the target with the specified `targetID`.

## See Also

### Managing Targets

- [UserInitializeTargetForID](userinitializetargetforid.md): Initializes a target device in response to a call from the framework.
- [UserCreateTargetForID](usercreatetargetforid.md): Creates the specified target.
- [UserTargetPresentForID](usertargetpresentforid.md): Checks if a specific target is present.
- [UserSetTargetProperties](usersettargetproperties.md): Sets properties on the target.
- [UserRemoveTargetProperties](userremovetargetproperties.md): Removes properties from a target.
