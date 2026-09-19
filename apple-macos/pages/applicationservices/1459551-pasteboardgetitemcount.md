> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1459551-pasteboardgetitemcount

# PasteboardGetItemCount(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```swift
func PasteboardGetItemCount(_ inPasteboard: Pasteboard, _ outItemCount: UnsafeMutablePointer<Int>) -> OSStatus
```

# PasteboardGetItemCount (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```objectivec
OSStatus PasteboardGetItemCount(PasteboardRef inPasteboard, ItemCount *outItemCount);
```
