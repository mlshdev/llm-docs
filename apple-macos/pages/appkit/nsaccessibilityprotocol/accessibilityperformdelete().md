> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityprotocol/accessibilityperformdelete()](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol/accessibilityperformdelete())

# accessibilityPerformDelete() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Deletes the accessibility element’s value.

## Declaration

```swift
func accessibilityPerformDelete() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the action was successfully triggered; otherwise, [false](https://developer.apple.com/documentation/swift/false). This method does not indicate the success or failure of the action, just the fact that the action was successfully triggered.

<a id="Discussion"></a>

## Discussion

Use this method on elements with values.

## See Also

### Incrementing, decrementing, and deleting values

- [accessibilityIncrementButton()](accessibilityincrementbutton%28%29.md): Returns the increment button for the stepper accessibility element.
- [setAccessibilityIncrementButton(\_:)](setaccessibilityincrementbutton%28__%29.md): Sets the increment button for the stepper accessibility element.
- [accessibilityDecrementButton()](accessibilitydecrementbutton%28%29.md): Returns the decrement button for the stepper accessibility element.
- [setAccessibilityDecrementButton(\_:)](setaccessibilitydecrementbutton%28__%29.md): Sets the decrement button for the stepper accessibility element.
- [accessibilityPerformIncrement()](accessibilityperformincrement%28%29.md): Increments the accessibility element’s value.
- [accessibilityPerformDecrement()](accessibilityperformdecrement%28%29.md): Decrements the accessibility element’s value.

# accessibilityPerformDelete (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Deletes the accessibility element’s value.

## Declaration

```objectivec
- (BOOL) accessibilityPerformDelete;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the action was successfully triggered; otherwise, [false](https://developer.apple.com/documentation/swift/false). This method does not indicate the success or failure of the action, just the fact that the action was successfully triggered.

<a id="Discussion"></a>

## Discussion

Use this method on elements with values.

## See Also

### Incrementing, decrementing, and deleting values

- [accessibilityPerformIncrement](accessibilityperformincrement%28%29.md): Increments the accessibility element’s value.
- [accessibilityPerformDecrement](accessibilityperformdecrement%28%29.md): Decrements the accessibility element’s value.
