> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1448857-lssharedfilelistsetproperty

# LSSharedFileListSetProperty(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.11)

## Declaration

```swift
func LSSharedFileListSetProperty(_ inList: LSSharedFileList, _ inPropertyName: CFString, _ inPropertyData: CFTypeRef?) -> OSStatus
```

# LSSharedFileListSetProperty (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.11)

## Declaration

```objectivec
OSStatus LSSharedFileListSetProperty(LSSharedFileListRef inList, CFStringRef inPropertyName, CFTypeRef inPropertyData);
```
