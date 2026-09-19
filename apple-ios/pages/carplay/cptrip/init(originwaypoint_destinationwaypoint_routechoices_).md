> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cptrip/init(originwaypoint:destinationwaypoint:routechoices:)

# init(originWaypoint:destinationWaypoint:routeChoices:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Initialize a @c CPTrip with an origin waypoint, destination waypoint, and route choices.

## Declaration

```swift
init(originWaypoint origin: CPNavigationWaypoint, destinationWaypoint destination: CPNavigationWaypoint, routeChoices: [CPRouteChoice])
```

# initWithOriginWaypoint:destinationWaypoint:routeChoices: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Initialize a @c CPTrip with an origin waypoint, destination waypoint, and route choices.

## Declaration

```objectivec
- (instancetype) initWithOriginWaypoint:(CPNavigationWaypoint *) origin destinationWaypoint:(CPNavigationWaypoint *) destination routeChoices:(NSArray<CPRouteChoice *> *) routeChoices;
```
