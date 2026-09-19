> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:didrequesttoremovedestination:)

# mapTemplate(\_:didRequestToRemoveDestination:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Called when the user removes the waypoint corresponding to the trip’s destination. Perform a reroute to update both the trip and route accordingly.

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, didRequestToRemoveDestination waypoint: CPNavigationWaypoint)
```

# mapTemplate:didRequestToRemoveDestination: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Called when the user removes the waypoint corresponding to the trip’s destination. Perform a reroute to update both the trip and route accordingly.

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate didRequestToRemoveDestination:(CPNavigationWaypoint *) waypoint;
```
