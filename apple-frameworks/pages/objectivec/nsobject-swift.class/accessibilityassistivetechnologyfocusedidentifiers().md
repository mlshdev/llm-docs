> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/accessibilityassistivetechnologyfocusedidentifiers()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityassistivetechnologyfocusedidentifiers())

# accessibilityAssistiveTechnologyFocusedIdentifiers() (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns a set of identifier keys indicating which assistive app has focus on the accessibility element.

## Declaration

```swift
@MainActor func accessibilityAssistiveTechnologyFocusedIdentifiers() -> Set<UIAccessibility.AssistiveTechnologyIdentifier>?
```

## See Also

### Getting focus information

- [accessibilityElementDidBecomeFocused()](accessibilityelementdidbecomefocused%28%29.md): Sent after an assistive technology has set its virtual focus on the accessibility element.
- [accessibilityElementDidLoseFocus()](accessibilityelementdidlosefocus%28%29.md): Sent after an assistive technology has removed its virtual focus from an accessibility element.
- [accessibilityElementIsFocused()](accessibilityelementisfocused%28%29.md): Returns a Boolean value indicating whether an assistive technology is focused on the accessibility element.

# accessibilityAssistiveTechnologyFocusedIdentifiers (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns a set of identifier keys indicating which assistive app has focus on the accessibility element.

## Declaration

```objectivec
- (NSSet<NSString *> *) accessibilityAssistiveTechnologyFocusedIdentifiers;
```

## See Also

### Getting focus information

- [accessibilityElementDidBecomeFocused](accessibilityelementdidbecomefocused%28%29.md): Sent after an assistive technology has set its virtual focus on the accessibility element.
- [accessibilityElementDidLoseFocus](accessibilityelementdidlosefocus%28%29.md): Sent after an assistive technology has removed its virtual focus from an accessibility element.
- [accessibilityElementIsFocused](accessibilityelementisfocused%28%29.md): Returns a Boolean value indicating whether an assistive technology is focused on the accessibility element.
