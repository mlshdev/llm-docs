> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilitycontainstransientui/accessibilityperformshowalternateui()](https://developer.apple.com/documentation/appkit/nsaccessibilitycontainstransientui/accessibilityperformshowalternateui())

# accessibilityPerformShowAlternateUI() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

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

### Supporting Accessibility

- [accessibilityPerformShowDefaultUI()](accessibilityperformshowdefaultui%28%29.md): Returns to the accessibility element’s original UI.
- [isAccessibilityAlternateUIVisible()](isaccessibilityalternateuivisible%28%29.md): Returns a Boolean value that determines whether the accessibility element’s alternative UI is currently visible.

# accessibilityPerformShowAlternateUI (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

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

### Supporting Accessibility

- [accessibilityPerformShowDefaultUI](accessibilityperformshowdefaultui%28%29.md): Returns to the accessibility element’s original UI.
- [isAccessibilityAlternateUIVisible](isaccessibilityalternateuivisible%28%29.md): Returns a Boolean value that determines whether the accessibility element’s alternative UI is currently visible.
