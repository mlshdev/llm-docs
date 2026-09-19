> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsopensavepaneldelegate/panel(_:displaynamefor:)

# panel(\_:displayNameFor:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

`NSSavePanel`: Optional — Sent when the content type popup is displayed and the save panel needs the display name for a type. If `nil` is returned, the save panel will display type’s `localizedDescription`. `NSOpenPanel`: Not sent.

## Declaration

```swift
@MainActor optional func panel(_ sender: Any, displayNameFor type: UTType) -> String?
```

# panel:displayNameForType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

`NSSavePanel`: Optional — Sent when the content type popup is displayed and the save panel needs the display name for a type. If `nil` is returned, the save panel will display type’s `localizedDescription`. `NSOpenPanel`: Not sent.

## Declaration

```objectivec
- (NSString *) panel:(id) sender displayNameForType:(UTType *) type;
```
