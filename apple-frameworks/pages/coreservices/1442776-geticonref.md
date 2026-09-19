> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1442776-geticonref

# GetIconRef(\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.15)

## Declaration

```swift
func GetIconRef(_ vRefNum: Int16, _ creator: OSType, _ iconType: OSType, _ theIconRef: UnsafeMutablePointer<IconRef?>!) -> OSErr
```

# GetIconRef (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.15)

## Declaration

```objectivec
OSErr GetIconRef(SInt16 vRefNum, OSType creator, OSType iconType, IconRef *theIconRef);
```
