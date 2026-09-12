> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1463412-pasteboardgetitemidentifier](https://developer.apple.com/documentation/applicationservices/1463412-pasteboardgetitemidentifier)

# PasteboardGetItemIdentifier(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```swift
func PasteboardGetItemIdentifier(_ inPasteboard: Pasteboard, _ inIndex: CFIndex, _ outItem: UnsafeMutablePointer<PasteboardItemID?>) -> OSStatus
```

# PasteboardGetItemIdentifier (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```objectivec
OSStatus PasteboardGetItemIdentifier(PasteboardRef inPasteboard, CFIndex inIndex, PasteboardItemID  _Nullable *outItem);
```
