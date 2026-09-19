> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1449884-lssharedfilelistinsertitemfsref

# LSSharedFileListInsertItemFSRef(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.10)

## Declaration

```swift
func LSSharedFileListInsertItemFSRef(_ inList: LSSharedFileList, _ insertAfterThisItem: LSSharedFileListItem, _ inDisplayName: CFString?, _ inIconRef: IconRef?, _ inFSRef: UnsafePointer<FSRef>, _ inPropertiesToSet: CFDictionary?, _ inPropertiesToClear: CFArray?) -> LSSharedFileListItem?
```

# LSSharedFileListInsertItemFSRef (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.10)

## Declaration

```objectivec
LSSharedFileListItemRef LSSharedFileListInsertItemFSRef(LSSharedFileListRef inList, LSSharedFileListItemRef insertAfterThisItem, CFStringRef inDisplayName, IconRef inIconRef, const FSRef *inFSRef, CFDictionaryRef inPropertiesToSet, CFArrayRef inPropertiesToClear);
```
