> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilitysharedfocuselements](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilitysharedfocuselements)

# accessibilitySharedFocusElements

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

An array of elements that shares the keyboard focus with the accessibility element.

## Declaration

```objectivec
@property (copy, nullable) NSArray * accessibilitySharedFocusElements;
```

<a id="Discussion"></a>

## Discussion

Use this property to manage elements that share the keyboard focus—for example, a search field with completion menu below it.

## See Also

### Setting the focus

- [accessibilityApplicationFocusedUIElement](accessibilityapplicationfocuseduielement.md): The child accessibility element with the current focus.
- [accessibilityFocused](accessibilityfocused.md): A Boolean value that determines whether the accessibility element has the keyboard focus.
- [accessibilityFocusedWindow](accessibilityfocusedwindow.md): The child window with the current focus.
