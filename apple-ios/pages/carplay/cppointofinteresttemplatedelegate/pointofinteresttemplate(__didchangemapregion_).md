> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cppointofinteresttemplatedelegate/pointofinteresttemplate(_:didchangemapregion:)](https://developer.apple.com/documentation/carplay/cppointofinteresttemplatedelegate/pointofinteresttemplate(_:didchangemapregion:))

# pointOfInterestTemplate(\_:didChangeMapRegion:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Tells the delegate about changes to the visible region of the template’s map.

## Declaration

```swift
func pointOfInterestTemplate(_ pointOfInterestTemplate: CPPointOfInterestTemplate, didChangeMapRegion region: MKCoordinateRegion)
```

## Parameters

- `region`: The map’s new visible region.

<a id="Discussion"></a>

## Discussion

CarPlay calls this method whenever the user pans the template’s map and its visible region changes. In response, re-evaluate which points of interest are relevant to the new region and, if necessary, call [setPointsOfInterest(\_:selectedIndex:)](../cppointofinteresttemplate/setpointsofinterest%28__selectedindex_%29.md) to update the template.

# pointOfInterestTemplate:didChangeMapRegion: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Tells the delegate about changes to the visible region of the template’s map.

## Declaration

```objectivec
- (void) pointOfInterestTemplate:(CPPointOfInterestTemplate *) pointOfInterestTemplate didChangeMapRegion:(MKCoordinateRegion) region;
```

## Parameters

- `region`: The map’s new visible region.

<a id="Discussion"></a>

## Discussion

CarPlay calls this method whenever the user pans the template’s map and its visible region changes. In response, re-evaluate which points of interest are relevant to the new region and, if necessary, call [setPointsOfInterest:selectedIndex:](../cppointofinteresttemplate/setpointsofinterest%28__selectedindex_%29.md) to update the template.
