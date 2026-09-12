> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohidsystem](https://developer.apple.com/documentation/kernel/iohidsystem)

# IOHIDSystem

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Class  
**Availability:** macOS 10.15.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
class IOHIDSystem : IOService
```

## Topics

### Instance Methods

- [animateWaitCursor](iohidsystem/1646093-animatewaitcursor.md): Deprecated.
- [attach](iohidsystem/1646018-attach.md): Deprecated.
- [changeCursor](iohidsystem/1646067-changecursor.md): Deprecated.
- [configureReport](iohidsystem/3516597-configurereport.md): Deprecated.
- [createFilteredParamPropertiesForService](iohidsystem/1646048-createfilteredparampropertiesfor.md): Deprecated.
- [createParameters](iohidsystem/1646064-createparameters.md): Deprecated.
- [createShmem](iohidsystem/1646043-createshmem.md): Deprecated.
- [createShmemGated](iohidsystem/1645992-createshmemgated.md): Deprecated.
- [detach](iohidsystem/1646097-detach.md): Deprecated.
- [disableContinuousCursor](iohidsystem/1646055-disablecontinuouscursor.md): Deprecated.
- [dispatchEvent](iohidsystem/1646005-dispatchevent.md): Deprecated.
- [doProcessNotifications](iohidsystem/1646070-doprocessnotifications.md): Deprecated.
- [enableContinuousCursor](iohidsystem/1646063-enablecontinuouscursor.md): Deprecated.
- [evClose](iohidsystem/1646002-evclose.md): Deprecated.
- [evCloseGated](iohidsystem/1646091-evclosegated.md): Deprecated.
- [evDispatch](iohidsystem/1646082-evdispatch.md): Deprecated.
- [evOpen](iohidsystem/1646020-evopen.md): Deprecated.
- [evOpenGated](iohidsystem/4191644-evopengated.md): Deprecated.
- [eventFlags](iohidsystem/1645998-eventflags.md): Deprecated.
- [extGetButtonEventNum](iohidsystem/1646071-extgetbuttoneventnum.md): Deprecated.
- [extGetButtonEventNumGated](iohidsystem/1645984-extgetbuttoneventnumgated.md): Deprecated.
- [extGetStateForSelector](iohidsystem/1646019-extgetstateforselector.md): Deprecated.
- [extGetUserHidActivityState](iohidsystem/1646084-extgetuserhidactivitystate.md): Deprecated.
- [extPostEvent](iohidsystem/1645983-extpostevent.md): Deprecated.
- [extPostEventGated](iohidsystem/1646046-extposteventgated.md): Deprecated.
- [extRegisterVirtualDisplay](iohidsystem/1646077-extregistervirtualdisplay.md): Deprecated.
- [extSetBounds](iohidsystem/1646069-extsetbounds.md): Deprecated.
- [extSetMouseLocation](iohidsystem/1646034-extsetmouselocation.md): Deprecated.
- [extSetMouseLocationGated](iohidsystem/1646062-extsetmouselocationgated.md): Deprecated.
- [extSetOnScreenBounds](iohidsystem/1646011-extsetonscreenbounds.md): Deprecated.
- [extSetStateForSelector](iohidsystem/1646049-extsetstateforselector.md): Deprecated.
- [extSetVirtualDisplayBounds](iohidsystem/1646022-extsetvirtualdisplaybounds.md): Deprecated.
- [extUnregisterVirtualDisplay](iohidsystem/1645980-extunregistervirtualdisplay.md): Deprecated.
- [free](iohidsystem/1646087-free.md): Deprecated.
- [genericNotificationHandler](iohidsystem/1646073-genericnotificationhandler.md): Deprecated.
- [getMetaClass](iohidsystem/1646079-getmetaclass.md): Deprecated.
- [getUserHidActivityStateGated](iohidsystem/1646059-getuserhidactivitystategated.md): Deprecated.
- [getWorkLoop](iohidsystem/1646076-getworkloop.md): Deprecated.
- [hidActivityChecker](iohidsystem/1646000-hidactivitychecker.md): Deprecated.
- [hideCursor](iohidsystem/1646061-hidecursor.md): Deprecated.
- [hideWaitCursor](iohidsystem/1646066-hidewaitcursor.md): Deprecated.
- [init](iohidsystem/1646024-init.md): Deprecated.
- [initShmem](iohidsystem/1646026-initshmem.md): Deprecated.
- [keyboardEvent](iohidsystem/1646037-keyboardevent.md): Deprecated.
- [keyboardEvent](iohidsystem/3516598-keyboardevent.md): Deprecated.
- [keyboardEventGated](iohidsystem/1646008-keyboardeventgated.md): Deprecated.
- [keyboardSpecialEvent](iohidsystem/1646031-keyboardspecialevent.md): Deprecated.
- [keyboardSpecialEvent](iohidsystem/3516599-keyboardspecialevent.md): Deprecated.
- [keyboardSpecialEventGated](iohidsystem/1646025-keyboardspecialeventgated.md): Deprecated.
- [message](iohidsystem/1646060-message.md): Deprecated.
- [moveCursor](iohidsystem/1646080-movecursor.md): Deprecated.
- [newUserClient](iohidsystem/1646033-newuserclient.md): Deprecated.
- [newUserClientGated](iohidsystem/1646053-newuserclientgated.md): Deprecated.
- [periodicEvents](iohidsystem/1645990-periodicevents.md): Deprecated.
- [pointToScreen](iohidsystem/1646078-pointtoscreen.md): Deprecated.
- [postEvent](iohidsystem/1645987-postevent.md): Deprecated.
- [probe](iohidsystem/1646042-probe.md): Deprecated.
- [registerEventQueue](iohidsystem/1646001-registereventqueue.md): Deprecated.
- [registerEventQueueGated](iohidsystem/1646083-registereventqueuegated.md): Deprecated.
- [registerEventSource](iohidsystem/1645995-registereventsource.md): Deprecated.
- [registerScreen](iohidsystem/1646095-registerscreen.md): Deprecated.
- [registerScreenGated](iohidsystem/1645981-registerscreengated.md): Deprecated.
- [reportUserHidActivityGated](iohidsystem/1646041-reportuserhidactivitygated.md): Deprecated.
- [resetCursor](iohidsystem/1646088-resetcursor.md): Deprecated.
- [scheduleNextPeriodicEvent](iohidsystem/1646003-schedulenextperiodicevent.md): Deprecated.
- [setBounds](iohidsystem/1646038-setbounds.md): Deprecated.
- [setContinuousCursorEnable](iohidsystem/1645996-setcontinuouscursorenable.md): Deprecated.
- [setContinuousCursorEnableGated](iohidsystem/1646032-setcontinuouscursorenablegated.md): Deprecated.
- [setCursorEnable](iohidsystem/1645993-setcursorenable.md): Deprecated.
- [setCursorEnableGated](iohidsystem/1646092-setcursorenablegated.md): Deprecated.
- [setCursorPosition](iohidsystem/1646010-setcursorposition.md): Deprecated.
- [setDisplayBoundsGated](iohidsystem/1646081-setdisplayboundsgated.md): Deprecated.
- [setEventsEnable](iohidsystem/1646051-seteventsenable.md): Deprecated.
- [setParamProperties](iohidsystem/1645982-setparamproperties.md): Deprecated.
- [setParamPropertiesPostGated](iohidsystem/1646023-setparampropertiespostgated.md): Deprecated.
- [setParamPropertiesPreGated](iohidsystem/1646096-setparampropertiespregated.md): Deprecated.
- [setProperties](iohidsystem/1645999-setproperties.md): Deprecated.
- [showCursor](iohidsystem/1646054-showcursor.md): Deprecated.
- [showWaitCursor](iohidsystem/1645977-showwaitcursor.md): Deprecated.
- [sleepDisplayTickle](iohidsystem/2544881-sleepdisplaytickle.md): Deprecated.
- [start](iohidsystem/1646007-start.md): Deprecated.
- [startCursor](iohidsystem/1646009-startcursor.md): Deprecated.
- [unregisterEventQueue](iohidsystem/1646068-unregistereventqueue.md): Deprecated.
- [unregisterEventQueueGated](iohidsystem/1646090-unregistereventqueuegated.md): Deprecated.
- [unregisterScreen](iohidsystem/1646028-unregisterscreen.md): Deprecated.
- [unregisterScreenGated](iohidsystem/1645997-unregisterscreengated.md): Deprecated.
- [updateEventFlags](iohidsystem/1646089-updateeventflags.md): Deprecated.
- [updateEventFlags](iohidsystem/3516600-updateeventflags.md): Deprecated.
- [updateEventFlagsGated](iohidsystem/1646056-updateeventflagsgated.md): Deprecated.
- [updateHidActivity](iohidsystem/1646052-updatehidactivity.md): Deprecated.
- [updateParamPropertiesGated](iohidsystem/1646094-updateparampropertiesgated.md): Deprecated.
- [updatePowerState](iohidsystem/2544880-updatepowerstate.md): Deprecated.
- [updateReport](iohidsystem/3516601-updatereport.md): Deprecated.
- [workspaceBounds](iohidsystem/1645979-workspacebounds.md): Deprecated.

### Type Methods

- [doCreateShmem](iohidsystem/1646004-docreateshmem.md): Deprecated.
- [doEvClose](iohidsystem/1646030-doevclose.md): Deprecated.
- [doExtGetButtonEventNum](iohidsystem/1645988-doextgetbuttoneventnum.md): Deprecated.
- [doExtGetStateForSelector](iohidsystem/1646036-doextgetstateforselector.md): Deprecated.
- [doExtPostEvent](iohidsystem/1646047-doextpostevent.md): Deprecated.
- [doExtSetMouseLocation](iohidsystem/1646050-doextsetmouselocation.md): Deprecated.
- [doExtSetStateForSelector](iohidsystem/1646075-doextsetstateforselector.md): Deprecated.
- [doKeyboardEvent](iohidsystem/1646040-dokeyboardevent.md): Deprecated.
- [doKeyboardSpecialEvent](iohidsystem/1646058-dokeyboardspecialevent.md): Deprecated.
- [doNewUserClient](iohidsystem/1646065-donewuserclient.md): Deprecated.
- [doProcessKeyboardEQ](iohidsystem/1646045-doprocesskeyboardeq.md): Deprecated.
- [doRegisterEventQueue](iohidsystem/1646035-doregistereventqueue.md): Deprecated.
- [doRegisterScreen](iohidsystem/1646017-doregisterscreen.md): Deprecated.
- [doSetContinuousCursorEnable](iohidsystem/1646039-dosetcontinuouscursorenable.md): Deprecated.
- [doSetCursorEnable](iohidsystem/1646012-dosetcursorenable.md): Deprecated.
- [doSetDisplayBounds](iohidsystem/1645991-dosetdisplaybounds.md): Deprecated.
- [doSetParamPropertiesPost](iohidsystem/1645978-dosetparampropertiespost.md): Deprecated.
- [doSetParamPropertiesPre](iohidsystem/1646044-dosetparampropertiespre.md): Deprecated.
- [doUnregisterEventQueue](iohidsystem/1646015-dounregistereventqueue.md): Deprecated.
- [doUnregisterScreen](iohidsystem/1646085-dounregisterscreen.md): Deprecated.
- [doUpdateEventFlags](iohidsystem/1646057-doupdateeventflags.md): Deprecated.
- [getUserHidActivityState](iohidsystem/1646006-getuserhidactivitystate.md): Deprecated.
- [handlePublishNotification](iohidsystem/1646074-handlepublishnotification.md): Deprecated.
- [handleTerminationNotification](iohidsystem/2921472-handleterminationnotification.md): Deprecated.
- [instance](iohidsystem/1645989-instance.md): Deprecated.
- [makeInt32ArrayParamProperty](iohidsystem/1646086-makeint32arrayparamproperty.md): Deprecated.
- [makeNumberParamProperty](iohidsystem/1646016-makenumberparamproperty.md): Deprecated.
- [powerStateHandler](iohidsystem/2544879-powerstatehandler.md): Deprecated.
- [processKeyboardEQ](iohidsystem/1645985-processkeyboardeq.md): Deprecated.
- [reportUserHidActivity](iohidsystem/1646027-reportuserhidactivity.md): Deprecated.

## Relationships

### Inherits From

- [IOService](ioservice.md)

## See Also

### IOKit

- [IOUSBDevice](iousbdevice.md): Deprecated. An input/output service object that represents a device on the USB bus.
- [IOUSBInterface](iousbinterface.md): Deprecated. An object that represents an interface of a device on the USB bus.
- [IOOFPathMatching](1575304-ioofpathmatching.md): Deprecated.
- [IOUSBHostInterface](iousbhostinterface.md): Deprecated.
- [IOUSBHostDevice](iousbhostdevice.md): Deprecated.
- [IOUSBHostPipe](iousbhostpipe.md): Deprecated.
- [IOUSBHostIOSource](iousbhostiosource.md): Deprecated.
- [IOUSBHostStream](iousbhoststream.md): Deprecated.
- [IOHIDEventDriver](iohideventdriver.md): Deprecated.
- [IOHIDEventService](iohideventservice.md): Deprecated. IOService represents an device or OS service in IOKit and DriverKit.
- [IOHIDInterface](iohidinterface.md): Deprecated. IOService represents an device or OS service in IOKit and DriverKit.
- [IOHIKeyboardMapper](iohikeyboardmapper.md): Deprecated.
- [IOHIKeyboard](iohikeyboard.md): Deprecated.
- [IOHIPointing](iohipointing.md): Deprecated.
- [IOHIDevice](iohidevice.md): Deprecated.
- [IOHIDElement](iohidelement.md): Deprecated.
- [IOHIDWorkLoop](iohidworkloop.md): Deprecated.
- [IOEthernetInterface](ioethernetinterface.md): Deprecated. The Ethernet interface object.
- [IOEthernetController](ioethernetcontroller.md): Deprecated. Abstract superclass for Ethernet controllers.
