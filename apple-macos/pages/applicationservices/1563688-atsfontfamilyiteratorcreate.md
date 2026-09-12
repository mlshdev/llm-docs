> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1563688-atsfontfamilyiteratorcreate](https://developer.apple.com/documentation/applicationservices/1563688-atsfontfamilyiteratorcreate)

# ATSFontFamilyIteratorCreate(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```swift
func ATSFontFamilyIteratorCreate(_ iContext: ATSFontContext, _ iFilter: UnsafePointer<ATSFontFilter>!, _ iRefCon: UnsafeMutableRawPointer!, _ iOptions: ATSOptionFlags, _ ioIterator: UnsafeMutablePointer<ATSFontFamilyIterator?>!) -> OSStatus
```

# ATSFontFamilyIteratorCreate (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```objectivec
OSStatus ATSFontFamilyIteratorCreate(ATSFontContext iContext, const ATSFontFilter *iFilter, void *iRefCon, ATSOptionFlags iOptions, ATSFontFamilyIterator *ioIterator);
```
