> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationsession/resumetrip(updatedroutesegments:currentsegment:reroutereason:)](https://developer.apple.com/documentation/carplay/cpnavigationsession/resumetrip(updatedroutesegments:currentsegment:reroutereason:))

# resumeTrip(updatedRouteSegments:currentSegment:rerouteReason:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Resume the current trip with updated route segments

## Declaration

```swift
func resumeTrip(updatedRouteSegments routeSegments: [CPRouteSegment], currentSegment: CPRouteSegment, rerouteReason: CPRerouteReason)
```

## Parameters

- `routeSegments`: The updated route segments for the current trip
- `currentSegment`: The current route segment
- `rerouteReason`: The reason for the reroute

# resumeTripWithUpdatedRouteSegments:currentSegment:rerouteReason: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Resume the current trip with updated route segments

## Declaration

```objectivec
- (void) resumeTripWithUpdatedRouteSegments:(NSArray<CPRouteSegment *> *) routeSegments currentSegment:(CPRouteSegment *) currentSegment rerouteReason:(CPRerouteReason) rerouteReason;
```

## Parameters

- `routeSegments`: The updated route segments for the current trip
- `currentSegment`: The current route segment
- `rerouteReason`: The reason for the reroute
