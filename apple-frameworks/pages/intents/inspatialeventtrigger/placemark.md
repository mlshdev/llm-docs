> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inspatialeventtrigger/placemark](https://developer.apple.com/documentation/intents/inspatialeventtrigger/placemark)

# placemark (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The location that triggers an event.

## Declaration

```swift
@NSCopying var placemark: CLPlacemark { get }
```

<a id="Discussion"></a>

## Discussion

This property is set automatically at initialization time and can’t be changed later.

## See Also

### Getting the Trigger Condition

- [event](event.md): The conditions which trigger an event for the specified location.
- [INSpatialEvent](../inspatialevent.md): Constants indicating when to deliver location-related events.

# placemark (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

The location that triggers an event.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) CLPlacemark * placemark;
```

```objectivec
@property (atomic, copy, readonly) CLPlacemark * placemark;
```

<a id="Discussion"></a>

## Discussion

This property is set automatically at initialization time and can’t be changed later.

## See Also

### Getting the Trigger Condition

- [event](event.md): The conditions which trigger an event for the specified location.
- [INSpatialEvent](../inspatialevent.md): Constants indicating when to deliver location-related events.
