> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplatedelegate/maptemplate(_:willsharedestinationfor:)](https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:willsharedestinationfor:))

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
