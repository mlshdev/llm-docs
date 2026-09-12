> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1460005-pasteboardcopyitemflavors](https://developer.apple.com/documentation/applicationservices/1460005-pasteboardcopyitemflavors)

# PasteboardCopyItemFlavors(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```swift
func PasteboardCopyItemFlavors(_ inPasteboard: Pasteboard, _ inItem: PasteboardItemID, _ outFlavorTypes: UnsafeMutablePointer<CFArray?>) -> OSStatus
```

# PasteboardCopyItemFlavors (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```objectivec
OSStatus PasteboardCopyItemFlavors(PasteboardRef inPasteboard, PasteboardItemID inItem, CFArrayRef  _Nullable *outFlavorTypes);
```
