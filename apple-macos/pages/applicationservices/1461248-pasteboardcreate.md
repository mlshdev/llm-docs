> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1461248-pasteboardcreate](https://developer.apple.com/documentation/applicationservices/1461248-pasteboardcreate)

# PasteboardCreate(\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```swift
func PasteboardCreate(_ inName: CFString?, _ outPasteboard: UnsafeMutablePointer<Pasteboard?>) -> OSStatus
```

# PasteboardCreate (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.3+

## Declaration

```objectivec
OSStatus PasteboardCreate(CFStringRef inName, PasteboardRef  _Nullable *outPasteboard);
```
