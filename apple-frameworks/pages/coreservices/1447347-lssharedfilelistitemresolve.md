> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1447347-lssharedfilelistitemresolve

# LSSharedFileListItemResolve(\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.10)

## Declaration

```swift
func LSSharedFileListItemResolve(_ inItem: LSSharedFileListItem, _ inFlags: LSSharedFileListResolutionFlags, _ outURL: UnsafeMutablePointer<Unmanaged<CFURL>?>?, _ outRef: UnsafeMutablePointer<FSRef>?) -> OSStatus
```

# LSSharedFileListItemResolve (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.10)

## Declaration

```objectivec
OSStatus LSSharedFileListItemResolve(LSSharedFileListItemRef inItem, LSSharedFileListResolutionFlags inFlags, CFURLRef  _Nullable *outURL, FSRef *outRef);
```
