> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1463604-pasteboardsetpromisekeeper](https://developer.apple.com/documentation/applicationservices/1463604-pasteboardsetpromisekeeper)

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
