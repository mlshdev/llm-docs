> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplatedelegate/maptemplate(_:didfailtosharedestinationfor:error:)](https://developer.apple.com/documentation/carplay/cpmaptemplatedelegate/maptemplate(_:didfailtosharedestinationfor:error:))

# mapTemplate(\_:didFailToShareDestinationFor:error:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Called when a vehicle failed to handle a shared trip’s destination

## Declaration

```swift
optional func mapTemplate(_ mapTemplate: CPMapTemplate, didFailToShareDestinationFor trip: CPTrip, error: any Error)
```

# mapTemplate:didFailToShareDestinationForTrip:error: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Called when a vehicle failed to handle a shared trip’s destination

## Declaration

```objectivec
- (void) mapTemplate:(CPMapTemplate *) mapTemplate didFailToShareDestinationForTrip:(CPTrip *) trip error:(NSError *) error;
```
