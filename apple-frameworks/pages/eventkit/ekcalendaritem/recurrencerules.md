> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekcalendaritem/recurrencerules](https://developer.apple.com/documentation/eventkit/ekcalendaritem/recurrencerules)

# recurrenceRules (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The recurrence rules for the calendar item.

## Declaration

```swift
var recurrenceRules: [EKRecurrenceRule]? { get set }
```

<a id="Discussion"></a>

## Discussion

The implementation only supports a single recurrence rule.

## See Also

### Setting Recurrence Rules

- [hasRecurrenceRules](hasrecurrencerules.md): A Boolean value that indicates whether the calendar item has recurrence rules.
- [addRecurrenceRule(\_:)](addrecurrencerule%28__%29.md): Adds a recurrence rule to the recurrence rule array.
- [removeRecurrenceRule(\_:)](removerecurrencerule%28__%29.md): Removes a recurrence rule from the recurrence rule array.

# recurrenceRules (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The recurrence rules for the calendar item.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<EKRecurrenceRule *> * recurrenceRules;
```

<a id="Discussion"></a>

## Discussion

The implementation only supports a single recurrence rule.

## See Also

### Setting Recurrence Rules

- [hasRecurrenceRules](hasrecurrencerules.md): A Boolean value that indicates whether the calendar item has recurrence rules.
- [addRecurrenceRule:](addrecurrencerule%28__%29.md): Adds a recurrence rule to the recurrence rule array.
- [removeRecurrenceRule:](removerecurrencerule%28__%29.md): Removes a recurrence rule from the recurrence rule array.
