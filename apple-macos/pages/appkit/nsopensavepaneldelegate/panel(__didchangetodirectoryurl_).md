> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopensavepaneldelegate/panel(_:didchangetodirectoryurl:)](https://developer.apple.com/documentation/appkit/nsopensavepaneldelegate/panel(_:didchangetodirectoryurl:))

# panel(\_:didChangeToDirectoryURL:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Tells the delegate that the user changed the selected directory to the directory located at the specified URL.

## Declaration

```swift
@MainActor optional func panel(_ sender: Any, didChangeToDirectoryURL url: URL?)
```

## Parameters

- `sender`: The panel whose directory changed.
- `url`: The URL of the new directory, or `nil` if it can’t be represented by an [NSURL](https://developer.apple.com/documentation/foundation/nsurl) object.

## See Also

### Responding to Panel Changes

- [panelSelectionDidChange(\_:)](panelselectiondidchange%28__%29.md): Tells the delegate that the user changed the selection in the specified Save panel.
- [panel(\_:willExpand:)](panel%28__willexpand_%29.md): Tells the delegate that the Save panel is about to expand or collapse because the user clicked the disclosure triangle that displays or hides the file browser.

# panel:didChangeToDirectoryURL: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Tells the delegate that the user changed the selected directory to the directory located at the specified URL.

## Declaration

```objectivec
- (void) panel:(id) sender didChangeToDirectoryURL:(NSURL *) url;
```

## Parameters

- `sender`: The panel whose directory changed.
- `url`: The URL of the new directory, or `nil` if it can’t be represented by an [NSURL](https://developer.apple.com/documentation/foundation/nsurl) object.

## See Also

### Responding to Panel Changes

- [panelSelectionDidChange:](panelselectiondidchange%28__%29.md): Tells the delegate that the user changed the selection in the specified Save panel.
- [panel:willExpand:](panel%28__willexpand_%29.md): Tells the delegate that the Save panel is about to expand or collapse because the user clicked the disclosure triangle that displays or hides the file browser.
