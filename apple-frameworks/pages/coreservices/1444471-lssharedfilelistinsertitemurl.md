> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1444471-lssharedfilelistinsertitemurl

# LSSharedFileListInsertItemURL(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.11)

## Declaration

```swift
func LSSharedFileListInsertItemURL(_ inList: LSSharedFileList, _ insertAfterThisItem: LSSharedFileListItem, _ inDisplayName: CFString?, _ inIconRef: IconRef?, _ inURL: CFURL, _ inPropertiesToSet: CFDictionary?, _ inPropertiesToClear: CFArray?) -> LSSharedFileListItem?
```

# LSSharedFileListInsertItemURL (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.11)

## Declaration

```objectivec
LSSharedFileListItemRef LSSharedFileListInsertItemURL(LSSharedFileListRef inList, LSSharedFileListItemRef insertAfterThisItem, CFStringRef inDisplayName, IconRef inIconRef, CFURLRef inURL, CFDictionaryRef inPropertiesToSet, CFArrayRef inPropertiesToClear);
```
