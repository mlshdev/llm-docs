> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1563673-atscreatefontqueryrunloopsource

# ATSCreateFontQueryRunLoopSource(\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```swift
func ATSCreateFontQueryRunLoopSource(_ queryOrder: CFIndex, _ sourceOrder: CFIndex, _ callout: ATSFontQueryCallback!, _ context: UnsafePointer<ATSFontQuerySourceContext>!) -> Unmanaged<CFRunLoopSource>!
```

# ATSCreateFontQueryRunLoopSource (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```objectivec
CFRunLoopSourceRef ATSCreateFontQueryRunLoopSource(CFIndex queryOrder, CFIndex sourceOrder, ATSFontQueryCallback callout, const ATSFontQuerySourceContext *context);
```
