> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:didrequesttoinsert:into:completion:)

# mapTemplate(\_:didRequestToInsert:into:completion:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Called when the built-in navigation system sends a waypoint to the device for a specific segment.

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, didRequestToInsert waypoint: CPNavigationWaypoint, into segment: CPRouteSegment, completion: @escaping (CPTravelEstimates) -> Void)
```

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, didRequestToInsert waypoint: CPNavigationWaypoint, into segment: CPRouteSegment) async -> CPTravelEstimates
```

## See Also

### Adding and removing waypoints

- [mapTemplate(\_:didRequestToRemove:)](maptemplate%28__didrequesttoremove_%29.md): Called when the user removes a waypoint. Perform a reroute to update the route accordingly.
- [mapTemplate(\_:waypoint:accepted:forSegment:)](maptemplate%28__waypoint_accepted_forsegment_%29.md): Called when the user responds to a proposal to add a waypoint as a stop on their route. If the waypoint is accepted, perform a reroute to update the route accordingly for the specified segment to include this new destination.

# mapTemplate:didRequestToInsertWaypoint:intoSegment:completion: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Called when the built-in navigation system sends a waypoint to the device for a specific segment.

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate didRequestToInsertWaypoint:(CPNavigationWaypoint *) waypoint intoSegment:(CPRouteSegment *) segment completion:(void (^)(CPTravelEstimates *travelEstimates)) completion;
```

## See Also

### Adding and removing waypoints

- [mapTemplate:didRequestToRemoveWaypoint:](maptemplate%28__didrequesttoremove_%29.md): Called when the user removes a waypoint. Perform a reroute to update the route accordingly.
- [mapTemplate:mapTemplateWaypoint:accepted:forSegment:](maptemplate%28__waypoint_accepted_forsegment_%29.md): Called when the user responds to a proposal to add a waypoint as a stop on their route. If the waypoint is accepted, perform a reroute to update the route accordingly for the specified segment to include this new destination.
