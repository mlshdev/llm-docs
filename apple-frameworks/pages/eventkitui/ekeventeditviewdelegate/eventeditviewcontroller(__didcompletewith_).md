> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkitui/ekeventeditviewdelegate/eventeditviewcontroller(_:didcompletewith:)](https://developer.apple.com/documentation/eventkitui/ekeventeditviewdelegate/eventeditviewcontroller(_:didcompletewith:))

# eventEditViewController(\_:didCompleteWith:) (Swift)

**Framework:** EventKit UI  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Invoked when the user finishes editing an event.

## Declaration

```swift
func eventEditViewController(_ controller: EKEventEditViewController, didCompleteWith action: EKEventEditViewAction)
```

## Parameters

- `controller`: The edit view controller presenting the event.
- `action`: The action the user took to end editing.

<a id="Discussion"></a>

## Discussion

Implement this method to dismiss the modal event edit view controller.

## See Also

### Finishing an Edit

- [EKEventEditViewAction](../ekeventeditviewaction.md): The action taken by the user after editing an event.

# eventEditViewController:didCompleteWithAction: (Objective-C)

**Framework:** EventKit UI  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

Invoked when the user finishes editing an event.

## Declaration

```objectivec
- (void) eventEditViewController:(EKEventEditViewController *) controller didCompleteWithAction:(EKEventEditViewAction) action;
```

## Parameters

- `controller`: The edit view controller presenting the event.
- `action`: The action the user took to end editing.

<a id="Discussion"></a>

## Discussion

Implement this method to dismiss the modal event edit view controller.

## See Also

### Finishing an Edit

- [EKEventEditViewAction](../ekeventeditviewaction.md): The action taken by the user after editing an event.
