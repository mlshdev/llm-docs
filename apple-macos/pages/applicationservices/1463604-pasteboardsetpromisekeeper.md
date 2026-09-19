> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1463604-pasteboardsetpromisekeeper

# PasteboardSetPromiseKeeper(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```swift
func PasteboardSetPromiseKeeper(_ inPasteboard: Pasteboard, _ inPromiseKeeper: PasteboardPromiseKeeperProcPtr, _ inContext: UnsafeMutableRawPointer?) -> OSStatus
```

# PasteboardSetPromiseKeeper (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```objectivec
OSStatus PasteboardSetPromiseKeeper(PasteboardRef inPasteboard, PasteboardPromiseKeeperProcPtr inPromiseKeeper, void *inContext);
```
