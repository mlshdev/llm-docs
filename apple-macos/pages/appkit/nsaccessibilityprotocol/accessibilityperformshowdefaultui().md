> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityprotocol/accessibilityperformshowdefaultui()](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol/accessibilityperformshowdefaultui())

# accessibilityPerformShowDefaultUI() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns to the accessibility element’s original UI.

## Declaration

```swift
func accessibilityPerformShowDefaultUI() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the action was successfully triggered; otherwise, [false](https://developer.apple.com/documentation/swift/false). This method does not indicate the success or failure of the action, just the fact that the action was successfully triggered.

<a id="Discussion"></a>

## Discussion

Call this method after successfully calling [accessibilityPerformShowAlternateUI()](accessibilityperformshowalternateui%28%29.md) to return to the original UI.

## See Also

### Showing user interface elements

- [accessibilityPerformShowAlternateUI()](accessibilityperformshowalternateui%28%29.md): Displays the accessibility element’s alternative UI.
- [accessibilityPerformShowMenu()](accessibilityperformshowmenu%28%29.md): Displays the menu accessibility element.
- [accessibilityPerformRaise()](accessibilityperformraise%28%29.md): Brings the window to the front.

# accessibilityPerformShowDefaultUI (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns to the accessibility element’s original UI.

## Declaration

```objectivec
- (BOOL) accessibilityPerformShowDefaultUI;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the action was successfully triggered; otherwise, [false](https://developer.apple.com/documentation/swift/false). This method does not indicate the success or failure of the action, just the fact that the action was successfully triggered.

<a id="Discussion"></a>

## Discussion

Call this method after successfully calling [accessibilityPerformShowAlternateUI](accessibilityperformshowalternateui%28%29.md) to return to the original UI.

## See Also

### Showing user interface elements

- [accessibilityPerformShowAlternateUI](accessibilityperformshowalternateui%28%29.md): Displays the accessibility element’s alternative UI.
- [accessibilityPerformShowMenu](accessibilityperformshowmenu%28%29.md): Displays the menu accessibility element.
- [accessibilityPerformRaise](accessibilityperformraise%28%29.md): Brings the window to the front.
