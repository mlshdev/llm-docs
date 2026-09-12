> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/sendaction(_:)](https://developer.apple.com/documentation/uikit/uicontrol/sendaction(_:))

# sendAction(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Like -sendAction:to:forEvent:, this method is called by -sendActionsForControlEvents:. You may override this method to observe or modify behavior. If you override this method, you should call super precisely once to dispatch the action, or not call super to suppress sending that action.

## Declaration

```swift
func sendAction(_ action: UIAction)
```

## See Also

### Triggering actions

- [performPrimaryAction()](performprimaryaction%28%29.md): Calls the method associated with the control’s primary action.
- [sendAction(\_:to:for:)](sendaction%28__to_for_%29.md): Calls the specified action method.
- [sendActions(for:)](sendactions%28for_%29.md): Calls the action methods associated with the specified events.

# sendAction: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Like -sendAction:to:forEvent:, this method is called by -sendActionsForControlEvents:. You may override this method to observe or modify behavior. If you override this method, you should call super precisely once to dispatch the action, or not call super to suppress sending that action.

## Declaration

```objectivec
- (void) sendAction:(UIAction *) action;
```

## See Also

### Triggering actions

- [performPrimaryAction](performprimaryaction%28%29.md): Calls the method associated with the control’s primary action.
- [sendAction:to:forEvent:](sendaction%28__to_for_%29.md): Calls the specified action method.
- [sendActionsForControlEvents:](sendactions%28for_%29.md): Calls the action methods associated with the specified events.
