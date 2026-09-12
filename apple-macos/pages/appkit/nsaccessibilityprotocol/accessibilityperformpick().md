> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityprotocol/accessibilityperformpick()](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol/accessibilityperformpick())

# accessibilityPerformPick() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Selects the accessibility element.

## Declaration

```swift
func accessibilityPerformPick() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the action was successfully triggered; otherwise, [false](https://developer.apple.com/documentation/swift/false). This method does not indicate the success or failure of the action, just the fact that the action was successfully triggered.

<a id="Discussion"></a>

## Discussion

Use this method on selectable elements, such as a menu item.

## See Also

### Selecting elements

- [accessibilityPerformPress()](accessibilityperformpress%28%29.md): Simulates clicking the accessibility element.

# accessibilityPerformPick (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Selects the accessibility element.

## Declaration

```objectivec
- (BOOL) accessibilityPerformPick;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the action was successfully triggered; otherwise, [false](https://developer.apple.com/documentation/swift/false). This method does not indicate the success or failure of the action, just the fact that the action was successfully triggered.

<a id="Discussion"></a>

## Discussion

Use this method on selectable elements, such as a menu item.

## See Also

### Selecting elements

- [accessibilityPerformPress](accessibilityperformpress%28%29.md): Simulates clicking the accessibility element.
