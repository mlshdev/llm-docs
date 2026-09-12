> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityprotocol/accessibilityperformshowalternateui()](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol/accessibilityperformshowalternateui())

# accessibilityPerformShowAlternateUI() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Displays the accessibility element’s alternative UI.

## Declaration

```swift
func accessibilityPerformShowAlternateUI() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the action was successfully triggered; otherwise, [false](https://developer.apple.com/documentation/swift/false). This method does not indicate the success or failure of the action, just the fact that the action was successfully triggered.

<a id="Discussion"></a>

## Discussion

Use this method to trigger changes to the UI due to a mouse-hover or similar event.

## See Also

### Showing user interface elements

- [accessibilityPerformShowDefaultUI()](accessibilityperformshowdefaultui%28%29.md): Returns to the accessibility element’s original UI.
- [accessibilityPerformShowMenu()](accessibilityperformshowmenu%28%29.md): Displays the menu accessibility element.
- [accessibilityPerformRaise()](accessibilityperformraise%28%29.md): Brings the window to the front.

# accessibilityPerformShowAlternateUI (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Displays the accessibility element’s alternative UI.

## Declaration

```objectivec
- (BOOL) accessibilityPerformShowAlternateUI;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the action was successfully triggered; otherwise, [false](https://developer.apple.com/documentation/swift/false). This method does not indicate the success or failure of the action, just the fact that the action was successfully triggered.

<a id="Discussion"></a>

## Discussion

Use this method to trigger changes to the UI due to a mouse-hover or similar event.

## See Also

### Showing user interface elements

- [accessibilityPerformShowDefaultUI](accessibilityperformshowdefaultui%28%29.md): Returns to the accessibility element’s original UI.
- [accessibilityPerformShowMenu](accessibilityperformshowmenu%28%29.md): Displays the menu accessibility element.
- [accessibilityPerformRaise](accessibilityperformraise%28%29.md): Brings the window to the front.
