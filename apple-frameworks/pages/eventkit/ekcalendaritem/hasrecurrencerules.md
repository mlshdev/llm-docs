> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekcalendaritem/hasrecurrencerules](https://developer.apple.com/documentation/eventkit/ekcalendaritem/hasrecurrencerules)

# hasRecurrenceRules (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the calendar item has recurrence rules.

## Declaration

```swift
var hasRecurrenceRules: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the calendar item has recurrence rules; otherwise it does not.

<a id="Special-Considerations"></a>

### Special Considerations

The implementation only supports a single recurrence rule. Adding a recurrence rule replaces the single recurrence rule.

## See Also

### Setting Recurrence Rules

- [addRecurrenceRule(\_:)](addrecurrencerule%28__%29.md): Adds a recurrence rule to the recurrence rule array.
- [removeRecurrenceRule(\_:)](removerecurrencerule%28__%29.md): Removes a recurrence rule from the recurrence rule array.
- [recurrenceRules](recurrencerules.md): The recurrence rules for the calendar item.

# hasRecurrenceRules (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the calendar item has recurrence rules.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasRecurrenceRules;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the calendar item has recurrence rules; otherwise it does not.

<a id="Special-Considerations"></a>

### Special Considerations

The implementation only supports a single recurrence rule. Adding a recurrence rule replaces the single recurrence rule.

## See Also

### Setting Recurrence Rules

- [addRecurrenceRule:](addrecurrencerule%28__%29.md): Adds a recurrence rule to the recurrence rule array.
- [removeRecurrenceRule:](removerecurrencerule%28__%29.md): Removes a recurrence rule from the recurrence rule array.
- [recurrenceRules](recurrencerules.md): The recurrence rules for the calendar item.
