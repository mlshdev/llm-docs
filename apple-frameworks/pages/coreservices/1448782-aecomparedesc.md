> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1448782-aecomparedesc

# AECompareDesc(\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.8+

## Declaration

```swift
func AECompareDesc(_ desc1: UnsafePointer<AEDesc>!, _ desc2: UnsafePointer<AEDesc>!, _ resultP: UnsafeMutablePointer<DarwinBoolean>!) -> OSStatus
```

# AECompareDesc (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.8+

## Declaration

```objectivec
OSStatus AECompareDesc(const AEDesc *desc1, const AEDesc *desc2, Boolean *resultP);
```
