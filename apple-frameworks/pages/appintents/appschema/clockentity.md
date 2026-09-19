> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/appschema/clockentity

# AppSchema.ClockEntity

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Identifies entity schemas in the clock domain.

## Declaration

```swift
protocol ClockEntity : AppSchema.Kind
```

## Topics

### Instance Properties

- [alarm](clockentity/alarm.md): An entity schema for an alarm.
- [stopwatch](clockentity/stopwatch.md): An entity schema for a stopwatch.
- [timer](clockentity/timer.md): An entity schema for a timer.

## Relationships

### Inherits From

- [AppSchema.Kind](kind.md)

### Conforming Types

- [AppSchema.Entity](entity.md)

## See Also

### Content and parameter types

- [alarm](clockentity/alarm.md): An entity schema for an alarm.
- [timer](clockentity/timer.md): An entity schema for a timer.
