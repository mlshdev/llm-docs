> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intraintrip/init(provider:trainname:trainnumber:tripduration:departurestationlocation:departureplatform:arrivalstationlocation:arrivalplatform:)](https://developer.apple.com/documentation/intents/intraintrip/init(provider:trainname:trainnumber:tripduration:departurestationlocation:departureplatform:arrivalstationlocation:arrivalplatform:))

# init(provider:trainName:trainNumber:tripDuration:departureStationLocation:departurePlatform:arrivalStationLocation:arrivalPlatform:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new train trip with the specified contents and attributes.

## Declaration

```swift
init(provider: String?, trainName: String?, trainNumber: String?, tripDuration: INDateComponentsRange, departureStationLocation: CLPlacemark, departurePlatform: String?, arrivalStationLocation: CLPlacemark, arrivalPlatform: String?)
```

## Parameters

- `provider`: The name for the train company.
- `trainName`: The name of the train. For example, “11 Coast Starlight”.
- `trainNumber`: The unique identifier for the train.
- `tripDuration`: The date and time range for the departure and arrival of the train.
- `departureStationLocation`: The station from which the train departs.
- `departurePlatform`: The platform from which the train departs.
- `arrivalStationLocation`: The station at which the train arrives.
- `arrivalPlatform`: The platform at which the train arrives.

<a id="return-value"></a>

## Return Value

A new [INTrainTrip](../intraintrip.md) object or `nil` if unable to create one.

# initWithProvider:trainName:trainNumber:tripDuration:departureStationLocation:departurePlatform:arrivalStationLocation:arrivalPlatform: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new train trip with the specified contents and attributes.

## Declaration

```objectivec
- (instancetype) initWithProvider:(NSString *) provider trainName:(NSString *) trainName trainNumber:(NSString *) trainNumber tripDuration:(INDateComponentsRange *) tripDuration departureStationLocation:(CLPlacemark *) departureStationLocation departurePlatform:(NSString *) departurePlatform arrivalStationLocation:(CLPlacemark *) arrivalStationLocation arrivalPlatform:(NSString *) arrivalPlatform;
```

## Parameters

- `provider`: The name for the train company.
- `trainName`: The name of the train. For example, “11 Coast Starlight”.
- `trainNumber`: The unique identifier for the train.
- `tripDuration`: The date and time range for the departure and arrival of the train.
- `departureStationLocation`: The station from which the train departs.
- `departurePlatform`: The platform from which the train departs.
- `arrivalStationLocation`: The station at which the train arrives.
- `arrivalPlatform`: The platform at which the train arrives.

<a id="return-value"></a>

## Return Value

A new [INTrainTrip](../intraintrip.md) object or `nil` if unable to create one.
