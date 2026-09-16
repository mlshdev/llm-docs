> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/keyboardshortcut/defaultaction

# defaultAction

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The standard keyboard shortcut for the default button, consisting of the Return (↩) key and no modifiers.

## Declaration

```swift
static let defaultAction: KeyboardShortcut
```

<a id="discussion"></a>

## Discussion

On macOS, the default button is designated with special coloration. If more than one control is assigned this shortcut, only the first one is emphasized.

## See Also

### Getting standard shortcuts

- [cancelAction](cancelaction.md): The standard keyboard shortcut for cancelling the in-progress action or dismissing a prompt, consisting of the Escape (⎋) key and no modifiers.
