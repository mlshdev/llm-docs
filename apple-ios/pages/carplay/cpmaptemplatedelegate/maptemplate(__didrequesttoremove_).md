> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:didrequesttoremove:)

# mapTemplate(\_:didRequestToRemove:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Called when the user removes a waypoint. Perform a reroute to update the route accordingly.

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, didRequestToRemove waypoint: CPNavigationWaypoint)
```

## See Also

### Adding and removing waypoints

- [mapTemplate(\_:didRequestToInsert:into:completion:)](maptemplate%28__didrequesttoinsert_into_completion_%29.md): Called when the built-in navigation system sends a waypoint to the device for a specific segment.
- [mapTemplate(\_:waypoint:accepted:forSegment:)](maptemplate%28__waypoint_accepted_forsegment_%29.md): Called when the user responds to a proposal to add a waypoint as a stop on their route. If the waypoint is accepted, perform a reroute to update the route accordingly for the specified segment to include this new destination.

# mapTemplate:didRequestToRemoveWaypoint: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Called when the user removes a waypoint. Perform a reroute to update the route accordingly.

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate didRequestToRemoveWaypoint:(CPNavigationWaypoint *) waypoint;
```

## See Also

### Adding and removing waypoints

- [mapTemplate:didRequestToInsertWaypoint:intoSegment:completion:](maptemplate%28__didrequesttoinsert_into_completion_%29.md): Called when the built-in navigation system sends a waypoint to the device for a specific segment.
- [mapTemplate:mapTemplateWaypoint:accepted:forSegment:](maptemplate%28__waypoint_accepted_forsegment_%29.md): Called when the user responds to a proposal to add a waypoint as a stop on their route. If the waypoint is accepted, perform a reroute to update the route accordingly for the specified segment to include this new destination.
