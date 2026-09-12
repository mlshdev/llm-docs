> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextloupesession/invalidate()](https://developer.apple.com/documentation/uikit/uitextloupesession/invalidate())

# invalidate() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+

Hides the loupe and cleans up any session-related state.

## Declaration

```swift
func invalidate()
```

## Mentioned In

- [Adopting system selection UI in custom text views](../adopting-system-selection-ui-in-custom-text-views.md)

<a id="Discussion"></a>

## Discussion

Call this method when you’re ready to hide the loupe. After calling this method, you can remove your reference to the session.

## See Also

### Updating the loupe during the session

- [move(to:withCaretRect:trackingCaret:)](move%28to_withcaretrect_trackingcaret_%29.md): Moves the loupe to the specified point in the session’s associated view.

# invalidate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+

Hides the loupe and cleans up any session-related state.

## Declaration

```objectivec
- (void) invalidate;
```

## Mentioned In

- [Adopting system selection UI in custom text views](../adopting-system-selection-ui-in-custom-text-views.md)

<a id="Discussion"></a>

## Discussion

Call this method when you’re ready to hide the loupe. After calling this method, you can remove your reference to the session.

## See Also

### Updating the loupe during the session

- [moveToPoint:withCaretRect:trackingCaret:](move%28to_withcaretrect_trackingcaret_%29.md): Moves the loupe to the specified point in the session’s associated view.
