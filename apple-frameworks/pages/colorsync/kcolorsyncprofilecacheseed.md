> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/kcolorsyncprofilecacheseed](https://developer.apple.com/documentation/colorsync/kcolorsyncprofilecacheseed)

# kColorSyncProfileCacheSeed (Swift)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The current profile-cache seed (uint32_t), sent with [kColorSyncProfileRepositoryChangeNotification](kcolorsyncprofilerepositorychangenotification.md).

## Declaration

```swift
var kColorSyncProfileCacheSeed: Unmanaged<CFString>!
```

## See Also

### Tracking changes and cache

- [kColorSyncProfileRepositoryChangeNotification](kcolorsyncprofilerepositorychangenotification.md): A notification that ColorSync posts when the profile repository changes.
- [kColorSyncWaitForCacheReply](kcolorsyncwaitforcachereply.md): An iteration option that waits for the profile cache to finish updating before returning.

# kColorSyncProfileCacheSeed (Objective-C)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The current profile-cache seed (uint32_t), sent with [kColorSyncProfileRepositoryChangeNotification](kcolorsyncprofilerepositorychangenotification.md).

## Declaration

```objectivec
extern CFStringRef kColorSyncProfileCacheSeed;
```

## See Also

### Tracking changes and cache

- [kColorSyncProfileRepositoryChangeNotification](kcolorsyncprofilerepositorychangenotification.md): A notification that ColorSync posts when the profile repository changes.
- [kColorSyncWaitForCacheReply](kcolorsyncwaitforcachereply.md): An iteration option that waits for the profile cache to finish updating before returning.
