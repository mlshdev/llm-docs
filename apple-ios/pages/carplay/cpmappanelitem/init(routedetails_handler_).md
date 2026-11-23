> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmappanelitem/init(routedetails:handler:)

# init(routeDetails:handler:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a map panel item with route details.

## Declaration

```swift
init(routeDetails: [CPRouteDetail], handler: ((CPMapPanelItem, @escaping () -> Void) -> Void)? = nil)
```

## Parameters

- `routeDetails`: The route detail that helps someone make an informed decision about their journey.
- `handler`: A closure you use to respond when someone taps or selects the item. The closure takes the map panel item as a parameter and returns no value. Specify `nil` if you don’t want to respond to interactions with the item.

<a id="return-value"></a>

## Return Value

A map panel item initialized with route details.

<a id="discussion"></a>

## Discussion

For this type of item, the map panel displays up to four route details per item.

## See Also

### Creating map panel items

- [init(trip:handler:)](init%28trip_handler_%29.md): Creates a map panel item with trip-related details.
- [init(travelEstimates:handler:)](init%28travelestimates_handler_%29.md): Creates a map panel item with travel estimate information.
- [init(routeChoice:handler:)](init%28routechoice_handler_%29.md): Creates a map panel item with one of the route choices available for a trip.
- [init(chargingStationConnection:handler:)](init%28chargingstationconnection_handler_%29.md): Creates a map panel item with charging connection details.
- [init(mapTemplateWaypoint:image:handler:)](init%28maptemplatewaypoint_image_handler_%29.md): Creates a map panel item with waypoint information.

# initWithRouteDetails:handler: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Creates a map panel item with route details.

## Declaration

```objectivec
- (instancetype) initWithRouteDetails:(NSArray<CPRouteDetail *> *) routeDetails handler:(void (^)(CPMapPanelItem *item, dispatch_block_t completionBlock)) handler;
```

## Parameters

- `routeDetails`: The route detail that helps someone make an informed decision about their journey.
- `handler`: A closure you use to respond when someone taps or selects the item. The closure takes the map panel item as a parameter and returns no value. Specify `nil` if you don’t want to respond to interactions with the item.

<a id="return-value"></a>

## Return Value

A map panel item initialized with route details.

<a id="discussion"></a>

## Discussion

For this type of item, the map panel displays up to four route details per item.

## See Also

### Creating map panel items

- [initWithTrip:handler:](init%28trip_handler_%29.md): Creates a map panel item with trip-related details.
- [initWithTravelEstimates:handler:](init%28travelestimates_handler_%29.md): Creates a map panel item with travel estimate information.
- [initWithRouteChoice:handler:](init%28routechoice_handler_%29.md): Creates a map panel item with one of the route choices available for a trip.
- [initWithChargingStationConnection:handler:](init%28chargingstationconnection_handler_%29.md): Creates a map panel item with charging connection details.
- [initWithMapTemplateWaypoint:image:handler:](init%28maptemplatewaypoint_image_handler_%29.md): Creates a map panel item with waypoint information.
