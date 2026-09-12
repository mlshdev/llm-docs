> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/accessibilityelementisfocused()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityelementisfocused())

# accessibilityElementIsFocused() (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a Boolean value indicating whether an assistive technology is focused on the accessibility element.

## Declaration

```swift
@MainActor func accessibilityElementIsFocused() -> Bool
```

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if an assistive technology is virtually focused on the element; otherwise, [NO](../no.md).

## See Also

### Getting focus information

- [accessibilityElementDidBecomeFocused()](accessibilityelementdidbecomefocused%28%29.md): Sent after an assistive technology has set its virtual focus on the accessibility element.
- [accessibilityElementDidLoseFocus()](accessibilityelementdidlosefocus%28%29.md): Sent after an assistive technology has removed its virtual focus from an accessibility element.
- [accessibilityAssistiveTechnologyFocusedIdentifiers()](accessibilityassistivetechnologyfocusedidentifiers%28%29.md): Returns a set of identifier keys indicating which assistive app has focus on the accessibility element.

# accessibilityElementIsFocused (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a Boolean value indicating whether an assistive technology is focused on the accessibility element.

## Declaration

```objectivec
- (BOOL) accessibilityElementIsFocused;
```

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if an assistive technology is virtually focused on the element; otherwise, [NO](../no.md).

## See Also

### Getting focus information

- [accessibilityElementDidBecomeFocused](accessibilityelementdidbecomefocused%28%29.md): Sent after an assistive technology has set its virtual focus on the accessibility element.
- [accessibilityElementDidLoseFocus](accessibilityelementdidlosefocus%28%29.md): Sent after an assistive technology has removed its virtual focus from an accessibility element.
- [accessibilityAssistiveTechnologyFocusedIdentifiers](accessibilityassistivetechnologyfocusedidentifiers%28%29.md): Returns a set of identifier keys indicating which assistive app has focus on the accessibility element.
