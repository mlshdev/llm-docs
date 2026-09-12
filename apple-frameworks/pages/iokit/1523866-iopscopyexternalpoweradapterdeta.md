> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1523866-iopscopyexternalpoweradapterdeta](https://developer.apple.com/documentation/iokit/1523866-iopscopyexternalpoweradapterdeta)

# IOPSCopyExternalPowerAdapterDetails

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ · macOS 10.6+

Returns a CFDictionary that describes the attached (AC) external power adapter (if any external power adapter is attached.

## Declaration

```objectivec
CFDictionaryRef IOPSCopyExternalPowerAdapterDetails(void);
```

<a id="return_value"></a>

## Return Value

Returns a CFDictionary on success. Caller must release the returned dictionary. If no adapter is attached, or if there's an error, returns NULL.

<a id="discussion"></a>

## Discussion

Use the kIOPSPowerAdapter... keys described in IOPSKeys.h to interpret the returned CFDictionary.

## See Also

### Power Source Descriptions

- [IOPSCopyPowerSourcesInfo](1523839-iopscopypowersourcesinfo.md): Returns a blob of Power Source information in an opaque CFTypeRef.
- [IOPSCopyPowerSourcesList](1523856-iopscopypowersourceslist.md): Returns a CFArray of Power Source handles, each of type CFTypeRef.
- [IOPSGetPowerSourceDescription](1523867-iopsgetpowersourcedescription.md): Returns a CFDictionary with readable information about the specific power source.
- [IOPSGetProvidingPowerSourceType(CFTypeRef)](iopowersources_h/1810316-iopsgetprovidingpowersourcetype.md): Indicates the power source the computer is currently drawing from.
- [IOPSNotificationCreateRunLoopSource](1523868-iopsnotificationcreaterunloopsou.md): Returns a CFRunLoopSourceRef that notifies the caller when power source information changes.
