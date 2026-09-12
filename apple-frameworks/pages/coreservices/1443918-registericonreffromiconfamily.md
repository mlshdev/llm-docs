> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1443918-registericonreffromiconfamily](https://developer.apple.com/documentation/coreservices/1443918-registericonreffromiconfamily)

# RegisterIconRefFromIconFamily(\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.15)

## Declaration

```swift
func RegisterIconRefFromIconFamily(_ creator: OSType, _ iconType: OSType, _ iconFamily: IconFamilyHandle!, _ theIconRef: UnsafeMutablePointer<IconRef?>!) -> OSErr
```

# RegisterIconRefFromIconFamily (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.15)

## Declaration

```objectivec
OSErr RegisterIconRefFromIconFamily(OSType creator, OSType iconType, IconFamilyHandle iconFamily, IconRef *theIconRef);
```
