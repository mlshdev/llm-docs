> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/intask/spatialeventtrigger

# spatialEventTrigger (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

A location-based trigger that reminds the user to complete the task.

> INTask is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
@NSCopying var spatialEventTrigger: INSpatialEventTrigger? { get }
```

## See Also

### Getting the Event Triggers

- [temporalEventTrigger](temporaleventtrigger.md): Deprecated. A time-based trigger that reminds the user to complete the task.

# spatialEventTrigger (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

A location-based trigger that reminds the user to complete the task.

> INTask is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INSpatialEventTrigger * spatialEventTrigger;
```

```objectivec
@property (atomic, copy, readonly, nullable) INSpatialEventTrigger * spatialEventTrigger;
```

## See Also

### Getting the Event Triggers

- [temporalEventTrigger](temporaleventtrigger.md): Deprecated. A time-based trigger that reminds the user to complete the task.
