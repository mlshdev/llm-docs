> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewirelibirmallocationinterface/1555776-setrefcon](https://developer.apple.com/documentation/iokit/iofirewirelibirmallocationinterface/1555776-setrefcon)

# SetRefCon

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Set a new refcon

## Declaration

```objectivec
void (*SetRefCon)(IOFireWireLibIRMAllocationRef self, void *refCon);
```

## Parameters

- `self`: The IRMAllocation interface to use.
- `refCon`: The new refcon value.

## See Also

### Miscellaneous

- [allocateIsochResources](1555936-allocateisochresources.md): Use this interface to allocate isochronous resources
- [areIsochResourcesAllocated](1555631-areisochresourcesallocated.md): Poll to see if IRM resources are still allocated
- [deallocateIsochResources](1556089-deallocateisochresources.md): Deallocate previously allocated resources
- [GetRefCon](1555605-getrefcon.md): Get the current refcon
- [NotificationIsOn](1556097-notificationison.md): Is notification on?
- [setReleaseIRMResourcesOnFree](1555923-setreleaseirmresourcesonfree.md): Set a new value for releaseIRMResourcesOnFree
- [TurnOffNotification](1555873-turnoffnotification.md): Force notification off.
- [TurnOnNotification](1555769-turnonnotification.md): Try to turn on notifications
