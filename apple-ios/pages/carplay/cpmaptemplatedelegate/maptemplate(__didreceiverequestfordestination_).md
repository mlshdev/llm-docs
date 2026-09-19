> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:didreceiverequestfordestination:)

# mapTemplate(\_:didReceiveRequestForDestination:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Called when a navigation request is received. Show a trip preview corresponding to this destination and start navigation if the destination is accepted by the user.

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, didReceiveRequestForDestination waypoint: CPNavigationWaypoint)
```

# mapTemplate:didReceiveRequestForDestination: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Called when a navigation request is received. Show a trip preview corresponding to this destination and start navigation if the destination is accepted by the user.

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate didReceiveRequestForDestination:(CPNavigationWaypoint *) waypoint;
```
