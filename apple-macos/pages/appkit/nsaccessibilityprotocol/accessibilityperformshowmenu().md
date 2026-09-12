> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityprotocol/accessibilityperformshowmenu()](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol/accessibilityperformshowmenu())

# accessibilityPerformShowMenu() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Displays the menu accessibility element.

## Declaration

```swift
func accessibilityPerformShowMenu() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the action was successfully triggered; otherwise, [false](https://developer.apple.com/documentation/swift/false). This method does not indicate the success or failure of the action, just the fact that the action was successfully triggered.

<a id="Discussion"></a>

## Discussion

Use this method to display the contextual menu for the element.

## See Also

### Showing user interface elements

- [accessibilityPerformShowAlternateUI()](accessibilityperformshowalternateui%28%29.md): Displays the accessibility element’s alternative UI.
- [accessibilityPerformShowDefaultUI()](accessibilityperformshowdefaultui%28%29.md): Returns to the accessibility element’s original UI.
- [accessibilityPerformRaise()](accessibilityperformraise%28%29.md): Brings the window to the front.

# accessibilityPerformShowMenu (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Displays the menu accessibility element.

## Declaration

```objectivec
- (BOOL) accessibilityPerformShowMenu;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the action was successfully triggered; otherwise, [false](https://developer.apple.com/documentation/swift/false). This method does not indicate the success or failure of the action, just the fact that the action was successfully triggered.

<a id="Discussion"></a>

## Discussion

Use this method to display the contextual menu for the element.

## See Also

### Showing user interface elements

- [accessibilityPerformShowAlternateUI](accessibilityperformshowalternateui%28%29.md): Displays the accessibility element’s alternative UI.
- [accessibilityPerformShowDefaultUI](accessibilityperformshowdefaultui%28%29.md): Returns to the accessibility element’s original UI.
- [accessibilityPerformRaise](accessibilityperformraise%28%29.md): Brings the window to the front.
