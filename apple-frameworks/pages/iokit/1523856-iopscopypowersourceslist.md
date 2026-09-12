> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1523856-iopscopypowersourceslist](https://developer.apple.com/documentation/iokit/1523856-iopscopypowersourceslist)

# IOPSCopyPowerSourcesList

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ · macOS 10.2+

Returns a CFArray of Power Source handles, each of type CFTypeRef.

## Declaration

```objectivec
CFArrayRef IOPSCopyPowerSourcesList(CFTypeRef blob);
```

## Parameters

- `blob`: Takes the CFTypeRef returned by IOPSCopyPowerSourcesInfo()

<a id="return_value"></a>

## Return Value

Returns NULL if errors were encountered, otherwise a CFArray of CFTypeRefs. Caller must CFRelease() the returned CFArrayRef.

<a id="discussion"></a>

## Discussion

The caller shouldn't directly access the CFTypeRefs, but should use IOPSGetPowerSourceDescription on each member of the CFArrayRef.

## See Also

### Power Source Descriptions

- [IOPSCopyExternalPowerAdapterDetails](1523866-iopscopyexternalpoweradapterdeta.md): Returns a CFDictionary that describes the attached (AC) external power adapter (if any external power adapter is attached.
- [IOPSCopyPowerSourcesInfo](1523839-iopscopypowersourcesinfo.md): Returns a blob of Power Source information in an opaque CFTypeRef.
- [IOPSGetPowerSourceDescription](1523867-iopsgetpowersourcedescription.md): Returns a CFDictionary with readable information about the specific power source.
- [IOPSGetProvidingPowerSourceType(CFTypeRef)](iopowersources_h/1810316-iopsgetprovidingpowersourcetype.md): Indicates the power source the computer is currently drawing from.
- [IOPSNotificationCreateRunLoopSource](1523868-iopsnotificationcreaterunloopsou.md): Returns a CFRunLoopSourceRef that notifies the caller when power source information changes.
