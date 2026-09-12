> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/userinitializetargetforid](https://developer.apple.com/documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/userinitializetargetforid)

# UserInitializeTargetForID

**Interface language:** Objective-C

**Framework:** SCSIControllerDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Initializes a target device in response to a call from the framework.

## Declaration

```objectivec
virtual kern_return_t UserInitializeTargetForID(SCSITargetIdentifier targetID);
```

## Parameters

- `targetID`: The target to initialize.

<a id="return-value"></a>

## Return Value

A value that indicates the result of initialization. [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) indicates success. For error definitions, see [IOKit Constants](../../iokit/iokit_constants.md).

<a id="Discussion"></a>

## Discussion

The host bus adapter (HBA) can use this method to probe the target or do anything else necessary before IOKit registers the device object for matching.

## See Also

### Managing Targets

- [UserCreateTargetForID](usercreatetargetforid.md): Creates the specified target.
- [UserDestroyTargetForID](userdestroytargetforid.md): Destroys the specified target.
- [UserTargetPresentForID](usertargetpresentforid.md): Checks if a specific target is present.
- [UserSetTargetProperties](usersettargetproperties.md): Sets properties on the target.
- [UserRemoveTargetProperties](userremovetargetproperties.md): Removes properties from a target.
