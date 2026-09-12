> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inspatialeventtrigger/event](https://developer.apple.com/documentation/intents/inspatialeventtrigger/event)

# event (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The conditions which trigger an event for the specified location.

## Declaration

```swift
var event: INSpatialEvent { get }
```

<a id="Discussion"></a>

## Discussion

The user can trigger events when they leave or arrive at the specified location. This property is set at automatically at initialization time and cacan’tnnot be changed later.

## See Also

### Getting the Trigger Condition

- [placemark](placemark.md): The location that triggers an event.
- [INSpatialEvent](../inspatialevent.md): Constants indicating when to deliver location-related events.

# event (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The conditions which trigger an event for the specified location.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INSpatialEvent event;
```

```objectivec
@property (atomic, assign, readonly) INSpatialEvent event;
```

<a id="Discussion"></a>

## Discussion

The user can trigger events when they leave or arrive at the specified location. This property is set at automatically at initialization time and cacan’tnnot be changed later.

## See Also

### Getting the Trigger Condition

- [placemark](placemark.md): The location that triggers an event.
- [INSpatialEvent](../inspatialevent.md): Constants indicating when to deliver location-related events.
