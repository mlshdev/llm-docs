> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1514781-ioobjectcopyclass](https://developer.apple.com/documentation/iokit/1514781-ioobjectcopyclass)

# IOObjectCopyClass(\_:) (Swift)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Return the class name of an IOKit object.

## Declaration

```swift
func IOObjectCopyClass(_ object: io_object_t) -> Unmanaged<CFString>!
```

## Parameters

- `object`: The IOKit object.

<a id="return_value"></a>

## Return Value

The resulting CFStringRef. This should be released by the caller. If a valid object is not passed in, then NULL is returned.

<a id="discussion"></a>

## Discussion

This function does the same thing as IOObjectGetClass, but returns the result as a CFStringRef.

## See Also

### Miscellaneous

- [IOBSDNameMatching(\_:\_:\_:)](1514486-iobsdnamematching.md): Create a matching dictionary that specifies an IOService match based on BSD device name.
- [IOConnectAddClient(\_:\_:)](1514609-ioconnectaddclient.md): Inform a connection of a second connection.
- [IOConnectAddRef(\_:)](1514739-ioconnectaddref.md): Adds a reference to the connect handle.
- [IOConnectGetService(\_:\_:)](1514438-ioconnectgetservice.md): Returns the IOService a connect handle was opened on.
- [IOConnectMapMemory(\_:\_:\_:\_:\_:\_:)](1514377-ioconnectmapmemory.md): Map hardware or shared memory into the caller's task.
- [IOConnectMapMemory64(\_:\_:\_:\_:\_:\_:)](1514862-ioconnectmapmemory64.md): Map hardware or shared memory into the caller's task.
- [IOConnectRelease(\_:)](1514511-ioconnectrelease.md): Remove a reference to the connect handle.
- [IOConnectSetCFProperties(\_:\_:)](1514713-ioconnectsetcfproperties.md): Set CF container based properties on a connection.
- [IOConnectSetCFProperty(\_:\_:\_:)](1514796-ioconnectsetcfproperty.md): Set a CF container based property on a connection.
- [IOConnectSetNotificationPort(\_:\_:\_:\_:)](1514541-ioconnectsetnotificationport.md): Set a port to receive family specific notifications.
- [IOConnectUnmapMemory(\_:\_:\_:\_:)](1514527-ioconnectunmapmemory.md): Remove a mapping made with IOConnectMapMemory.
- [IOConnectUnmapMemory64(\_:\_:\_:\_:)](1514760-ioconnectunmapmemory64.md): Remove a mapping made with IOConnectMapMemory64.
- [IOCreateReceivePort(\_:\_:)](1514698-iocreatereceiveport.md): Creates and returns a mach port suitable for receiving IOKit messages of the specified type.
- [IODispatchCalloutFromMessage(\_:\_:\_:)](1514775-iodispatchcalloutfrommessage.md): Dispatches callback notifications from a mach message.
- [IOIteratorIsValid(\_:)](1514556-ioiteratorisvalid.md): Checks an iterator is still valid.
- [IOIteratorNext(\_:)](1514741-ioiteratornext.md): Returns the next object in an iteration.
- [IOIteratorReset(\_:)](1514379-ioiteratorreset.md): Resets an iteration back to the beginning.
- [IOKitGetBusyState(\_:\_:)](1514460-iokitgetbusystate.md): Returns the busyState of all IOServices.
- [IOKitWaitQuiet(\_:\_:)](1514440-iokitwaitquiet.md): Wait for a all IOServices' busyState to be zero.
- [IOMasterPort(\_:\_:)](1514652-iomasterport.md): Returns the mach port used to initiate communication with IOKit.
- [IONotificationPortCreate(\_:)](1514480-ionotificationportcreate.md): Creates and returns a notification object for receiving IOKit notifications of new devices or state changes.
- [IONotificationPortDestroy(\_:)](1514751-ionotificationportdestroy.md): Destroys a notification object created with IONotificationPortCreate. Also destroys any mach_port's or CFRunLoopSources obatined from [IONotificationPortGetRunLoopSource(\_:)](1514599-ionotificationportgetrunloopsour.md) or [IONotificationPortGetMachPort(\_:)](1514875-ionotificationportgetmachport.md)
- [IONotificationPortGetMachPort(\_:)](1514875-ionotificationportgetmachport.md): Returns a mach_port to be used to listen for notifications.
- [IONotificationPortGetRunLoopSource(\_:)](1514599-ionotificationportgetrunloopsour.md): Returns a CFRunLoopSource to be used to listen for notifications.
- [IONotificationPortSetDispatchQueue(\_:\_:)](1514596-ionotificationportsetdispatchque.md): Sets a dispatch queue to be used to listen for notifications.
- [IOObjectConformsTo(\_:\_:)](1514505-ioobjectconformsto.md): Performs an OSDynamicCast operation on an IOKit object.
- [IOObjectCopyBundleIdentifierForClass(\_:)](1514375-ioobjectcopybundleidentifierforc.md): Return the bundle identifier of the given class.
- [IOObjectCopySuperclassForClass(\_:)](1514635-ioobjectcopysuperclassforclass.md): Return the superclass name of the given class.
- [IOObjectGetClass(\_:\_:)](1514756-ioobjectgetclass.md): Return the class name of an IOKit object.
- [IOObjectGetKernelRetainCount(\_:)](1514325-ioobjectgetkernelretaincount.md): Returns kernel retain count of an IOKit object.
- [IOObjectGetRetainCount(\_:)](1514824-ioobjectgetretaincount.md): Returns kernel retain count of an IOKit object. Identical to IOObjectGetKernelRetainCount() but available prior to Mac OS 10.6.
- [IOObjectGetUserRetainCount(\_:)](1514464-ioobjectgetuserretaincount.md): Returns the retain count for the current process of an IOKit object.
- [IOObjectIsEqualTo(\_:\_:)](1514563-ioobjectisequalto.md): Checks two object handles to see if they represent the same kernel object.
- [IOObjectRelease(\_:)](1514627-ioobjectrelease.md): Releases an object handle previously returned by IOKitLib.
- [IOObjectRetain(\_:)](1514769-ioobjectretain.md): Retains an object handle previously returned by IOKitLib.
- [IORegistryCreateIterator(\_:\_:\_:\_:)](1514238-ioregistrycreateiterator.md): Create an iterator rooted at the registry root.
- [IORegistryEntryCreateCFProperties(\_:\_:\_:\_:)](1514310-ioregistryentrycreatecfpropertie.md): Create a CF dictionary representation of a registry entry's property table.
- [IORegistryEntryCreateCFProperty(\_:\_:\_:\_:)](1514293-ioregistryentrycreatecfproperty.md): Create a CF representation of a registry entry's property.
- [IORegistryEntryCreateIterator(\_:\_:\_:\_:)](1514318-ioregistryentrycreateiterator.md): Create an iterator rooted at a given registry entry.
- [IORegistryEntryFromPath(\_:\_:)](1514802-ioregistryentryfrompath.md): Looks up a registry entry by path.
- [IORegistryEntryGetChildEntry(\_:\_:\_:)](1514496-ioregistryentrygetchildentry.md): Returns the first child of a registry entry in a plane.
- [IORegistryEntryGetChildIterator(\_:\_:\_:)](1514703-ioregistryentrygetchilditerator.md): Returns an iterator over a registry entry’s child entries in a plane.
- [IORegistryEntryGetLocationInPlane(\_:\_:\_:)](1514340-ioregistryentrygetlocationinplan.md): Returns a C-string location assigned to a registry entry, in a specified plane.
- [IORegistryEntryGetName(\_:\_:)](1514323-ioregistryentrygetname.md): Returns a C-string name assigned to a registry entry.
- [IORegistryEntryGetNameInPlane(\_:\_:\_:)](1514475-ioregistryentrygetnameinplane.md): Returns a C-string name assigned to a registry entry, in a specified plane.
- [IORegistryEntryGetParentEntry(\_:\_:\_:)](1514454-ioregistryentrygetparententry.md): Returns the first parent of a registry entry in a plane.
- [IORegistryEntryGetParentIterator(\_:\_:\_:)](1514366-ioregistryentrygetparentiterator.md): Returns an iterator over a registry entry’s parent entries in a plane.
- [IORegistryEntryGetPath(\_:\_:\_:)](1514229-ioregistryentrygetpath.md): Create a path for a registry entry.
- [IORegistryEntryGetRegistryEntryID(\_:\_:)](1514719-ioregistryentrygetregistryentryi.md): Returns an ID for the registry entry that is global to all tasks.
- [IORegistryEntryIDMatching(\_:)](1514880-ioregistryentryidmatching.md): Create a matching dictionary that specifies an IOService match based on a registry entry ID.
- [IORegistryEntryInPlane(\_:\_:)](1514668-ioregistryentryinplane.md): Determines if the registry entry is attached in a plane.
- [IORegistryEntrySearchCFProperty(\_:\_:\_:\_:\_:)](1514537-ioregistryentrysearchcfproperty.md): Create a CF representation of a registry entry's property.
- [IORegistryEntrySetCFProperties(\_:\_:)](1514414-ioregistryentrysetcfproperties.md): Set CF container based properties in a registry entry.
- [IORegistryEntrySetCFProperty(\_:\_:\_:)](1514882-ioregistryentrysetcfproperty.md): Set a CF container based property in a registry entry.
- [IORegistryGetRootEntry(\_:)](1514878-ioregistrygetrootentry.md): Return a handle to the registry root.
- [IORegistryIteratorEnterEntry(\_:)](1514822-ioregistryiteratorenterentry.md): Recurse into the current entry in the registry iteration.
- [IORegistryIteratorExitEntry(\_:)](1514334-ioregistryiteratorexitentry.md): Exits a level of recursion, restoring the current entry.
- [IOServiceAddInterestNotification(\_:\_:\_:\_:\_:\_:)](1514866-ioserviceaddinterestnotification.md): Register for notification of state changes in an IOService.
- [IOServiceAddMatchingNotification(\_:\_:\_:\_:\_:\_:)](1514362-ioserviceaddmatchingnotification.md): Look up registered IOService objects that match a matching dictionary, and install a notification request of new IOServices that match.
- [IOServiceClose(\_:)](1514646-ioserviceclose.md): Close a connection to an IOService and destroy the connect handle.
- [IOServiceGetBusyState(\_:\_:)](1514607-ioservicegetbusystate.md): Returns the busyState of an IOService.
- [IOServiceGetMatchingService(\_:\_:)](1514535-ioservicegetmatchingservice.md): Look up a registered IOService object that matches a matching dictionary.
- [IOServiceGetMatchingServices(\_:\_:\_:)](1514494-ioservicegetmatchingservices.md): Look up registered IOService objects that match a matching dictionary.
- [IOServiceMatching(\_:)](1514687-ioservicematching.md): Create a matching dictionary that specifies an IOService class match.
- [IOServiceMatchPropertyTable(\_:\_:\_:)](1514685-ioservicematchpropertytable.md): Match an IOService objects with matching dictionary.
- [IOServiceNameMatching(\_:)](1514416-ioservicenamematching.md): Create a matching dictionary that specifies an IOService name match.
- [IOServiceOpen(\_:\_:\_:\_:)](1514515-ioserviceopen.md): A request to create a connection to an IOService.
- [IOServiceRequestProbe(\_:\_:)](1514364-ioservicerequestprobe.md): A request to rescan a bus for device changes.
- [IOServiceWaitQuiet(\_:\_:)](1514573-ioservicewaitquiet.md): Wait for an IOService's busyState to be zero.

# IOObjectCopyClass (Objective-C)

**Framework:** IOKit  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

Return the class name of an IOKit object.

## Declaration

```objectivec
CFStringRef IOObjectCopyClass(io_object_t object);
```

## Parameters

- `object`: The IOKit object.

<a id="return_value"></a>

## Return Value

The resulting CFStringRef. This should be released by the caller. If a valid object is not passed in, then NULL is returned.

<a id="discussion"></a>

## Discussion

This function does the same thing as IOObjectGetClass, but returns the result as a CFStringRef.

## See Also

### Miscellaneous

- [IOBSDNameMatching](1514486-iobsdnamematching.md): Create a matching dictionary that specifies an IOService match based on BSD device name.
- [IOConnectAddClient](1514609-ioconnectaddclient.md): Inform a connection of a second connection.
- [IOConnectAddRef](1514739-ioconnectaddref.md): Adds a reference to the connect handle.
- [IOConnectGetService](1514438-ioconnectgetservice.md): Returns the IOService a connect handle was opened on.
- [IOConnectMapMemory](1514377-ioconnectmapmemory.md): Map hardware or shared memory into the caller's task.
- [IOConnectMapMemory64](1514862-ioconnectmapmemory64.md): Map hardware or shared memory into the caller's task.
- [IOConnectRelease](1514511-ioconnectrelease.md): Remove a reference to the connect handle.
- [IOConnectSetCFProperties](1514713-ioconnectsetcfproperties.md): Set CF container based properties on a connection.
- [IOConnectSetCFProperty](1514796-ioconnectsetcfproperty.md): Set a CF container based property on a connection.
- [IOConnectSetNotificationPort](1514541-ioconnectsetnotificationport.md): Set a port to receive family specific notifications.
- [IOConnectUnmapMemory](1514527-ioconnectunmapmemory.md): Remove a mapping made with IOConnectMapMemory.
- [IOConnectUnmapMemory64](1514760-ioconnectunmapmemory64.md): Remove a mapping made with IOConnectMapMemory64.
- [IOCreateReceivePort](1514698-iocreatereceiveport.md): Creates and returns a mach port suitable for receiving IOKit messages of the specified type.
- [IODispatchCalloutFromMessage](1514775-iodispatchcalloutfrommessage.md): Dispatches callback notifications from a mach message.
- [IOIteratorIsValid](1514556-ioiteratorisvalid.md): Checks an iterator is still valid.
- [IOIteratorNext](1514741-ioiteratornext.md): Returns the next object in an iteration.
- [IOIteratorReset](1514379-ioiteratorreset.md): Resets an iteration back to the beginning.
- [IOKitGetBusyState](1514460-iokitgetbusystate.md): Returns the busyState of all IOServices.
- [IOKitWaitQuiet](1514440-iokitwaitquiet.md): Wait for a all IOServices' busyState to be zero.
- [IOMasterPort](1514652-iomasterport.md): Returns the mach port used to initiate communication with IOKit.
- [IONotificationPortCreate](1514480-ionotificationportcreate.md): Creates and returns a notification object for receiving IOKit notifications of new devices or state changes.
- [IONotificationPortDestroy](1514751-ionotificationportdestroy.md): Destroys a notification object created with IONotificationPortCreate. Also destroys any mach_port's or CFRunLoopSources obatined from [IONotificationPortGetRunLoopSource](1514599-ionotificationportgetrunloopsour.md) or [IONotificationPortGetMachPort](1514875-ionotificationportgetmachport.md)
- [IONotificationPortGetMachPort](1514875-ionotificationportgetmachport.md): Returns a mach_port to be used to listen for notifications.
- [IONotificationPortGetRunLoopSource](1514599-ionotificationportgetrunloopsour.md): Returns a CFRunLoopSource to be used to listen for notifications.
- [IONotificationPortSetDispatchQueue](1514596-ionotificationportsetdispatchque.md): Sets a dispatch queue to be used to listen for notifications.
- [IOObjectConformsTo](1514505-ioobjectconformsto.md): Performs an OSDynamicCast operation on an IOKit object.
- [IOObjectCopyBundleIdentifierForClass](1514375-ioobjectcopybundleidentifierforc.md): Return the bundle identifier of the given class.
- [IOObjectCopySuperclassForClass](1514635-ioobjectcopysuperclassforclass.md): Return the superclass name of the given class.
- [IOObjectGetClass](1514756-ioobjectgetclass.md): Return the class name of an IOKit object.
- [IOObjectGetKernelRetainCount](1514325-ioobjectgetkernelretaincount.md): Returns kernel retain count of an IOKit object.
- [IOObjectGetRetainCount](1514824-ioobjectgetretaincount.md): Returns kernel retain count of an IOKit object. Identical to IOObjectGetKernelRetainCount() but available prior to Mac OS 10.6.
- [IOObjectGetUserRetainCount](1514464-ioobjectgetuserretaincount.md): Returns the retain count for the current process of an IOKit object.
- [IOObjectIsEqualTo](1514563-ioobjectisequalto.md): Checks two object handles to see if they represent the same kernel object.
- [IOObjectRelease](1514627-ioobjectrelease.md): Releases an object handle previously returned by IOKitLib.
- [IOObjectRetain](1514769-ioobjectretain.md): Retains an object handle previously returned by IOKitLib.
- [IORegistryCreateIterator](1514238-ioregistrycreateiterator.md): Create an iterator rooted at the registry root.
- [IORegistryEntryCreateCFProperties](1514310-ioregistryentrycreatecfpropertie.md): Create a CF dictionary representation of a registry entry's property table.
- [IORegistryEntryCreateCFProperty](1514293-ioregistryentrycreatecfproperty.md): Create a CF representation of a registry entry's property.
- [IORegistryEntryCreateIterator](1514318-ioregistryentrycreateiterator.md): Create an iterator rooted at a given registry entry.
- [IORegistryEntryFromPath](1514802-ioregistryentryfrompath.md): Looks up a registry entry by path.
- [IORegistryEntryGetChildEntry](1514496-ioregistryentrygetchildentry.md): Returns the first child of a registry entry in a plane.
- [IORegistryEntryGetChildIterator](1514703-ioregistryentrygetchilditerator.md): Returns an iterator over a registry entry’s child entries in a plane.
- [IORegistryEntryGetLocationInPlane](1514340-ioregistryentrygetlocationinplan.md): Returns a C-string location assigned to a registry entry, in a specified plane.
- [IORegistryEntryGetName](1514323-ioregistryentrygetname.md): Returns a C-string name assigned to a registry entry.
- [IORegistryEntryGetNameInPlane](1514475-ioregistryentrygetnameinplane.md): Returns a C-string name assigned to a registry entry, in a specified plane.
- [IORegistryEntryGetParentEntry](1514454-ioregistryentrygetparententry.md): Returns the first parent of a registry entry in a plane.
- [IORegistryEntryGetParentIterator](1514366-ioregistryentrygetparentiterator.md): Returns an iterator over a registry entry’s parent entries in a plane.
- [IORegistryEntryGetPath](1514229-ioregistryentrygetpath.md): Create a path for a registry entry.
- [IORegistryEntryGetRegistryEntryID](1514719-ioregistryentrygetregistryentryi.md): Returns an ID for the registry entry that is global to all tasks.
- [IORegistryEntryIDMatching](1514880-ioregistryentryidmatching.md): Create a matching dictionary that specifies an IOService match based on a registry entry ID.
- [IORegistryEntryInPlane](1514668-ioregistryentryinplane.md): Determines if the registry entry is attached in a plane.
- [IORegistryEntrySearchCFProperty](1514537-ioregistryentrysearchcfproperty.md): Create a CF representation of a registry entry's property.
- [IORegistryEntrySetCFProperties](1514414-ioregistryentrysetcfproperties.md): Set CF container based properties in a registry entry.
- [IORegistryEntrySetCFProperty](1514882-ioregistryentrysetcfproperty.md): Set a CF container based property in a registry entry.
- [IORegistryGetRootEntry](1514878-ioregistrygetrootentry.md): Return a handle to the registry root.
- [IORegistryIteratorEnterEntry](1514822-ioregistryiteratorenterentry.md): Recurse into the current entry in the registry iteration.
- [IORegistryIteratorExitEntry](1514334-ioregistryiteratorexitentry.md): Exits a level of recursion, restoring the current entry.
- [IOServiceAddInterestNotification](1514866-ioserviceaddinterestnotification.md): Register for notification of state changes in an IOService.
- [IOServiceAddMatchingNotification](1514362-ioserviceaddmatchingnotification.md): Look up registered IOService objects that match a matching dictionary, and install a notification request of new IOServices that match.
- [IOServiceClose](1514646-ioserviceclose.md): Close a connection to an IOService and destroy the connect handle.
- [IOServiceGetBusyState](1514607-ioservicegetbusystate.md): Returns the busyState of an IOService.
- [IOServiceGetMatchingService](1514535-ioservicegetmatchingservice.md): Look up a registered IOService object that matches a matching dictionary.
- [IOServiceGetMatchingServices](1514494-ioservicegetmatchingservices.md): Look up registered IOService objects that match a matching dictionary.
- [IOServiceMatching](1514687-ioservicematching.md): Create a matching dictionary that specifies an IOService class match.
- [IOServiceMatchPropertyTable](1514685-ioservicematchpropertytable.md): Match an IOService objects with matching dictionary.
- [IOServiceNameMatching](1514416-ioservicenamematching.md): Create a matching dictionary that specifies an IOService name match.
- [IOServiceOpen](1514515-ioserviceopen.md): A request to create a connection to an IOService.
- [IOServiceRequestProbe](1514364-ioservicerequestprobe.md): A request to rescan a bus for device changes.
- [IOServiceWaitQuiet](1514573-ioservicewaitquiet.md): Wait for an IOService's busyState to be zero.
