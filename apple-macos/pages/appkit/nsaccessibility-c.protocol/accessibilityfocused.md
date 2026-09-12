> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilityfocused](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilityfocused)

# accessibilityFocused

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that determines whether the accessibility element has the keyboard focus.

## Declaration

```objectivec
@property (getter=isAccessibilityFocused) BOOL accessibilityFocused;
```

## See Also

### Related Documentation

- [accessibilityFocusedUIElement](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityfocuseduielement)

### Setting the focus

- [accessibilityApplicationFocusedUIElement](accessibilityapplicationfocuseduielement.md): The child accessibility element with the current focus.
- [accessibilityFocusedWindow](accessibilityfocusedwindow.md): The child window with the current focus.
- [accessibilitySharedFocusElements](accessibilitysharedfocuselements.md): An array of elements that shares the keyboard focus with the accessibility element.
