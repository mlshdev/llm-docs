> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplatedelegate/maptemplate(_:waypoint:accepted:forsegment:)](https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:waypoint:accepted:forsegment:))

# mapTemplate(\_:waypoint:accepted:forSegment:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Called when the user responds to a proposal to add a waypoint as a stop on their route. If the waypoint is accepted, perform a reroute to update the route accordingly for the specified segment to include this new destination.

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, waypoint: CPNavigationWaypoint, accepted: Bool, forSegment segment: CPRouteSegment?)
```

# mapTemplate:mapTemplateWaypoint:accepted:forSegment: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Called when the user responds to a proposal to add a waypoint as a stop on their route. If the waypoint is accepted, perform a reroute to update the route accordingly for the specified segment to include this new destination.

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate mapTemplateWaypoint:(CPNavigationWaypoint *) waypoint accepted:(BOOL) accepted forSegment:(CPRouteSegment *) segment;
```
