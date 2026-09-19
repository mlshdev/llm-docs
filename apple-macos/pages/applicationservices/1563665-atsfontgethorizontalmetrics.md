> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1563665-atsfontgethorizontalmetrics

# ATSFontGetHorizontalMetrics(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```swift
func ATSFontGetHorizontalMetrics(_ iFont: ATSFontRef, _ iOptions: ATSOptionFlags, _ oMetrics: UnsafeMutablePointer<ATSFontMetrics>!) -> OSStatus
```

# ATSFontGetHorizontalMetrics (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```objectivec
OSStatus ATSFontGetHorizontalMetrics(ATSFontRef iFont, ATSOptionFlags iOptions, ATSFontMetrics *oMetrics);
```
