> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insettaskattributeintent/temporaleventtrigger](https://developer.apple.com/documentation/intents/insettaskattributeintent/temporaleventtrigger)

# temporalEventTrigger (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The time-based trigger to apply to the task.

> INSetTaskAttributeIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
@NSCopying var temporalEventTrigger: INTemporalEventTrigger? { get }
```

<a id="Discussion"></a>

## Discussion

If no trigger information is available in this property, do not attempt to change the temporal trigger of the task.

## See Also

### Getting the Triggers

- [spatialEventTrigger](spatialeventtrigger.md): Deprecated. The location-based trigger to apply to the task.

# temporalEventTrigger (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The time-based trigger to apply to the task.

> INSetTaskAttributeIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INTemporalEventTrigger * temporalEventTrigger;
```

```objectivec
@property (atomic, copy, readonly, nullable) INTemporalEventTrigger * temporalEventTrigger;
```

<a id="Discussion"></a>

## Discussion

If no trigger information is available in this property, do not attempt to change the temporal trigger of the task.

## See Also

### Getting the Triggers

- [spatialEventTrigger](spatialeventtrigger.md): Deprecated. The location-based trigger to apply to the task.
