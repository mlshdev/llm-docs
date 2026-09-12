> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1523868-iopsnotificationcreaterunloopsou](https://developer.apple.com/documentation/iokit/1523868-iopsnotificationcreaterunloopsou)

# IOPSNotificationCreateRunLoopSource

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ · macOS 10.2+

Returns a CFRunLoopSourceRef that notifies the caller when power source information changes.

## Declaration

```objectivec
CFRunLoopSourceRef IOPSNotificationCreateRunLoopSource(IOPowerSourceCallbackType callback, void *context);
```

## Parameters

- `callback`: A function to be called whenever any power source is added, removed, or changes.
- `context`: Any user-defined pointer, passed to the IOPowerSource callback.

<a id="return_value"></a>

## Return Value

Returns NULL if an error was encountered, otherwise a CFRunLoopSource. Caller must release the CFRunLoopSource.

<a id="discussion"></a>

## Discussion

Returns a CFRunLoopSourceRef for scheduling with your CFRunLoop. If your project does not use a CFRunLoop, you can alternatively receive notifications via mach port, dispatch, or signal, via `notify.h` using the name [kIOPSTimeRemainingNotificationKey](kiopstimeremainingnotificationkey.md)

## See Also

### Power Source Descriptions

- [IOPSCopyExternalPowerAdapterDetails](1523866-iopscopyexternalpoweradapterdeta.md): Returns a CFDictionary that describes the attached (AC) external power adapter (if any external power adapter is attached.
- [IOPSCopyPowerSourcesInfo](1523839-iopscopypowersourcesinfo.md): Returns a blob of Power Source information in an opaque CFTypeRef.
- [IOPSCopyPowerSourcesList](1523856-iopscopypowersourceslist.md): Returns a CFArray of Power Source handles, each of type CFTypeRef.
- [IOPSGetPowerSourceDescription](1523867-iopsgetpowersourcedescription.md): Returns a CFDictionary with readable information about the specific power source.
- [IOPSGetProvidingPowerSourceType(CFTypeRef)](iopowersources_h/1810316-iopsgetprovidingpowersourcetype.md): Indicates the power source the computer is currently drawing from.
