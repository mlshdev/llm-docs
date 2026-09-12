> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptrip/init(origin:destination:routechoices:)](https://developer.apple.com/documentation/carplay/cptrip/init(origin:destination:routechoices:))

# init(origin:destination:routeChoices:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 12.0+ (deprecated in 26.4) · iPadOS 12.0+ (deprecated in 26.4) · Mac Catalyst 13.1+ (deprecated in 26.4)

Creates a trip with an origin, destination, and route choices.

## Declaration

```swift
convenience init(origin: MKMapItem, destination: MKMapItem, routeChoices: [CPRouteChoice])
```

## Parameters

- `origin`: The trip’s origin.
- `destination`: The trip’s destination.
- `routeChoices`: Up to three route choices available for the trip.

<a id="return-value"></a>

## Return Value

A newly initialized trip.

## See Also

### Creating a Trip

- [CPRouteChoice](../cproutechoice.md): A possible route for a trip.

# initWithOrigin:destination:routeChoices: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 26.4) · iPadOS 12.0+ (deprecated in 26.4) · Mac Catalyst 13.1+ (deprecated in 26.4)

Creates a trip with an origin, destination, and route choices.

## Declaration

```objectivec
- (instancetype) initWithOrigin:(MKMapItem *) origin destination:(MKMapItem *) destination routeChoices:(NSArray<CPRouteChoice *> *) routeChoices;
```

## Parameters

- `origin`: The trip’s origin.
- `destination`: The trip’s destination.
- `routeChoices`: Up to three route choices available for the trip.

<a id="return-value"></a>

## Return Value

A newly initialized trip.

## See Also

### Creating a Trip

- [CPRouteChoice](../cproutechoice.md): A possible route for a trip.
