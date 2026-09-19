> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
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

# mapTemplate:didRequestToRemoveWaypoint: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Called when the user removes a waypoint. Perform a reroute to update the route accordingly.

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate didRequestToRemoveWaypoint:(CPNavigationWaypoint *) waypoint;
```
