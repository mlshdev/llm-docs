> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:willsharedestinationfor:)

# mapTemplate(\_:willShareDestinationFor:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Called when a trip’s destination is about to be shared to the vehicle

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, willShareDestinationFor trip: CPTrip)
```

# mapTemplate:willShareDestinationForTrip: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Called when a trip’s destination is about to be shared to the vehicle

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate willShareDestinationForTrip:(CPTrip *) trip;
```
