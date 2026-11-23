> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:waypoint:accepted:forsegment:)

# mapTemplate(\_:waypoint:accepted:forSegment:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Called when the user responds to a proposal to add a waypoint as a stop on their route. If the waypoint is accepted, perform a reroute to update the route accordingly for the specified segment to include this new destination.

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, waypoint: CPNavigationWaypoint, accepted: Bool, forSegment segment: CPRouteSegment?)
```

## See Also

### Adding and removing waypoints

- [mapTemplate(\_:didRequestToInsert:into:completion:)](maptemplate%28__didrequesttoinsert_into_completion_%29.md): Called when the built-in navigation system sends a waypoint to the device for a specific segment.
- [mapTemplate(\_:didRequestToRemove:)](maptemplate%28__didrequesttoremove_%29.md): Called when the user removes a waypoint. Perform a reroute to update the route accordingly.

# mapTemplate:mapTemplateWaypoint:accepted:forSegment: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Called when the user responds to a proposal to add a waypoint as a stop on their route. If the waypoint is accepted, perform a reroute to update the route accordingly for the specified segment to include this new destination.

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate mapTemplateWaypoint:(CPNavigationWaypoint *) waypoint accepted:(BOOL) accepted forSegment:(CPRouteSegment *) segment;
```

## See Also

### Adding and removing waypoints

- [mapTemplate:didRequestToInsertWaypoint:intoSegment:completion:](maptemplate%28__didrequesttoinsert_into_completion_%29.md): Called when the built-in navigation system sends a waypoint to the device for a specific segment.
- [mapTemplate:didRequestToRemoveWaypoint:](maptemplate%28__didrequesttoremove_%29.md): Called when the user removes a waypoint. Perform a reroute to update the route accordingly.
