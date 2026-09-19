> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1449882-lssharedfilelistitemcopyresolved

# LSSharedFileListItemCopyResolvedURL(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.10+ (deprecated in 10.11)

## Declaration

```swift
func LSSharedFileListItemCopyResolvedURL(_ inItem: LSSharedFileListItem, _ inFlags: LSSharedFileListResolutionFlags, _ outError: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> Unmanaged<CFURL>?
```

# LSSharedFileListItemCopyResolvedURL (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.10+ (deprecated in 10.11)

## Declaration

```objectivec
CFURLRef LSSharedFileListItemCopyResolvedURL(LSSharedFileListItemRef inItem, LSSharedFileListResolutionFlags inFlags, CFErrorRef  _Nullable *outError);
```
