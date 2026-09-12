> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityprotocol/accessibilityperformraise()](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol/accessibilityperformraise())

# accessibilityPerformRaise() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Brings the window to the front.

## Declaration

```swift
func accessibilityPerformRaise() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the action was successfully triggered; otherwise, [false](https://developer.apple.com/documentation/swift/false). This method does not indicate the success or failure of the action, just the fact that the action was successfully triggered.

<a id="Discussion"></a>

## Discussion

The window behaves as if you had clicked on the window’s title bar.

## See Also

### Showing user interface elements

- [accessibilityPerformShowAlternateUI()](accessibilityperformshowalternateui%28%29.md): Displays the accessibility element’s alternative UI.
- [accessibilityPerformShowDefaultUI()](accessibilityperformshowdefaultui%28%29.md): Returns to the accessibility element’s original UI.
- [accessibilityPerformShowMenu()](accessibilityperformshowmenu%28%29.md): Displays the menu accessibility element.

# accessibilityPerformRaise (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Brings the window to the front.

## Declaration

```objectivec
- (BOOL) accessibilityPerformRaise;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the action was successfully triggered; otherwise, [false](https://developer.apple.com/documentation/swift/false). This method does not indicate the success or failure of the action, just the fact that the action was successfully triggered.

<a id="Discussion"></a>

## Discussion

The window behaves as if you had clicked on the window’s title bar.

## See Also

### Showing user interface elements

- [accessibilityPerformShowAlternateUI](accessibilityperformshowalternateui%28%29.md): Displays the accessibility element’s alternative UI.
- [accessibilityPerformShowDefaultUI](accessibilityperformshowdefaultui%28%29.md): Returns to the accessibility element’s original UI.
- [accessibilityPerformShowMenu](accessibilityperformshowmenu%28%29.md): Displays the menu accessibility element.
