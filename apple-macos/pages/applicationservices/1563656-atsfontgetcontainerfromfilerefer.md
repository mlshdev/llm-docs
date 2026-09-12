> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1563656-atsfontgetcontainerfromfilerefer](https://developer.apple.com/documentation/applicationservices/1563656-atsfontgetcontainerfromfilerefer)

# ATSFontGetContainerFromFileReference(\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```swift
func ATSFontGetContainerFromFileReference(_ iFile: UnsafePointer<FSRef>!, _ iContext: ATSFontContext, _ iOptions: ATSOptionFlags, _ oContainer: UnsafeMutablePointer<ATSFontContainerRef>!) -> OSStatus
```

# ATSFontGetContainerFromFileReference (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```objectivec
OSStatus ATSFontGetContainerFromFileReference(const FSRef *iFile, ATSFontContext iContext, ATSOptionFlags iOptions, ATSFontContainerRef *oContainer);
```
