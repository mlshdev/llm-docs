> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1446795-registericonreffromfsref](https://developer.apple.com/documentation/coreservices/1446795-registericonreffromfsref)

# RegisterIconRefFromFSRef(\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.1+ (deprecated in 10.13)

## Declaration

```swift
func RegisterIconRefFromFSRef(_ creator: OSType, _ iconType: OSType, _ iconFile: UnsafePointer<FSRef>!, _ theIconRef: UnsafeMutablePointer<IconRef?>!) -> OSStatus
```

# RegisterIconRefFromFSRef (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.1+ (deprecated in 10.13)

## Declaration

```objectivec
OSStatus RegisterIconRefFromFSRef(OSType creator, OSType iconType, const FSRef *iconFile, IconRef *theIconRef);
```
