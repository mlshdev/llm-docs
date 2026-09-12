> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1562904-kextmanagerunloadkextwithidentif](https://developer.apple.com/documentation/iokit/1562904-kextmanagerunloadkextwithidentif)

# KextManagerUnloadKextWithIdentifier

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.7+

Request the kernel to unload a kext with a given bundle identifier.

## Declaration

```objectivec
OSReturn KextManagerUnloadKextWithIdentifier(CFStringRef kextIdentifier);
```

## Parameters

- `kextIdentifier`: The bundle identifier of the kext to unload.

<a id="return_value"></a>

## Return Value

`kOSReturnSuccess` if the kext is found and successfully unloaded, otherwise returns on error. See `/usr/include/libkern/OSKextLib.h` for error codes.

<a id="discussion"></a>

## Discussion

The calling process must have an effective user id of 0 (superuser).

## See Also

### Miscellaneous

- [KextManagerCopyLoadedKextInfo](1562908-kextmanagercopyloadedkextinfo.md): Returns information about loaded kexts in a dictionary.
- [KextManagerCreateURLForBundleIdentifier](1562905-kextmanagercreateurlforbundleide.md): Create a URL locating a kext with a given bundle identifier.
- [KextManagerLoadKextWithIdentifier](1562907-kextmanagerloadkextwithidentifie.md): Request the kext loading system to load a kext with a given bundle identifier.
- [KextManagerLoadKextWithURL](1562906-kextmanagerloadkextwithurl.md): Request the kext loading system to load a kext with a given URL.
