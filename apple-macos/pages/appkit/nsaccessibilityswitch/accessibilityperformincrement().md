> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityswitch/accessibilityperformincrement()](https://developer.apple.com/documentation/appkit/nsaccessibilityswitch/accessibilityperformincrement())

# accessibilityPerformIncrement() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Increments the switch’s value.

## Declaration

```swift
optional func accessibilityPerformIncrement() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the action was successfully triggered; otherwise, [false](https://developer.apple.com/documentation/swift/false). This method does not indicate the success or failure of the action, just the fact that the action was successfully triggered.

<a id="Discussion"></a>

## Discussion

This method must post an [valueChanged](../nsaccessibility-swift.struct/notification/valuechanged.md) notification after changing the switch’s value.

## See Also

### Supporting Accessibility

- [accessibilityPerformDecrement()](accessibilityperformdecrement%28%29.md): Decrements the switch’s value.
- [accessibilityValue()](accessibilityvalue%28%29.md): Returns the switch’s value.

# accessibilityPerformIncrement (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Increments the switch’s value.

## Declaration

```objectivec
- (BOOL) accessibilityPerformIncrement;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the action was successfully triggered; otherwise, [false](https://developer.apple.com/documentation/swift/false). This method does not indicate the success or failure of the action, just the fact that the action was successfully triggered.

<a id="Discussion"></a>

## Discussion

This method must post an [NSAccessibilityValueChangedNotification](../nsaccessibility-swift.struct/notification/valuechanged.md) notification after changing the switch’s value.

## See Also

### Supporting Accessibility

- [accessibilityPerformDecrement](accessibilityperformdecrement%28%29.md): Decrements the switch’s value.
- [accessibilityValue](accessibilityvalue%28%29.md): Returns the switch’s value.
