> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444939-readiconfromfsref](https://developer.apple.com/documentation/coreservices/1444939-readiconfromfsref)

# ReadIconFromFSRef(\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.1+ (deprecated in 10.13)

## Declaration

```swift
func ReadIconFromFSRef(_ ref: UnsafePointer<FSRef>!, _ iconFamily: UnsafeMutablePointer<IconFamilyHandle?>!) -> OSStatus
```

# ReadIconFromFSRef (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.1+ (deprecated in 10.13)

## Declaration

```objectivec
OSStatus ReadIconFromFSRef(const FSRef *ref, IconFamilyHandle *iconFamily);
```
