> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/pasteboardpromisekeeperprocptr

# PasteboardPromiseKeeperProcPtr (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.3+

## Declaration

```swift
typealias PasteboardPromiseKeeperProcPtr = (Pasteboard, PasteboardItemID, CFString, UnsafeMutableRawPointer?) -> OSStatus
```

# PasteboardPromiseKeeperProcPtr (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.3+

## Declaration

```objectivec
typedef OSStatus (*PasteboardPromiseKeeperProcPtr)(PasteboardRef pasteboard, PasteboardItemID item, CFStringRef flavorType, void *context);
```
