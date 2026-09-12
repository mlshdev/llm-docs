> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/accessibilityelementdidbecomefocused()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityelementdidbecomefocused())

# accessibilityElementDidBecomeFocused() (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sent after an assistive technology has set its virtual focus on the accessibility element.

## Declaration

```swift
@MainActor func accessibilityElementDidBecomeFocused()
```

<a id="Discussion"></a>

## Discussion

Override `accessibilityElementDidBecomeFocused` if you need to know when an assistive technology has set its virtual focus on an accessibility element.

## See Also

### Getting focus information

- [accessibilityElementDidLoseFocus()](accessibilityelementdidlosefocus%28%29.md): Sent after an assistive technology has removed its virtual focus from an accessibility element.
- [accessibilityElementIsFocused()](accessibilityelementisfocused%28%29.md): Returns a Boolean value indicating whether an assistive technology is focused on the accessibility element.
- [accessibilityAssistiveTechnologyFocusedIdentifiers()](accessibilityassistivetechnologyfocusedidentifiers%28%29.md): Returns a set of identifier keys indicating which assistive app has focus on the accessibility element.

# accessibilityElementDidBecomeFocused (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Sent after an assistive technology has set its virtual focus on the accessibility element.

## Declaration

```objectivec
- (void) accessibilityElementDidBecomeFocused;
```

<a id="Discussion"></a>

## Discussion

Override `accessibilityElementDidBecomeFocused` if you need to know when an assistive technology has set its virtual focus on an accessibility element.

## See Also

### Getting focus information

- [accessibilityElementDidLoseFocus](accessibilityelementdidlosefocus%28%29.md): Sent after an assistive technology has removed its virtual focus from an accessibility element.
- [accessibilityElementIsFocused](accessibilityelementisfocused%28%29.md): Returns a Boolean value indicating whether an assistive technology is focused on the accessibility element.
- [accessibilityAssistiveTechnologyFocusedIdentifiers](accessibilityassistivetechnologyfocusedidentifiers%28%29.md): Returns a set of identifier keys indicating which assistive app has focus on the accessibility element.
