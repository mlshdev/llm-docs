> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/sendactions(for:)](https://developer.apple.com/documentation/uikit/uicontrol/sendactions(for:))

# sendActions(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Calls the action methods associated with the specified events.

## Declaration

```swift
func sendActions(for controlEvents: UIControl.Event)
```

## Parameters

- `controlEvents`: A bitmask with flags that specify the control events for which the control sends action messages. See [UIControl.Event](event.md) for bitmask constants.

<a id="Discussion"></a>

## Discussion

You call this method when you want the control to perform the actions associated with the specified events. This method iterates over the control’s registered targets and action methods and calls the [sendAction(\_:to:for:)](sendaction%28__to_for_%29.md) method for each one that is associated with an event in the `controlEvents` parameter.

## See Also

### Related Documentation

- [addTarget(\_:action:for:)](addtarget%28__action_for_%29.md): Associates a target object and action method with the control.

### Triggering actions

- [performPrimaryAction()](performprimaryaction%28%29.md): Calls the method associated with the control’s primary action.
- [sendAction(\_:)](sendaction%28__%29.md): Like -sendAction:to:forEvent:, this method is called by -sendActionsForControlEvents:. You may override this method to observe or modify behavior. If you override this method, you should call super precisely once to dispatch the action, or not call super to suppress sending that action.
- [sendAction(\_:to:for:)](sendaction%28__to_for_%29.md): Calls the specified action method.

# sendActionsForControlEvents: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Calls the action methods associated with the specified events.

## Declaration

```objectivec
- (void) sendActionsForControlEvents:(UIControlEvents) controlEvents;
```

## Parameters

- `controlEvents`: A bitmask with flags that specify the control events for which the control sends action messages. See [UIControlEvents](event.md) for bitmask constants.

<a id="Discussion"></a>

## Discussion

You call this method when you want the control to perform the actions associated with the specified events. This method iterates over the control’s registered targets and action methods and calls the [sendAction:to:forEvent:](sendaction%28__to_for_%29.md) method for each one that is associated with an event in the `controlEvents` parameter.

## See Also

### Related Documentation

- [addTarget:action:forControlEvents:](addtarget%28__action_for_%29.md): Associates a target object and action method with the control.

### Triggering actions

- [performPrimaryAction](performprimaryaction%28%29.md): Calls the method associated with the control’s primary action.
- [sendAction:](sendaction%28__%29.md): Like -sendAction:to:forEvent:, this method is called by -sendActionsForControlEvents:. You may override this method to observe or modify behavior. If you override this method, you should call super precisely once to dispatch the action, or not call super to suppress sending that action.
- [sendAction:to:forEvent:](sendaction%28__to_for_%29.md): Calls the specified action method.
