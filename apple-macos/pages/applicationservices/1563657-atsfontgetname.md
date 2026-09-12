> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1563657-atsfontgetname](https://developer.apple.com/documentation/applicationservices/1563657-atsfontgetname)

# ATSFontGetName(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```swift
func ATSFontGetName(_ iFont: ATSFontRef, _ iOptions: ATSOptionFlags, _ oName: UnsafeMutablePointer<Unmanaged<CFString>?>!) -> OSStatus
```

# ATSFontGetName (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```objectivec
OSStatus ATSFontGetName(ATSFontRef iFont, ATSOptionFlags iOptions, CFStringRef *oName);
```
