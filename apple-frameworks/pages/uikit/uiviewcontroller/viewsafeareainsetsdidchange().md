> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/viewsafeareainsetsdidchange()](https://developer.apple.com/documentation/uikit/uiviewcontroller/viewsafeareainsetsdidchange())

# viewSafeAreaInsetsDidChange() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Called to notify the view controller that the safe area insets of its root view changed.

## Declaration

```swift
func viewSafeAreaInsetsDidChange()
```

## Mentioned In

- [Displaying and managing views with a view controller](../displaying-and-managing-views-with-a-view-controller.md)

<a id="Discussion"></a>

## Discussion

Use this method to update your interface to accommodate the new safe area. UIKit updates the safe area in response to size changes to system bars or when you modify the additional safe area insets of your view controller. UIKit also calls this method immediately before your view appears onscreen.

## See Also

### Extending the view’s safe area

- [Positioning content relative to the safe area](../positioning-content-relative-to-the-safe-area.md): Position views so that they aren’t obstructed by other content.
- [additionalSafeAreaInsets](additionalsafeareainsets.md): Custom insets that you specify to modify the view controller’s safe area.

# viewSafeAreaInsetsDidChange (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Called to notify the view controller that the safe area insets of its root view changed.

## Declaration

```objectivec
- (void) viewSafeAreaInsetsDidChange;
```

## Mentioned In

- [Displaying and managing views with a view controller](../displaying-and-managing-views-with-a-view-controller.md)

<a id="Discussion"></a>

## Discussion

Use this method to update your interface to accommodate the new safe area. UIKit updates the safe area in response to size changes to system bars or when you modify the additional safe area insets of your view controller. UIKit also calls this method immediately before your view appears onscreen.

## See Also

### Extending the view’s safe area

- [Positioning content relative to the safe area](../positioning-content-relative-to-the-safe-area.md): Position views so that they aren’t obstructed by other content.
- [additionalSafeAreaInsets](additionalsafeareainsets.md): Custom insets that you specify to modify the view controller’s safe area.
