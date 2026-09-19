> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/atsfontapplierfunction

# ATSFontApplierFunction (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```swift
typealias ATSFontApplierFunction = (ATSFontRef, UnsafeMutableRawPointer?) -> OSStatus
```

# ATSFontApplierFunction (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
typedef OSStatus (*ATSFontApplierFunction)(ATSFontRef iFont, void *iRefCon);
```
