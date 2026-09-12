> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1508336-oskextgetcurrentloadtag](https://developer.apple.com/documentation/kernel/1508336-oskextgetcurrentloadtag)

# OSKextGetCurrentLoadTag

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.6+

Returns the run-time load tag for the calling kext as an `OSKextLoadTag`.

## Declaration

```objectivec
OSKextLoadTag OSKextGetCurrentLoadTag(void);
```

<a id="return_value"></a>

## Return Value

The run-time load tag for the calling kext as an `OSKextLoadTag`.

<a id="discussion"></a>

## Discussion

The load tag identifies this loaded instance of the kext to the kernel and to kernel functions that operate on kexts.

## See Also

### kext

- [kext_alloc](1577598-kext_alloc.md)
- [kext_alloc_init](1577599-kext_alloc_init.md)
- [kext_free](1577600-kext_free.md)
- [kext_request](1588829-kext_request.md)
- [kextd_ping](1520989-kextd_ping.md)
- [OSKextCancelRequest](1508350-oskextcancelrequest.md): Cancels a pending user-space kext request without invoking the callback.
- [OSKextGetCurrentIdentifier](1508305-oskextgetcurrentidentifier.md): Returns the CFBundleIdentifier for the calling kext as a C string.
- [OSKextGetCurrentVersionString](1508326-oskextgetcurrentversionstring.md): Returns the CFBundleVersion for the calling kext as a C string.
- [OSKextGrabPgoData](1508333-oskextgrabpgodata.md)
- [OSKextLoadKextWithIdentifier](1508323-oskextloadkextwithidentifier.md): Request that a kext be loaded.
- [OSKextReleaseKextWithLoadTag](1508339-oskextreleasekextwithloadtag.md): Release a loaded kext based on its load tag.
- [OSKextRequestResource](1508294-oskextrequestresource.md): Requests data from a nonlocalized resource file in a kext bundle on disk.
- [OSKextResetPgoCounters](1646298-oskextresetpgocounters.md)
- [OSKextResetPgoCountersLock](1646299-oskextresetpgocounterslock.md)
- [OSKextResetPgoCountersUnlock](1646297-oskextresetpgocountersunlock.md)
- [OSKextRetainKextWithLoadTag](1508272-oskextretainkextwithloadtag.md): Retain a loaded kext based on its load tag, and enable autounload for that kext.
