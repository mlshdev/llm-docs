> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1563653-atsfontgetverticalmetrics

# ATSFontGetVerticalMetrics(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```swift
func ATSFontGetVerticalMetrics(_ iFont: ATSFontRef, _ iOptions: ATSOptionFlags, _ oMetrics: UnsafeMutablePointer<ATSFontMetrics>!) -> OSStatus
```

# ATSFontGetVerticalMetrics (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```objectivec
OSStatus ATSFontGetVerticalMetrics(ATSFontRef iFont, ATSOptionFlags iOptions, ATSFontMetrics *oMetrics);
```
