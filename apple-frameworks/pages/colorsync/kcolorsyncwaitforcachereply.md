> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/colorsync/kcolorsyncwaitforcachereply

# kColorSyncWaitForCacheReply (Swift)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

An iteration option that waits for the profile cache to finish updating before returning.

## Declaration

```swift
var kColorSyncWaitForCacheReply: Unmanaged<CFString>!
```

## See Also

### Tracking changes and cache

- [kColorSyncProfileRepositoryChangeNotification](kcolorsyncprofilerepositorychangenotification.md): A notification that ColorSync posts when the profile repository changes.
- [kColorSyncProfileCacheSeed](kcolorsyncprofilecacheseed.md): The current profile-cache seed (uint32_t), sent with [kColorSyncProfileRepositoryChangeNotification](kcolorsyncprofilerepositorychangenotification.md).

# kColorSyncWaitForCacheReply (Objective-C)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** macOS 11.0+

An iteration option that waits for the profile cache to finish updating before returning.

## Declaration

```objectivec
extern CFStringRef kColorSyncWaitForCacheReply;
```

## See Also

### Tracking changes and cache

- [kColorSyncProfileRepositoryChangeNotification](kcolorsyncprofilerepositorychangenotification.md): A notification that ColorSync posts when the profile repository changes.
- [kColorSyncProfileCacheSeed](kcolorsyncprofilecacheseed.md): The current profile-cache seed (uint32_t), sent with [kColorSyncProfileRepositoryChangeNotification](kcolorsyncprofilerepositorychangenotification.md).
