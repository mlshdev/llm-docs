> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1443926-lssharedfilelistcreate](https://developer.apple.com/documentation/coreservices/1443926-lssharedfilelistcreate)

# LSSharedFileListCreate(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.11)

## Declaration

```swift
func LSSharedFileListCreate(_ inAllocator: CFAllocator?, _ inListType: CFString, _ listOptions: CFTypeRef?) -> Unmanaged<LSSharedFileList>?
```

# LSSharedFileListCreate (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.11)

## Declaration

```objectivec
LSSharedFileListRef LSSharedFileListCreate(CFAllocatorRef inAllocator, CFStringRef inListType, CFTypeRef listOptions);
```
