> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekcalendaritem/removerecurrencerule(_:)](https://developer.apple.com/documentation/eventkit/ekcalendaritem/removerecurrencerule(_:))

# removeRecurrenceRule(\_:) (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Removes a recurrence rule from the recurrence rule array.

## Declaration

```swift
func removeRecurrenceRule(_ rule: EKRecurrenceRule)
```

## Parameters

- `rule`: The rule to be removed from [recurrenceRules](recurrencerules.md).

<a id="Discussion"></a>

## Discussion

The implementation only supports a single recurrence rule.

## See Also

### Setting Recurrence Rules

- [hasRecurrenceRules](hasrecurrencerules.md): A Boolean value that indicates whether the calendar item has recurrence rules.
- [addRecurrenceRule(\_:)](addrecurrencerule%28__%29.md): Adds a recurrence rule to the recurrence rule array.
- [recurrenceRules](recurrencerules.md): The recurrence rules for the calendar item.

# removeRecurrenceRule: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Removes a recurrence rule from the recurrence rule array.

## Declaration

```objectivec
- (void) removeRecurrenceRule:(EKRecurrenceRule *) rule;
```

## Parameters

- `rule`: The rule to be removed from [recurrenceRules](recurrencerules.md).

<a id="Discussion"></a>

## Discussion

The implementation only supports a single recurrence rule.

## See Also

### Setting Recurrence Rules

- [hasRecurrenceRules](hasrecurrencerules.md): A Boolean value that indicates whether the calendar item has recurrence rules.
- [addRecurrenceRule:](addrecurrencerule%28__%29.md): Adds a recurrence rule to the recurrence rule array.
- [recurrenceRules](recurrencerules.md): The recurrence rules for the calendar item.
