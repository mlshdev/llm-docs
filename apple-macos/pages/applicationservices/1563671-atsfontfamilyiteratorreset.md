> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1563671-atsfontfamilyiteratorreset](https://developer.apple.com/documentation/applicationservices/1563671-atsfontfamilyiteratorreset)

# ATSFontFamilyIteratorReset(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```swift
func ATSFontFamilyIteratorReset(_ iContext: ATSFontContext, _ iFilter: UnsafePointer<ATSFontFilter>!, _ iRefCon: UnsafeMutableRawPointer!, _ iOptions: ATSOptionFlags, _ ioIterator: UnsafeMutablePointer<ATSFontFamilyIterator?>!) -> OSStatus
```

# ATSFontFamilyIteratorReset (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```objectivec
OSStatus ATSFontFamilyIteratorReset(ATSFontContext iContext, const ATSFontFilter *iFilter, void *iRefCon, ATSOptionFlags iOptions, ATSFontFamilyIterator *ioIterator);
```
