> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/usersettargetproperties](https://developer.apple.com/documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/usersettargetproperties)

# UserSetTargetProperties

**Interface language:** Objective-C

**Framework:** SCSIControllerDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Sets properties on the target.

## Declaration

```objectivec
virtual kern_return_t UserSetTargetProperties(SCSIDeviceIdentifier targetID, OSDictionary *properties);
```

## Parameters

- `targetID`: The ID of the target with the properties you want to set.
- `properties`: A dictionary containing key-value pairs of properties to set.

<a id="return-value"></a>

## Return Value

A value that indicates the result of setting the target’s properties. [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) indicates success. For error definitions, see [IOKit Constants](../../iokit/iokit_constants.md).

<a id="Discussion"></a>

## Discussion

Your driver extension calls this method to set the specified target’s properties. The `properties` directory can contain the following keys:

- [kIOPropertySASAddressKey](https://developer.apple.com/documentation/kernel/kiopropertysasaddresskey)
- [kIOPropertyFibreChannelNodeWorldWideNameKey](https://developer.apple.com/documentation/kernel/kiopropertyfibrechannelnodeworldwidenamekey)
- [kIOPropertyFibreChannelPortWorldWideNameKey](https://developer.apple.com/documentation/kernel/kiopropertyfibrechannelportworldwidenamekey)
- [kIOPropertyFibreChannelAddressIdentifierKey](https://developer.apple.com/documentation/kernel/kiopropertyfibrechanneladdressidentifierkey)
- [kIOPropertyFibreChannelALPAKey](https://developer.apple.com/documentation/kernel/kiopropertyfibrechannelalpakey).

The value of each property should be a pointer to a valid [OSString](../../driverkit/osstring.md) object that represents the value for the property. The value must be of the proper type and size for the specified key.

## See Also

### Managing Targets

- [UserInitializeTargetForID](userinitializetargetforid.md): Initializes a target device in response to a call from the framework.
- [UserCreateTargetForID](usercreatetargetforid.md): Creates the specified target.
- [UserDestroyTargetForID](userdestroytargetforid.md): Destroys the specified target.
- [UserTargetPresentForID](usertargetpresentforid.md): Checks if a specific target is present.
- [UserRemoveTargetProperties](userremovetargetproperties.md): Removes properties from a target.
