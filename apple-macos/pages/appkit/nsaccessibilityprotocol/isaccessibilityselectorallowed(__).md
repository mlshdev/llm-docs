> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityprotocol/isaccessibilityselectorallowed(_:)](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol/isaccessibilityselectorallowed(_:))

# isAccessibilitySelectorAllowed(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns a Boolean value that indicates whether assistive apps can invoke the specified selector on the accessibility element.

## Declaration

```swift
func isAccessibilitySelectorAllowed(_ selector: Selector) -> Bool
```

## Parameters

- `selector`: The selector to check.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true), if accessibility clients can call the selector; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring accessibility

- [isAccessibilityElement()](isaccessibilityelement%28%29.md): Returns a Boolean value that determines whether the accessibility element participates in the accessibility hierarchy.
- [setAccessibilityElement(\_:)](setaccessibilityelement%28__%29.md): Sets a Boolean value that determines whether the accessibility element participates in the accessibility hierarchy.
- [isAccessibilityEnabled()](isaccessibilityenabled%28%29.md): Returns a Boolean value that determines whether the accessibility element responds to user events.
- [setAccessibilityEnabled(\_:)](setaccessibilityenabled%28__%29.md): Sets a Boolean value that determines whether the accessibility element responds to user events.
- [accessibilityFrame()](accessibilityframe%28%29.md): Returns the accessibility element’s frame in screen coordinates.
- [setAccessibilityFrame(\_:)](setaccessibilityframe%28__%29.md): Sets the accessibility element’s frame in screen coordinates.
- [accessibilityHelp()](accessibilityhelp%28%29.md): Returns the help text for the accessibility element.
- [setAccessibilityHelp(\_:)](setaccessibilityhelp%28__%29.md): Sets the help text for the accessibility element.
- [accessibilityLabel()](accessibilitylabel%28%29.md): Returns a short description of the accessibility element.
- [setAccessibilityLabel(\_:)](setaccessibilitylabel%28__%29.md): Sets a short description of the accessibility element.
- [accessibilityTitle()](accessibilitytitle%28%29.md): Returns the title of the accessibility element—for example, a button’s visible text.
- [setAccessibilityTitle(\_:)](setaccessibilitytitle%28__%29.md): Sets the title of the accessibility element.
- [accessibilityValue()](accessibilityvalue%28%29.md): Returns the accessibility element’s value.
- [setAccessibilityValue(\_:)](setaccessibilityvalue%28__%29.md): Sets the accessibility element’s value.

# isAccessibilitySelectorAllowed: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Returns a Boolean value that indicates whether assistive apps can invoke the specified selector on the accessibility element.

## Declaration

```objectivec
- (BOOL) isAccessibilitySelectorAllowed:(SEL) selector;
```

## Parameters

- `selector`: The selector to check.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true), if accessibility clients can call the selector; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring accessibility

- [accessibilityElement](../nsaccessibility-c.protocol/accessibilityelement.md): A Boolean value that determines whether the accessibility element participates in the accessibility hierarchy.
- [accessibilityEnabled](../nsaccessibility-c.protocol/accessibilityenabled.md): A Boolean value that determines whether the accessibility element responds to user events.
- [accessibilityFrame](../nsaccessibility-c.protocol/accessibilityframe.md): The accessibility element’s frame in screen coordinates.
- [accessibilityHelp](../nsaccessibility-c.protocol/accessibilityhelp.md): The help text for the accessibility element.
- [accessibilityLabel](../nsaccessibility-c.protocol/accessibilitylabel.md): A short description of the accessibility element.
- [accessibilityTitle](../nsaccessibility-c.protocol/accessibilitytitle.md): The title of the accessibility element—for example, a button’s visible text.
- [accessibilityValue](../nsaccessibility-c.protocol/accessibilityvalue.md): The accessibility element’s value.
