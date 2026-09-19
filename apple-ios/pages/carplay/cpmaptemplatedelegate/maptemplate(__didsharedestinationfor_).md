> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:didsharedestinationfor:)

# mapTemplate(\_:didShareDestinationFor:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Called when a vehicle successfully handled a shared trip’s destination

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, didShareDestinationFor trip: CPTrip)
```

# mapTemplate:didShareDestinationForTrip: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Called when a vehicle successfully handled a shared trip’s destination

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate didShareDestinationForTrip:(CPTrip *) trip;
```
