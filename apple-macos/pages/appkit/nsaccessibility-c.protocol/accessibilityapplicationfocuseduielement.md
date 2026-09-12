> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilityapplicationfocuseduielement](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilityapplicationfocuseduielement)

# accessibilityApplicationFocusedUIElement

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The child accessibility element with the current focus.

## Declaration

```objectivec
@property (strong, nullable) id accessibilityApplicationFocusedUIElement;
```

## See Also

### Setting the focus

- [accessibilityFocused](accessibilityfocused.md): A Boolean value that determines whether the accessibility element has the keyboard focus.
- [accessibilityFocusedWindow](accessibilityfocusedwindow.md): The child window with the current focus.
- [accessibilitySharedFocusElements](accessibilitysharedfocuselements.md): An array of elements that shares the keyboard focus with the accessibility element.
