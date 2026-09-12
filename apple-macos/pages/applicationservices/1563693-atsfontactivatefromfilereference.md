> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1563693-atsfontactivatefromfilereference](https://developer.apple.com/documentation/applicationservices/1563693-atsfontactivatefromfilereference)

# ATSFontActivateFromFileReference(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```swift
func ATSFontActivateFromFileReference(_ iFile: UnsafePointer<FSRef>!, _ iContext: ATSFontContext, _ iFormat: ATSFontFormat, _ iRefCon: UnsafeMutableRawPointer!, _ iOptions: ATSOptionFlags, _ oContainer: UnsafeMutablePointer<ATSFontContainerRef>!) -> OSStatus
```

# ATSFontActivateFromFileReference (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```objectivec
OSStatus ATSFontActivateFromFileReference(const FSRef *iFile, ATSFontContext iContext, ATSFontFormat iFormat, void *iRefCon, ATSOptionFlags iOptions, ATSFontContainerRef *oContainer);
```
