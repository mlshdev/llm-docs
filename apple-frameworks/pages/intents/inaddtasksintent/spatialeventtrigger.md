> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inaddtasksintent/spatialeventtrigger

# spatialEventTrigger (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The location-based trigger to associate with each of the new tasks.

> INAddTasksIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
@NSCopying var spatialEventTrigger: INSpatialEventTrigger? { get }
```

<a id="Discussion"></a>

## Discussion

Assign the specified trigger, if any, to all of the tasks that you create.

## See Also

### Getting the Trigger Information

- [temporalEventTrigger](temporaleventtrigger.md): Deprecated. The time-based trigger to associate with each of the new tasks.

# spatialEventTrigger (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The location-based trigger to associate with each of the new tasks.

> INAddTasksIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INSpatialEventTrigger * spatialEventTrigger;
```

```objectivec
@property (atomic, copy, readonly, nullable) INSpatialEventTrigger * spatialEventTrigger;
```

<a id="Discussion"></a>

## Discussion

Assign the specified trigger, if any, to all of the tasks that you create.

## See Also

### Getting the Trigger Information

- [temporalEventTrigger](temporaleventtrigger.md): Deprecated. The time-based trigger to associate with each of the new tasks.
