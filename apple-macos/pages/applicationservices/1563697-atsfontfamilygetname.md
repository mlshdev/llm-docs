> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1563697-atsfontfamilygetname](https://developer.apple.com/documentation/applicationservices/1563697-atsfontfamilygetname)

# ATSFontFamilyGetName(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```swift
func ATSFontFamilyGetName(_ iFamily: ATSFontFamilyRef, _ iOptions: ATSOptionFlags, _ oName: UnsafeMutablePointer<Unmanaged<CFString>?>!) -> OSStatus
```

# ATSFontFamilyGetName (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```objectivec
OSStatus ATSFontFamilyGetName(ATSFontFamilyRef iFamily, ATSOptionFlags iOptions, CFStringRef *oName);
```
