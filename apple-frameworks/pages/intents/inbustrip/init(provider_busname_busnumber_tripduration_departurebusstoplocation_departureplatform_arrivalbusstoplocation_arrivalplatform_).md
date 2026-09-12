> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbustrip/init(provider:busname:busnumber:tripduration:departurebusstoplocation:departureplatform:arrivalbusstoplocation:arrivalplatform:)](https://developer.apple.com/documentation/intents/inbustrip/init(provider:busname:busnumber:tripduration:departurebusstoplocation:departureplatform:arrivalbusstoplocation:arrivalplatform:))

# init(provider:busName:busNumber:tripDuration:departureBusStopLocation:departurePlatform:arrivalBusStopLocation:arrivalPlatform:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a bus trip with the specified contents and attributes.

## Declaration

```swift
init(provider: String?, busName: String?, busNumber: String?, tripDuration: INDateComponentsRange, departureBusStopLocation: CLPlacemark, departurePlatform: String?, arrivalBusStopLocation: CLPlacemark, arrivalPlatform: String?)
```

## Parameters

- `provider`: The operator of the bus line.
- `busName`: The name of the bus.
- `busNumber`: The bus number.
- `tripDuration`: The timespan of the bus trip from departure to arrival.
- `departureBusStopLocation`: The bus stop where the bus trip starts.
- `departurePlatform`: The platform from which the bus departs.
- `arrivalBusStopLocation`: The bus stop where the bus trip ends.
- `arrivalPlatform`: The platform at which the bus arrives.

<a id="return-value"></a>

## Return Value

A new [INBusTrip](../inbustrip.md) object or `nil` if the initializer can’t create one.

# initWithProvider:busName:busNumber:tripDuration:departureBusStopLocation:departurePlatform:arrivalBusStopLocation:arrivalPlatform: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a bus trip with the specified contents and attributes.

## Declaration

```objectivec
- (instancetype) initWithProvider:(NSString *) provider busName:(NSString *) busName busNumber:(NSString *) busNumber tripDuration:(INDateComponentsRange *) tripDuration departureBusStopLocation:(CLPlacemark *) departureBusStopLocation departurePlatform:(NSString *) departurePlatform arrivalBusStopLocation:(CLPlacemark *) arrivalBusStopLocation arrivalPlatform:(NSString *) arrivalPlatform;
```

## Parameters

- `provider`: The operator of the bus line.
- `busName`: The name of the bus.
- `busNumber`: The bus number.
- `tripDuration`: The timespan of the bus trip from departure to arrival.
- `departureBusStopLocation`: The bus stop where the bus trip starts.
- `departurePlatform`: The platform from which the bus departs.
- `arrivalBusStopLocation`: The bus stop where the bus trip ends.
- `arrivalPlatform`: The platform at which the bus arrives.

<a id="return-value"></a>

## Return Value

A new [INBusTrip](../inbustrip.md) object or `nil` if the initializer can’t create one.
