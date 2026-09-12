> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/performprimaryaction()](https://developer.apple.com/documentation/uikit/uicontrol/performprimaryaction())

# performPrimaryAction() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · tvOS 17.4+ · visionOS 1.1+

Calls the method associated with the control’s primary action.

## Declaration

```swift
func performPrimaryAction()
```

<a id="Discussion"></a>

## Discussion

This method invokes the primary action for the control, whether it’s a direct action, for example, a button tap, or presents further UI, for example, a contextual menu.

## See Also

### Triggering actions

- [sendAction(\_:)](sendaction%28__%29.md): Like -sendAction:to:forEvent:, this method is called by -sendActionsForControlEvents:. You may override this method to observe or modify behavior. If you override this method, you should call super precisely once to dispatch the action, or not call super to suppress sending that action.
- [sendAction(\_:to:for:)](sendaction%28__to_for_%29.md): Calls the specified action method.
- [sendActions(for:)](sendactions%28for_%29.md): Calls the action methods associated with the specified events.

# performPrimaryAction (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · tvOS 17.4+ · visionOS 1.1+

Calls the method associated with the control’s primary action.

## Declaration

```objectivec
- (void) performPrimaryAction;
```

<a id="Discussion"></a>

## Discussion

This method invokes the primary action for the control, whether it’s a direct action, for example, a button tap, or presents further UI, for example, a contextual menu.

## See Also

### Triggering actions

- [sendAction:](sendaction%28__%29.md): Like -sendAction:to:forEvent:, this method is called by -sendActionsForControlEvents:. You may override this method to observe or modify behavior. If you override this method, you should call super precisely once to dispatch the action, or not call super to suppress sending that action.
- [sendAction:to:forEvent:](sendaction%28__to_for_%29.md): Calls the specified action method.
- [sendActionsForControlEvents:](sendactions%28for_%29.md): Calls the action methods associated with the specified events.
