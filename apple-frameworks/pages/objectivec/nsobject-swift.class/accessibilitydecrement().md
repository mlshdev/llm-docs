> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/accessibilitydecrement()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilitydecrement())

# accessibilityDecrement() (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the accessibility element to decrement the value of its content.

## Declaration

```swift
@MainActor func accessibilityDecrement()
```

<a id="Discussion"></a>

## Discussion

If your element has the [adjustable](../../uikit/uiaccessibilitytraits/adjustable.md) trait, you must implement this method. Use this method to decrement the value of the element. For example, a [UISlider](../../uikit/uislider.md) object uses this method to decrement its value by an appropriate amount.

## See Also

### Performing an action

- [accessibilityActivate()](accessibilityactivate%28%29.md): Tells the element to activate itself and report the success or failure of the operation.
- [accessibilityIncrement()](accessibilityincrement%28%29.md): Tells the accessibility element to increment the value of its content.
- [accessibilityScroll(\_:)](accessibilityscroll%28__%29.md): Scrolls screen content in an application-specific way and returns the success or failure of the action.
- [accessibilityPerformEscape()](accessibilityperformescape%28%29.md): Dismisses a modal view and returns the success or failure of the action.
- [accessibilityPerformMagicTap()](accessibilityperformmagictap%28%29.md): Performs a salient action.

# accessibilityDecrement (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the accessibility element to decrement the value of its content.

## Declaration

```objectivec
- (void) accessibilityDecrement;
```

<a id="Discussion"></a>

## Discussion

If your element has the [UIAccessibilityTraitAdjustable](../../uikit/uiaccessibilitytraits/adjustable.md) trait, you must implement this method. Use this method to decrement the value of the element. For example, a [UISlider](../../uikit/uislider.md) object uses this method to decrement its value by an appropriate amount.

## See Also

### Performing an action

- [accessibilityActivate](accessibilityactivate%28%29.md): Tells the element to activate itself and report the success or failure of the operation.
- [accessibilityIncrement](accessibilityincrement%28%29.md): Tells the accessibility element to increment the value of its content.
- [accessibilityScroll:](accessibilityscroll%28__%29.md): Scrolls screen content in an application-specific way and returns the success or failure of the action.
- [accessibilityPerformEscape](accessibilityperformescape%28%29.md): Dismisses a modal view and returns the success or failure of the action.
- [accessibilityPerformMagicTap](accessibilityperformmagictap%28%29.md): Performs a salient action.
