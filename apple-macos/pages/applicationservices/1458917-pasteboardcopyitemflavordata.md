> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1458917-pasteboardcopyitemflavordata

# PasteboardCopyItemFlavorData(\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```swift
func PasteboardCopyItemFlavorData(_ inPasteboard: Pasteboard, _ inItem: PasteboardItemID, _ inFlavorType: CFString, _ outData: UnsafeMutablePointer<CFData?>) -> OSStatus
```

# PasteboardCopyItemFlavorData (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```objectivec
OSStatus PasteboardCopyItemFlavorData(PasteboardRef inPasteboard, PasteboardItemID inItem, CFStringRef inFlavorType, CFDataRef  _Nullable *outData);
```
