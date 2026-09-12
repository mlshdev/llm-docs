> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insettaskattributeintent/spatialeventtrigger](https://developer.apple.com/documentation/intents/insettaskattributeintent/spatialeventtrigger)

# spatialEventTrigger (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The location-based trigger to apply to the task.

> INSetTaskAttributeIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
@NSCopying var spatialEventTrigger: INSpatialEventTrigger? { get }
```

<a id="Discussion"></a>

## Discussion

If no trigger information is available in this property, do not attempt to change the spatial trigger of the task.

## See Also

### Getting the Triggers

- [temporalEventTrigger](temporaleventtrigger.md): Deprecated. The time-based trigger to apply to the task.

# spatialEventTrigger (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The location-based trigger to apply to the task.

> INSetTaskAttributeIntent is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INSpatialEventTrigger * spatialEventTrigger;
```

```objectivec
@property (atomic, copy, readonly, nullable) INSpatialEventTrigger * spatialEventTrigger;
```

<a id="Discussion"></a>

## Discussion

If no trigger information is available in this property, do not attempt to change the spatial trigger of the task.

## See Also

### Getting the Triggers

- [temporalEventTrigger](temporaleventtrigger.md): Deprecated. The time-based trigger to apply to the task.
