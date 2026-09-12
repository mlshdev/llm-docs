> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1562907-kextmanagerloadkextwithidentifie](https://developer.apple.com/documentation/iokit/1562907-kextmanagerloadkextwithidentifie)

# KextManagerLoadKextWithIdentifier

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.6+

Request the kext loading system to load a kext with a given bundle identifier.

## Declaration

```objectivec
OSReturn KextManagerLoadKextWithIdentifier(CFStringRef kextIdentifier, CFArrayRef dependencyKextAndFolderURLs);
```

## Parameters

- `kextIdentifier`: The bundle identifier of the kext to look up and load.
- `dependencyKextAndFolderURLs`: An array of additional URLs, of individual kexts and of folders that may contain kexts.

<a id="return_value"></a>

## Return Value

`kOSReturnSuccess` if the kext is successfully loaded (or is already loaded), otherwise returns on error.

<a id="discussion"></a>

## Discussion

`kextIdentifier` is looked up in the system extensions folder and among any kexts from `dependencyKextAndFolderURLs`. Any non-kext URLs in `dependencyKextAndFolderURLs` are scanned at the top level for kexts and plugins of kexts.

Either the calling process must have an effective user id of 0 (superuser), or the kext being loaded and all its dependencies must reside in /System and have an OSBundleAllowUserLoad property of `true`.

## See Also

### Miscellaneous

- [KextManagerCopyLoadedKextInfo](1562908-kextmanagercopyloadedkextinfo.md): Returns information about loaded kexts in a dictionary.
- [KextManagerCreateURLForBundleIdentifier](1562905-kextmanagercreateurlforbundleide.md): Create a URL locating a kext with a given bundle identifier.
- [KextManagerLoadKextWithURL](1562906-kextmanagerloadkextwithurl.md): Request the kext loading system to load a kext with a given URL.
- [KextManagerUnloadKextWithIdentifier](1562904-kextmanagerunloadkextwithidentif.md): Request the kernel to unload a kext with a given bundle identifier.
