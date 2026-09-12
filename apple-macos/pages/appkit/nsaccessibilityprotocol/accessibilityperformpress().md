> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityprotocol/accessibilityperformpress()](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol/accessibilityperformpress())

# accessibilityPerformPress() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Simulates clicking the accessibility element.

## Declaration

```swift
func accessibilityPerformPress() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the action was successfully triggered; otherwise, [false](https://developer.apple.com/documentation/swift/false). This method does not indicate the success or failure of the action, just the fact that the action was successfully triggered.

<a id="Discussion"></a>

## Discussion

Use this method on elements that behave like buttons.

## See Also

### Selecting elements

- [accessibilityPerformPick()](accessibilityperformpick%28%29.md): Selects the accessibility element.

# accessibilityPerformPress (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Simulates clicking the accessibility element.

## Declaration

```objectivec
- (BOOL) accessibilityPerformPress;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the action was successfully triggered; otherwise, [false](https://developer.apple.com/documentation/swift/false). This method does not indicate the success or failure of the action, just the fact that the action was successfully triggered.

<a id="Discussion"></a>

## Discussion

Use this method on elements that behave like buttons.

## See Also

### Selecting elements

- [accessibilityPerformPick](accessibilityperformpick%28%29.md): Selects the accessibility element.
