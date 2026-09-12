> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationsession/resumenavigation(updatedtrip:routesegments:currentsegment:reroutereason:)](https://developer.apple.com/documentation/carplay/cpnavigationsession/resumenavigation(updatedtrip:routesegments:currentsegment:reroutereason:))

# resumeNavigation(updatedTrip:routeSegments:currentSegment:rerouteReason:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Resume navigation with an updated trip and route segments for cases such as the trip destination changing.

## Declaration

```swift
func resumeNavigation(updatedTrip trip: CPTrip, routeSegments: [CPRouteSegment], currentSegment: CPRouteSegment, rerouteReason: CPRerouteReason)
```

## Parameters

- `trip`: The updated trip
- `routeSegments`: The updated route segments for the current trip
- `currentSegment`: The current route segment
- `rerouteReason`: The reason for the reroute

# resumeNavigationWithUpdatedTrip:routeSegments:currentSegment:rerouteReason: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Resume navigation with an updated trip and route segments for cases such as the trip destination changing.

## Declaration

```objectivec
- (void) resumeNavigationWithUpdatedTrip:(CPTrip *) trip routeSegments:(NSArray<CPRouteSegment *> *) routeSegments currentSegment:(CPRouteSegment *) currentSegment rerouteReason:(CPRerouteReason) rerouteReason;
```

## Parameters

- `trip`: The updated trip
- `routeSegments`: The updated route segments for the current trip
- `currentSegment`: The current route segment
- `rerouteReason`: The reason for the reroute
