> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/userremovetargetproperties

# UserRemoveTargetProperties

**Interface language:** Objective-C

**Framework:** SCSIControllerDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Removes properties from a target.

## Declaration

```objectivec
virtual kern_return_t UserRemoveTargetProperties(SCSIDeviceIdentifier targetID, OSArray *properties);
```

## Parameters

- `targetID`: The ID of the target with the properties you want to remove.
- `properties`: An array containing keys of the properties to remove.

<a id="return-value"></a>

## Return Value

A value that indicates the result of setting the target’s specified properties. [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) indicates success. For error definitions, see [IOKit Constants](../../iokit/iokit_constants.md).

<a id="Discussion"></a>

## Discussion

Your driver extension calls this method to remove the specified properties from the target.

## See Also

### Managing Targets

- [UserInitializeTargetForID](userinitializetargetforid.md): Initializes a target device in response to a call from the framework.
- [UserCreateTargetForID](usercreatetargetforid.md): Creates the specified target.
- [UserDestroyTargetForID](userdestroytargetforid.md): Destroys the specified target.
- [UserTargetPresentForID](usertargetpresentforid.md): Checks if a specific target is present.
- [UserSetTargetProperties](usersettargetproperties.md): Sets properties on the target.
