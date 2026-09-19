> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/calendar/component/weekdayordinal

# Calendar.Component.weekdayOrdinal

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Identifier for the weekday ordinal unit.

## Declaration

```swift
case weekdayOrdinal
```

<a id="Discussion"></a>

## Discussion

The weekday ordinal unit describes ordinal position within the month unit of the corresponding weekday unit. For example, in the Gregorian calendar a weekday ordinal unit of `2` for a weekday unit `3` indicates “the second Tuesday in the month”.

## See Also

### Specifying Weeks and Days

- [Calendar.Component.weekOfYear](weekofyear.md): Identifier for the week of the year unit.
- [Calendar.Component.weekOfMonth](weekofmonth.md): Identifier for the week of the month calendar unit.
- [Calendar.Component.weekday](weekday.md): Identifier for the weekday unit.
- [Calendar.Component.day](day.md): Identifier for the day unit.
