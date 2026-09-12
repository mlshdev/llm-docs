> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1563678-atsfontactivatefrommemory](https://developer.apple.com/documentation/applicationservices/1563678-atsfontactivatefrommemory)

# ATSFontActivateFromMemory(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```swift
func ATSFontActivateFromMemory(_ iData: LogicalAddress!, _ iLength: Int, _ iContext: ATSFontContext, _ iFormat: ATSFontFormat, _ iReserved: UnsafeMutableRawPointer!, _ iOptions: ATSOptionFlags, _ oContainer: UnsafeMutablePointer<ATSFontContainerRef>!) -> OSStatus
```

# ATSFontActivateFromMemory (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1)

## Declaration

```objectivec
OSStatus ATSFontActivateFromMemory(LogicalAddress iData, ByteCount iLength, ATSFontContext iContext, ATSFontFormat iFormat, void *iReserved, ATSOptionFlags iOptions, ATSFontContainerRef *oContainer);
```
