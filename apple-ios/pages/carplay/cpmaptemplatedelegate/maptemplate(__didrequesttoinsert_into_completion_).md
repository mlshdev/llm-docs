> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
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

# mapTemplate:didRequestToInsertWaypoint:intoSegment:completion: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Called when the built-in navigation system sends a waypoint to the device for a specific segment.

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate didRequestToInsertWaypoint:(CPNavigationWaypoint *) waypoint intoSegment:(CPRouteSegment *) segment completion:(void (^)(CPTravelEstimates *travelEstimates)) completion;
```
