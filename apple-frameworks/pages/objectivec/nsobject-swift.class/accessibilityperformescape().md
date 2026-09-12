> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/accessibilityperformescape()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityperformescape())

# accessibilityPerformEscape() (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Dismisses a modal view and returns the success or failure of the action.

## Declaration

```swift
@MainActor func accessibilityPerformEscape() -> Bool
```

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the modal view is successfully dismissed; otherwise, [NO](../no.md). By default, this method returns [NO](../no.md).

<a id="Discussion"></a>

## Discussion

Implement this method on an element or containing view that can be revealed modally or in a hierarchy. When a VoiceOver user performs a dismiss action, this method dismisses the view. For example, you might implement this method for a popover in order to give users a deliberate dismiss action to perform that closes the popover.

## See Also

### Performing an action

- [accessibilityActivate()](accessibilityactivate%28%29.md): Tells the element to activate itself and report the success or failure of the operation.
- [accessibilityIncrement()](accessibilityincrement%28%29.md): Tells the accessibility element to increment the value of its content.
- [accessibilityDecrement()](accessibilitydecrement%28%29.md): Tells the accessibility element to decrement the value of its content.
- [accessibilityScroll(\_:)](accessibilityscroll%28__%29.md): Scrolls screen content in an application-specific way and returns the success or failure of the action.
- [accessibilityPerformMagicTap()](accessibilityperformmagictap%28%29.md): Performs a salient action.

# accessibilityPerformEscape (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Dismisses a modal view and returns the success or failure of the action.

## Declaration

```objectivec
- (BOOL) accessibilityPerformEscape;
```

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the modal view is successfully dismissed; otherwise, [NO](../no.md). By default, this method returns [NO](../no.md).

<a id="Discussion"></a>

## Discussion

Implement this method on an element or containing view that can be revealed modally or in a hierarchy. When a VoiceOver user performs a dismiss action, this method dismisses the view. For example, you might implement this method for a popover in order to give users a deliberate dismiss action to perform that closes the popover.

## See Also

### Performing an action

- [accessibilityActivate](accessibilityactivate%28%29.md): Tells the element to activate itself and report the success or failure of the operation.
- [accessibilityIncrement](accessibilityincrement%28%29.md): Tells the accessibility element to increment the value of its content.
- [accessibilityDecrement](accessibilitydecrement%28%29.md): Tells the accessibility element to decrement the value of its content.
- [accessibilityScroll:](accessibilityscroll%28__%29.md): Scrolls screen content in an application-specific way and returns the success or failure of the action.
- [accessibilityPerformMagicTap](accessibilityperformmagictap%28%29.md): Performs a salient action.
