> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1462546-pasteboardcopypastelocation](https://developer.apple.com/documentation/applicationservices/1462546-pasteboardcopypastelocation)

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
