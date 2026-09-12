> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityslider/accessibilityperformdecrement()](https://developer.apple.com/documentation/appkit/nsaccessibilityslider/accessibilityperformdecrement())

# accessibilityPerformDecrement() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Decrements the slider’s value.

## Declaration

```swift
func accessibilityPerformDecrement() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the action was successfully triggered; otherwise, [false](https://developer.apple.com/documentation/swift/false). This method does not indicate the success or failure of the action, just the fact that the action was successfully triggered.

<a id="Discussion"></a>

## Discussion

This method must post an [valueChanged](../nsaccessibility-swift.struct/notification/valuechanged.md) notification after changing the slider’s value.

## See Also

### Supporting Accessibility

- [accessibilityLabel()](accessibilitylabel%28%29.md): Returns a short description of the slider.
- [accessibilityPerformIncrement()](accessibilityperformincrement%28%29.md): Increments the slider’s value.
- [accessibilityValue()](accessibilityvalue%28%29.md): Returns the slider’s value.

# accessibilityPerformDecrement (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Decrements the slider’s value.

## Declaration

```objectivec
- (BOOL) accessibilityPerformDecrement;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the action was successfully triggered; otherwise, [false](https://developer.apple.com/documentation/swift/false). This method does not indicate the success or failure of the action, just the fact that the action was successfully triggered.

<a id="Discussion"></a>

## Discussion

This method must post an [NSAccessibilityValueChangedNotification](../nsaccessibility-swift.struct/notification/valuechanged.md) notification after changing the slider’s value.

## See Also

### Supporting Accessibility

- [accessibilityLabel](accessibilitylabel%28%29.md): Returns a short description of the slider.
- [accessibilityPerformIncrement](accessibilityperformincrement%28%29.md): Increments the slider’s value.
- [accessibilityValue](accessibilityvalue%28%29.md): Returns the slider’s value.
