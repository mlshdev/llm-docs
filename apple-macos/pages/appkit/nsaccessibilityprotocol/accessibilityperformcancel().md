> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityprotocol/accessibilityperformcancel()](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol/accessibilityperformcancel())

# accessibilityPerformCancel() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Cancels the current operation.

## Declaration

```swift
func accessibilityPerformCancel() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the action was successfully triggered; otherwise, [false](https://developer.apple.com/documentation/swift/false). This method does not indicate the success or failure of the action, just the fact that the action was successfully triggered.

## See Also

### Confirming and canceling operations

- [accessibilityPerformConfirm()](accessibilityperformconfirm%28%29.md): Simulates pressing Return in the accessibility element.

# accessibilityPerformCancel (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Cancels the current operation.

## Declaration

```objectivec
- (BOOL) accessibilityPerformCancel;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the action was successfully triggered; otherwise, [false](https://developer.apple.com/documentation/swift/false). This method does not indicate the success or failure of the action, just the fact that the action was successfully triggered.

## See Also

### Confirming and canceling operations

- [accessibilityPerformConfirm](accessibilityperformconfirm%28%29.md): Simulates pressing Return in the accessibility element.
