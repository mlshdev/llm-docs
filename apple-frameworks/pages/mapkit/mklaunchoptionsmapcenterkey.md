> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklaunchoptionsmapcenterkey](https://developer.apple.com/documentation/mapkit/mklaunchoptionsmapcenterkey)

# MKLaunchOptionsMapCenterKey (Swift)

**Framework:** MapKit  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+ · watchOS 2.0+

The coordinate value on which to center the map.

## Declaration

```swift
let MKLaunchOptionsMapCenterKey: String
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSValue](../foundation/nsvalue.md) object that contains an encoded [CLLocationCoordinate2D](../corelocation/cllocationcoordinate2d.md) structure.

## See Also

### Launch options

- [MKLaunchOptionsCameraKey](mklaunchoptionscamerakey.md): The virtual camera to use for viewing the map.
- [MKLaunchOptionsDirectionsModeCycling](mklaunchoptionsdirectionsmodecycling.md): Cycling directions between the specified start and end points.
- [MKLaunchOptionsDirectionsModeDefault](mklaunchoptionsdirectionsmodedefault.md): Directions that match the user’s preferred transportation type.
- [MKLaunchOptionsDirectionsModeDriving](mklaunchoptionsdirectionsmodedriving.md): Driving directions between the specified start and end points.
- [MKLaunchOptionsDirectionsModeKey](mklaunchoptionsdirectionsmodekey.md): The mode of transportation.
- [MKLaunchOptionsDirectionsModeTransit](mklaunchoptionsdirectionsmodetransit.md): Public transit directions between the specified start and end points.
- [MKLaunchOptionsDirectionsModeWalking](mklaunchoptionsdirectionsmodewalking.md): Walking directions between the specified start and end points.
- [MKLaunchOptionsMapSpanKey](mklaunchoptionsmapspankey.md): The amount of the map to display.
- [MKLaunchOptionsMapTypeKey](mklaunchoptionsmaptypekey.md): The type of map (standard, satellite, or hybrid) to display.
- [MKLaunchOptionsShowsTrafficKey](mklaunchoptionsshowstraffickey.md): A Boolean value that indicates whether to display traffic information.

# MKLaunchOptionsMapCenterKey (Objective-C)

**Framework:** MapKit  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+ · watchOS 2.0+

The coordinate value on which to center the map.

## Declaration

```objectivec
extern NSString * const MKLaunchOptionsMapCenterKey;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSValue](../foundation/nsvalue.md) object that contains an encoded [CLLocationCoordinate2D](../corelocation/cllocationcoordinate2d.md) structure.

## See Also

### Launch options

- [MKLaunchOptionsCameraKey](mklaunchoptionscamerakey.md): The virtual camera to use for viewing the map.
- [MKLaunchOptionsDirectionsModeCycling](mklaunchoptionsdirectionsmodecycling.md): Cycling directions between the specified start and end points.
- [MKLaunchOptionsDirectionsModeDefault](mklaunchoptionsdirectionsmodedefault.md): Directions that match the user’s preferred transportation type.
- [MKLaunchOptionsDirectionsModeDriving](mklaunchoptionsdirectionsmodedriving.md): Driving directions between the specified start and end points.
- [MKLaunchOptionsDirectionsModeKey](mklaunchoptionsdirectionsmodekey.md): The mode of transportation.
- [MKLaunchOptionsDirectionsModeTransit](mklaunchoptionsdirectionsmodetransit.md): Public transit directions between the specified start and end points.
- [MKLaunchOptionsDirectionsModeWalking](mklaunchoptionsdirectionsmodewalking.md): Walking directions between the specified start and end points.
- [MKLaunchOptionsMapSpanKey](mklaunchoptionsmapspankey.md): The amount of the map to display.
- [MKLaunchOptionsMapTypeKey](mklaunchoptionsmaptypekey.md): The type of map (standard, satellite, or hybrid) to display.
- [MKLaunchOptionsShowsTrafficKey](mklaunchoptionsshowstraffickey.md): A Boolean value that indicates whether to display traffic information.
