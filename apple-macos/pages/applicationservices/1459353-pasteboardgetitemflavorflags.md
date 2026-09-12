> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1459353-pasteboardgetitemflavorflags](https://developer.apple.com/documentation/applicationservices/1459353-pasteboardgetitemflavorflags)

# PasteboardGetItemFlavorFlags(\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```swift
func PasteboardGetItemFlavorFlags(_ inPasteboard: Pasteboard, _ inItem: PasteboardItemID, _ inFlavorType: CFString, _ outFlags: UnsafeMutablePointer<PasteboardFlavorFlags>) -> OSStatus
```

# PasteboardGetItemFlavorFlags (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```objectivec
OSStatus PasteboardGetItemFlavorFlags(PasteboardRef inPasteboard, PasteboardItemID inItem, CFStringRef inFlavorType, PasteboardFlavorFlags *outFlags);
```
