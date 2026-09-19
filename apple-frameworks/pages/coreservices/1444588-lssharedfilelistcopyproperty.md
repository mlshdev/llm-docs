> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1444588-lssharedfilelistcopyproperty

# LSSharedFileListCopyProperty(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.11)

## Declaration

```swift
func LSSharedFileListCopyProperty(_ inList: LSSharedFileList, _ inPropertyName: CFString) -> Unmanaged<CFTypeRef>?
```

# LSSharedFileListCopyProperty (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.11)

## Declaration

```objectivec
CFTypeRef LSSharedFileListCopyProperty(LSSharedFileListRef inList, CFStringRef inPropertyName);
```
