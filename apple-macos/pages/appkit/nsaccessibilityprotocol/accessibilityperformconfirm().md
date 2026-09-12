> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityprotocol/accessibilityperformconfirm()](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol/accessibilityperformconfirm())

# accessibilityPerformConfirm() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Simulates pressing Return in the accessibility element.

## Declaration

```swift
func accessibilityPerformConfirm() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the action was successfully triggered; otherwise, [false](https://developer.apple.com/documentation/swift/false). This method does not indicate the success or failure of the action, just the fact that the action was successfully triggered.

<a id="Discussion"></a>

## Discussion

Use this method on elements that take keyboard input, such as a text field.

## See Also

### Confirming and canceling operations

- [accessibilityPerformCancel()](accessibilityperformcancel%28%29.md): Cancels the current operation.

# accessibilityPerformConfirm (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Simulates pressing Return in the accessibility element.

## Declaration

```objectivec
- (BOOL) accessibilityPerformConfirm;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the action was successfully triggered; otherwise, [false](https://developer.apple.com/documentation/swift/false). This method does not indicate the success or failure of the action, just the fact that the action was successfully triggered.

<a id="Discussion"></a>

## Discussion

Use this method on elements that take keyboard input, such as a text field.

## See Also

### Confirming and canceling operations

- [accessibilityPerformCancel](accessibilityperformcancel%28%29.md): Cancels the current operation.
