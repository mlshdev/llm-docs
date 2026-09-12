> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopensavepaneldelegate/panel(_:willexpand:)](https://developer.apple.com/documentation/appkit/nsopensavepaneldelegate/panel(_:willexpand:))

# panel(\_:willExpand:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the Save panel is about to expand or collapse because the user clicked the disclosure triangle that displays or hides the file browser.

## Declaration

```swift
@MainActor optional func panel(_ sender: Any, willExpand expanding: Bool)
```

## Parameters

- `sender`: The panel that is about to expand or collapse.
- `expanding`: [true](https://developer.apple.com/documentation/swift/true) specifies that the panel is expanding; [false](https://developer.apple.com/documentation/swift/false) specifies that it is collapsing.

## See Also

### Responding to Panel Changes

- [panelSelectionDidChange(\_:)](panelselectiondidchange%28__%29.md): Tells the delegate that the user changed the selection in the specified Save panel.
- [panel(\_:didChangeToDirectoryURL:)](panel%28__didchangetodirectoryurl_%29.md): Tells the delegate that the user changed the selected directory to the directory located at the specified URL.

# panel:willExpand: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Tells the delegate that the Save panel is about to expand or collapse because the user clicked the disclosure triangle that displays or hides the file browser.

## Declaration

```objectivec
- (void) panel:(id) sender willExpand:(BOOL) expanding;
```

## Parameters

- `sender`: The panel that is about to expand or collapse.
- `expanding`: [true](https://developer.apple.com/documentation/swift/true) specifies that the panel is expanding; [false](https://developer.apple.com/documentation/swift/false) specifies that it is collapsing.

## See Also

### Responding to Panel Changes

- [panelSelectionDidChange:](panelselectiondidchange%28__%29.md): Tells the delegate that the user changed the selection in the specified Save panel.
- [panel:didChangeToDirectoryURL:](panel%28__didchangetodirectoryurl_%29.md): Tells the delegate that the user changed the selected directory to the directory located at the specified URL.
