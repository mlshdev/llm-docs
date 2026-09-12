> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkitui/ekeventviewdelegate/eventviewcontroller(_:didcompletewith:)](https://developer.apple.com/documentation/eventkitui/ekeventviewdelegate/eventviewcontroller(_:didcompletewith:))

# eventViewController(\_:didCompleteWith:) (Swift)

**Framework:** EventKit UI  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Invoked when closing the event view controller.

## Declaration

```swift
func eventViewController(_ controller: EKEventViewController, didCompleteWith action: EKEventViewAction)
```

## Parameters

- `controller`: The event view controller to close.
- `action`: The action taken to prompt closing the event view controller. See [EKEventViewAction](../ekeventviewaction.md) for a list of possible values.

## See Also

### Responding to the Interface’s Dismissal

- [EKEventViewAction](../ekeventviewaction.md): Describes the action taken to close the event view controller.

# eventViewController:didCompleteWithAction: (Objective-C)

**Framework:** EventKit UI  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Invoked when closing the event view controller.

## Declaration

```objectivec
- (void) eventViewController:(EKEventViewController *) controller didCompleteWithAction:(EKEventViewAction) action;
```

## Parameters

- `controller`: The event view controller to close.
- `action`: The action taken to prompt closing the event view controller. See [EKEventViewAction](../ekeventviewaction.md) for a list of possible values.

## See Also

### Responding to the Interface’s Dismissal

- [EKEventViewAction](../ekeventviewaction.md): Describes the action taken to close the event view controller.
