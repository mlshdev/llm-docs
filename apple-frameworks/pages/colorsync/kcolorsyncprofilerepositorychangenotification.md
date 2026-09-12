> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/kcolorsyncprofilerepositorychangenotification](https://developer.apple.com/documentation/colorsync/kcolorsyncprofilerepositorychangenotification)

# kColorSyncProfileRepositoryChangeNotification (Swift)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

A notification that ColorSync posts when the profile repository changes.

## Declaration

```swift
var kColorSyncProfileRepositoryChangeNotification: Unmanaged<CFString>!
```

## See Also

### Tracking changes and cache

- [kColorSyncProfileCacheSeed](kcolorsyncprofilecacheseed.md): The current profile-cache seed (uint32_t), sent with [kColorSyncProfileRepositoryChangeNotification](kcolorsyncprofilerepositorychangenotification.md).
- [kColorSyncWaitForCacheReply](kcolorsyncwaitforcachereply.md): An iteration option that waits for the profile cache to finish updating before returning.

# kColorSyncProfileRepositoryChangeNotification (Objective-C)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

A notification that ColorSync posts when the profile repository changes.

## Declaration

```objectivec
extern CFStringRef kColorSyncProfileRepositoryChangeNotification;
```

## See Also

### Tracking changes and cache

- [kColorSyncProfileCacheSeed](kcolorsyncprofilecacheseed.md): The current profile-cache seed (uint32_t), sent with [kColorSyncProfileRepositoryChangeNotification](kcolorsyncprofilerepositorychangenotification.md).
- [kColorSyncWaitForCacheReply](kcolorsyncwaitforcachereply.md): An iteration option that waits for the profile cache to finish updating before returning.
