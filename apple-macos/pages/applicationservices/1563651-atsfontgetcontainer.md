> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1563651-atsfontgetcontainer

# ATSFontGetContainer(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```swift
func ATSFontGetContainer(_ iFont: ATSFontRef, _ iOptions: ATSOptionFlags, _ oContainer: UnsafeMutablePointer<ATSFontContainerRef>!) -> OSStatus
```

# ATSFontGetContainer (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```objectivec
OSStatus ATSFontGetContainer(ATSFontRef iFont, ATSOptionFlags iOptions, ATSFontContainerRef *oContainer);
```
