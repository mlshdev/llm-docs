> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1443918-registericonreffromiconfamily

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
