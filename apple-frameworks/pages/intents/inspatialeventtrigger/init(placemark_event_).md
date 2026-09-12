> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inspatialeventtrigger/init(placemark:event:)](https://developer.apple.com/documentation/intents/inspatialeventtrigger/init(placemark:event:))

# init(placemark:event:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Initializes the event trigger with the specified location-based information.

## Declaration

```swift
init(placemark: CLPlacemark, event: INSpatialEvent)
```

## Parameters

- `placemark`: The location for which events are triggered.
- `event`: A constant indicating whether events are delivered when arriving or leaving the specified location.

<a id="return-value"></a>

## Return Value

An initialized event trigger object or `nil` if the object could not be created.

# initWithPlacemark:event: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 4.0+

Initializes the event trigger with the specified location-based information.

## Declaration

```objectivec
- (instancetype) initWithPlacemark:(CLPlacemark *) placemark event:(INSpatialEvent) event;
```

## Parameters

- `placemark`: The location for which events are triggered.
- `event`: A constant indicating whether events are delivered when arriving or leaving the specified location.

<a id="return-value"></a>

## Return Value

An initialized event trigger object or `nil` if the object could not be created.
