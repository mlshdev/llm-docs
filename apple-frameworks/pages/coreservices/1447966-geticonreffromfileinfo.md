> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1447966-geticonreffromfileinfo](https://developer.apple.com/documentation/coreservices/1447966-geticonreffromfileinfo)

# GetIconRefFromFileInfo(\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.1+ (deprecated in 10.13)

## Declaration

```swift
func GetIconRefFromFileInfo(_ inRef: UnsafePointer<FSRef>!, _ inFileNameLength: Int, _ inFileName: UnsafePointer<UniChar>!, _ inWhichInfo: FSCatalogInfoBitmap, _ inCatalogInfo: UnsafePointer<FSCatalogInfo>!, _ inUsageFlags: IconServicesUsageFlags, _ outIconRef: UnsafeMutablePointer<IconRef?>!, _ outLabel: UnsafeMutablePointer<Int16>!) -> OSStatus
```

# GetIconRefFromFileInfo (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.1+ (deprecated in 10.13)

## Declaration

```objectivec
OSStatus GetIconRefFromFileInfo(const FSRef *inRef, UniCharCount inFileNameLength, const UniChar *inFileName, FSCatalogInfoBitmap inWhichInfo, const FSCatalogInfo *inCatalogInfo, IconServicesUsageFlags inUsageFlags, IconRef *outIconRef, SInt16 *outLabel);
```
