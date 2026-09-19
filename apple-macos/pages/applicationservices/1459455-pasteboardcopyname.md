> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1459455-pasteboardcopyname

# PasteboardCopyName(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```swift
func PasteboardCopyName(_ inPasteboard: Pasteboard, _ outName: UnsafeMutablePointer<CFString?>) -> OSStatus
```

# PasteboardCopyName (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.4+

## Declaration

```objectivec
OSStatus PasteboardCopyName(PasteboardRef inPasteboard, CFStringRef  _Nullable *outName);
```
