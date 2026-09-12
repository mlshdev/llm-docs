> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewpanel/updatecontroller()](https://developer.apple.com/documentation/quicklookui/qlpreviewpanel/updatecontroller())

# updateController() (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Asks the preview panel to update its current controller.

## Declaration

```swift
func updateController()
```

<a id="Discussion"></a>

## Discussion

The preview panel automatically updates its controller (by searching the responder chain) whenever the main or key window changes. You should only invoke this method if the responder chain changes without explicit notice.

## See Also

### Accessing the Preview Panel Controller

- [currentController](currentcontroller.md): The current first responder accepting to control the preview panel.

# updateController (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Asks the preview panel to update its current controller.

## Declaration

```objectivec
- (void) updateController;
```

<a id="Discussion"></a>

## Discussion

The preview panel automatically updates its controller (by searching the responder chain) whenever the main or key window changes. You should only invoke this method if the responder chain changes without explicit notice.

## See Also

### Accessing the Preview Panel Controller

- [currentController](currentcontroller.md): The current first responder accepting to control the preview panel.
