> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indatecomponentsrange/ekrecurrencerule()](https://developer.apple.com/documentation/intents/indatecomponentsrange/ekrecurrencerule())

# ekRecurrenceRule() (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns an Event Kit recurrence rule that matches the available information.

## Declaration

```swift
func ekRecurrenceRule() -> EKRecurrenceRule?
```

<a id="return-value"></a>

## Return Value

The recurrence rule that matches the recurring date range, or nil if the date components range does not specify a recurring time.

<a id="Discussion"></a>

## Discussion

If you initialized the date components range with a recurrence rule, use this method to specify that rule in a format that is accepted by Event Kit classes.

## See Also

### Getting Recurring Date Information

- [recurrenceRule](recurrencerule.md): The rule for repeating the date range.

# EKRecurrenceRule (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 4.0+

Returns an Event Kit recurrence rule that matches the available information.

## Declaration

```objectivec
- (EKRecurrenceRule *) EKRecurrenceRule;
```

<a id="return-value"></a>

## Return Value

The recurrence rule that matches the recurring date range, or nil if the date components range does not specify a recurring time.

<a id="Discussion"></a>

## Discussion

If you initialized the date components range with a recurrence rule, use this method to specify that rule in a format that is accepted by Event Kit classes.

## See Also

### Getting Recurring Date Information

- [recurrenceRule](recurrencerule.md): The rule for repeating the date range.
