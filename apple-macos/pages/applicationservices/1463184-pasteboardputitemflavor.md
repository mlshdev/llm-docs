> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1463184-pasteboardputitemflavor](https://developer.apple.com/documentation/applicationservices/1463184-pasteboardputitemflavor)

# PasteboardPutItemFlavor(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```swift
func PasteboardPutItemFlavor(_ inPasteboard: Pasteboard, _ inItem: PasteboardItemID, _ inFlavorType: CFString, _ inData: CFData?, _ inFlags: PasteboardFlavorFlags) -> OSStatus
```

# PasteboardPutItemFlavor (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```objectivec
OSStatus PasteboardPutItemFlavor(PasteboardRef inPasteboard, PasteboardItemID inItem, CFStringRef inFlavorType, CFDataRef inData, PasteboardFlavorFlags inFlags);
```
