> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopensavepaneldelegate/panel(_:didselect:)](https://developer.apple.com/documentation/appkit/nsopensavepaneldelegate/panel(_:didselect:))

# panel(\_:didSelect:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

`NSSavePanel`: Optional — Sent when the user changes the current type. `NSOpenPanel`: Not sent.

## Declaration

```swift
@MainActor optional func panel(_ sender: Any, didSelect type: UTType?)
```

# panel:didSelectType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

`NSSavePanel`: Optional — Sent when the user changes the current type. `NSOpenPanel`: Not sent.

## Declaration

```objectivec
- (void) panel:(id) sender didSelectType:(UTType *) type;
```
