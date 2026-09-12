> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1443251-geticonreffromiconfamilyptr](https://developer.apple.com/documentation/coreservices/1443251-geticonreffromiconfamilyptr)

# GetIconRefFromIconFamilyPtr(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.15)

## Declaration

```swift
func GetIconRefFromIconFamilyPtr(_ inIconFamilyPtr: UnsafePointer<IconFamilyResource>!, _ inSize: Size, _ outIconRef: UnsafeMutablePointer<IconRef?>!) -> OSStatus
```

# GetIconRefFromIconFamilyPtr (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.15)

## Declaration

```objectivec
OSStatus GetIconRefFromIconFamilyPtr(const IconFamilyResource *inIconFamilyPtr, Size inSize, IconRef *outIconRef);
```
