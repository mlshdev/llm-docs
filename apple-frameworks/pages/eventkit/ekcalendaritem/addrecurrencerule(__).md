> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekcalendaritem/addrecurrencerule(_:)](https://developer.apple.com/documentation/eventkit/ekcalendaritem/addrecurrencerule(_:))

# addRecurrenceRule(\_:) (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Adds a recurrence rule to the recurrence rule array.

## Declaration

```swift
func addRecurrenceRule(_ rule: EKRecurrenceRule)
```

## Parameters

- `rule`: The rule to be added to [recurrenceRules](recurrencerules.md).

## Mentioned In

- [Creating a recurring event](../creating-a-recurring-event.md)
- [Creating events and reminders](../creating-events-and-reminders.md)

<a id="Discussion"></a>

## Discussion

The implementation only supports a single recurrence rule. Adding a recurrence rule replaces the single recurrence rule.

## See Also

### Setting Recurrence Rules

- [hasRecurrenceRules](hasrecurrencerules.md): A Boolean value that indicates whether the calendar item has recurrence rules.
- [removeRecurrenceRule(\_:)](removerecurrencerule%28__%29.md): Removes a recurrence rule from the recurrence rule array.
- [recurrenceRules](recurrencerules.md): The recurrence rules for the calendar item.

# addRecurrenceRule: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Adds a recurrence rule to the recurrence rule array.

## Declaration

```objectivec
- (void) addRecurrenceRule:(EKRecurrenceRule *) rule;
```

## Parameters

- `rule`: The rule to be added to [recurrenceRules](recurrencerules.md).

## Mentioned In

- [Creating a recurring event](../creating-a-recurring-event.md)
- [Creating events and reminders](../creating-events-and-reminders.md)

<a id="Discussion"></a>

## Discussion

The implementation only supports a single recurrence rule. Adding a recurrence rule replaces the single recurrence rule.

## See Also

### Setting Recurrence Rules

- [hasRecurrenceRules](hasrecurrencerules.md): A Boolean value that indicates whether the calendar item has recurrence rules.
- [removeRecurrenceRule:](removerecurrencerule%28__%29.md): Removes a recurrence rule from the recurrence rule array.
- [recurrenceRules](recurrencerules.md): The recurrence rules for the calendar item.
