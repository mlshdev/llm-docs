> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1462546-pasteboardcopypastelocation

# PasteboardCopyPasteLocation(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```swift
func PasteboardCopyPasteLocation(_ inPasteboard: Pasteboard, _ outPasteLocation: UnsafeMutablePointer<CFURL?>) -> OSStatus
```

# PasteboardCopyPasteLocation (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```objectivec
OSStatus PasteboardCopyPasteLocation(PasteboardRef inPasteboard, CFURLRef  _Nullable *outPasteLocation);
```
