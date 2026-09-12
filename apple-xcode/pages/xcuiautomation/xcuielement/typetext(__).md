> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement/typetext(_:)](https://developer.apple.com/documentation/xcuiautomation/xcuielement/typetext(_:))

# typeText(\_:) (Swift)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Types a string into the element.

## Declaration

```swift
func typeText(_ text: String)
```

<a id="Discussion"></a>

## Discussion

The element or a descendant must have keyboard focus; otherwise the system raises an error. This API discards any modifiers set in the current context by [perform(withKeyModifiers:block:)](perform%28withkeymodifiers_block_%29.md) so that it strictly interprets the provided text. To input keys with modifier flags, use  [typeKey(\_:modifierFlags:)](typekey%28__modifierflags_%29-6gaoi.md).

# typeText: (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

Types a string into the element.

## Declaration

```objectivec
- (void) typeText:(NSString *) text;
```

<a id="Discussion"></a>

## Discussion

The element or a descendant must have keyboard focus; otherwise the system raises an error. This API discards any modifiers set in the current context by [performWithKeyModifiers:block:](perform%28withkeymodifiers_block_%29.md) so that it strictly interprets the provided text. To input keys with modifier flags, use  [typeKey(\_:modifierFlags:)](typekey%28__modifierflags_%29-6gaoi.md).
