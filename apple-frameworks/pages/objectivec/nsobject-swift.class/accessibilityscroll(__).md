> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/accessibilityscroll(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/accessibilityscroll(_:))

# accessibilityScroll(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Scrolls screen content in an application-specific way and returns the success or failure of the action.

## Declaration

```swift
@MainActor func accessibilityScroll(_ direction: UIAccessibilityScrollDirection) -> Bool
```

## Parameters

- `direction`: A constant that specifies the direction of the scrolling action. See [UIAccessibilityScrollDirection](../../uikit/uiaccessibilityscrolldirection.md) for descriptions of valid constants.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the scrolling action succeeds; otherwise, [NO](../no.md). By default, this method returns [NO](../no.md).

<a id="Discussion"></a>

## Discussion

Implement this method if a view in the view hierarchy supports a scroll by page action.

- If the scrolling action succeeds for the specified direction, return [YES](../yes.md) and post the [pageScrolled](../../uikit/uiaccessibility/notification/pagescrolled.md) notification.
- If the scrolling action fails, `accessibilityScroll:` is called on a parent view in the hierarchy.

## See Also

### Performing an action

- [accessibilityActivate()](accessibilityactivate%28%29.md): Tells the element to activate itself and report the success or failure of the operation.
- [accessibilityIncrement()](accessibilityincrement%28%29.md): Tells the accessibility element to increment the value of its content.
- [accessibilityDecrement()](accessibilitydecrement%28%29.md): Tells the accessibility element to decrement the value of its content.
- [accessibilityPerformEscape()](accessibilityperformescape%28%29.md): Dismisses a modal view and returns the success or failure of the action.
- [accessibilityPerformMagicTap()](accessibilityperformmagictap%28%29.md): Performs a salient action.

# accessibilityScroll: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Scrolls screen content in an application-specific way and returns the success or failure of the action.

## Declaration

```objectivec
- (BOOL) accessibilityScroll:(UIAccessibilityScrollDirection) direction;
```

## Parameters

- `direction`: A constant that specifies the direction of the scrolling action. See [UIAccessibilityScrollDirection](../../uikit/uiaccessibilityscrolldirection.md) for descriptions of valid constants.

<a id="return-value"></a>

## Return Value

[YES](../yes.md) if the scrolling action succeeds; otherwise, [NO](../no.md). By default, this method returns [NO](../no.md).

<a id="Discussion"></a>

## Discussion

Implement this method if a view in the view hierarchy supports a scroll by page action.

- If the scrolling action succeeds for the specified direction, return [YES](../yes.md) and post the [UIAccessibilityPageScrolledNotification](../../uikit/uiaccessibility/notification/pagescrolled.md) notification.
- If the scrolling action fails, `accessibilityScroll:` is called on a parent view in the hierarchy.

## See Also

### Performing an action

- [accessibilityActivate](accessibilityactivate%28%29.md): Tells the element to activate itself and report the success or failure of the operation.
- [accessibilityIncrement](accessibilityincrement%28%29.md): Tells the accessibility element to increment the value of its content.
- [accessibilityDecrement](accessibilitydecrement%28%29.md): Tells the accessibility element to decrement the value of its content.
- [accessibilityPerformEscape](accessibilityperformescape%28%29.md): Dismisses a modal view and returns the success or failure of the action.
- [accessibilityPerformMagicTap](accessibilityperformmagictap%28%29.md): Performs a salient action.
