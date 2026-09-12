> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopensavepaneldelegate/panelselectiondidchange(_:)](https://developer.apple.com/documentation/appkit/nsopensavepaneldelegate/panelselectiondidchange(_:))

# panelSelectionDidChange(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the user changed the selection in the specified Save panel.

## Declaration

```swift
@MainActor optional func panelSelectionDidChange(_ sender: Any?)
```

## Parameters

- `sender`: The panel whose selection changed.

## See Also

### Responding to Panel Changes

- [panel(\_:didChangeToDirectoryURL:)](panel%28__didchangetodirectoryurl_%29.md): Tells the delegate that the user changed the selected directory to the directory located at the specified URL.
- [panel(\_:willExpand:)](panel%28__willexpand_%29.md): Tells the delegate that the Save panel is about to expand or collapse because the user clicked the disclosure triangle that displays or hides the file browser.

# panelSelectionDidChange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the user changed the selection in the specified Save panel.

## Declaration

```objectivec
- (void) panelSelectionDidChange:(id) sender;
```

## Parameters

- `sender`: The panel whose selection changed.

## See Also

### Responding to Panel Changes

- [panel:didChangeToDirectoryURL:](panel%28__didchangetodirectoryurl_%29.md): Tells the delegate that the user changed the selected directory to the directory located at the specified URL.
- [panel:willExpand:](panel%28__willexpand_%29.md): Tells the delegate that the Save panel is about to expand or collapse because the user clicked the disclosure triangle that displays or hides the file browser.
