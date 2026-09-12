> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/usercreatetargetforid](https://developer.apple.com/documentation/scsicontrollerdriverkit/iouserscsiparallelinterfacecontroller/usercreatetargetforid)

# UserCreateTargetForID

**Interface language:** Objective-C

**Framework:** SCSIControllerDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit

Creates the specified target.

## Declaration

```objectivec
virtual kern_return_t UserCreateTargetForID(SCSIDeviceIdentifier targetID, OSDictionary *targetDict);
```

## Parameters

- `targetID`: The ID of the target to create.
- `targetDict`: An [OSDictionary](../../driverkit/osdictionary.md) containing all of the target properties.

<a id="return-value"></a>

## Return Value

A value that indicates the result of target creation. [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) indicates success. For error definitions, see [IOKit Constants](../../iokit/iokit_constants.md).

<a id="Discussion"></a>

## Discussion

Your driver extension class calls this method to create a new target for the `targetID`. The framework creates the new target before the call returns.

As part of the [UserCreateTargetForID](usercreatetargetforid.md) call, the kernel calls several APIs like [UserInitializeTargetForID](userinitializetargetforid.md) which run on the default dispatch queue of the dext. Synchronously calling [UserCreateTargetForID](usercreatetargetforid.md) from the default dispatch queue blocks the default dispatch queue until [UserCreateTargetForID](usercreatetargetforid.md) finishes. Subsequent calls from the kernel like [UserInitializeTargetForID](userinitializetargetforid.md) won’t have a chance to run on the default queue, leading to a deadlock.

You can avoid this problem by calling [UserCreateTargetForID](usercreatetargetforid.md) from an asynchronous handler function. Start by creating an async handler function for your custom dext class in its `iig` file, as shown below:

```objc
virtual void AsyncEventHandler ( OSAction *  action TARGET,                                 uint32_t    targetID ) = 0;

virtual void AsyncCreateTargetForID ( OSAction *  action,
                                    uint32_t    targetID )
                                    TYPE ( ExampleSCSIDext::AsyncEventHandler ) QUEUENAME ( AuxiliaryQueue );
```

This handler function can then call [UserCreateTargetForID](usercreatetargetforid.md):

```objc
void
IMPL ( MyCustomService, AsyncCreateTargetForID )
{
     kern_return_t ret;
     …
     ret = UserCreateTargetForID (targetID, NULL);
     …
}
```

Then you can call this handler in [UserStartController](userstartcontroller.md):

```objc
kern_return_t
IMPL ( MyCustomService, UserStartController )
{
    …
    ret = CreateActionAsyncCreateTargetForID ( sizeof ( void * ), &ivars->fAsyncEventHandler );
    assert ( kIOReturnSuccess == ret );

    AsyncEventHandler ( ivars->fAsyncEventHandler, targetID );
    …
}
```

This implementation ensures [UserStartController](userstartcontroller.md) calls the event handler asynchronously, which frees up the default dispatch queue for subsequent calls.

## See Also

### Managing Targets

- [UserInitializeTargetForID](userinitializetargetforid.md): Initializes a target device in response to a call from the framework.
- [UserDestroyTargetForID](userdestroytargetforid.md): Destroys the specified target.
- [UserTargetPresentForID](usertargetpresentforid.md): Checks if a specific target is present.
- [UserSetTargetProperties](usersettargetproperties.md): Sets properties on the target.
- [UserRemoveTargetProperties](userremovetargetproperties.md): Removes properties from a target.
