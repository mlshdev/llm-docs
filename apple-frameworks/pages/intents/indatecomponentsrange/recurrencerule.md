> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/indatecomponentsrange/recurrencerule

# recurrenceRule (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The rule for repeating the date range.

## Declaration

```swift
@NSCopying var recurrenceRule: INRecurrenceRule? { get }
```

## See Also

### Getting Recurring Date Information

- [ekRecurrenceRule()](ekrecurrencerule%28%29.md): Returns an Event Kit recurrence rule that matches the available information.

# recurrenceRule (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 4.0+

The rule for repeating the date range.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INRecurrenceRule * recurrenceRule;
```

```objectivec
@property (atomic, copy, readonly, nullable) INRecurrenceRule * recurrenceRule;
```

## See Also

### Getting Recurring Date Information

- [EKRecurrenceRule](ekrecurrencerule%28%29.md): Returns an Event Kit recurrence rule that matches the available information.
