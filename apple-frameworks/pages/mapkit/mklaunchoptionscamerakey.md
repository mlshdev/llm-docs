> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklaunchoptionscamerakey](https://developer.apple.com/documentation/mapkit/mklaunchoptionscamerakey)

# MKLaunchOptionsCameraKey (Swift)

**Framework:** MapKit  
**Kind:** Global Variable  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 2.0+

The virtual camera to use for viewing the map.

## Declaration

```swift
let MKLaunchOptionsCameraKey: String
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [MKMapCamera](mkmapcamera.md) object that describes a virtual camera that can specify a 3D perspective for the map. If you don’t specify this key, the Maps app uses its current settings to define the appearance of the map.

## See Also

### Launch options

- [MKLaunchOptionsDirectionsModeCycling](mklaunchoptionsdirectionsmodecycling.md): Cycling directions between the specified start and end points.
- [MKLaunchOptionsDirectionsModeDefault](mklaunchoptionsdirectionsmodedefault.md): Directions that match the user’s preferred transportation type.
- [MKLaunchOptionsDirectionsModeDriving](mklaunchoptionsdirectionsmodedriving.md): Driving directions between the specified start and end points.
- [MKLaunchOptionsDirectionsModeKey](mklaunchoptionsdirectionsmodekey.md): The mode of transportation.
- [MKLaunchOptionsDirectionsModeTransit](mklaunchoptionsdirectionsmodetransit.md): Public transit directions between the specified start and end points.
- [MKLaunchOptionsDirectionsModeWalking](mklaunchoptionsdirectionsmodewalking.md): Walking directions between the specified start and end points.
- [MKLaunchOptionsMapCenterKey](mklaunchoptionsmapcenterkey.md): The coordinate value on which to center the map.
- [MKLaunchOptionsMapSpanKey](mklaunchoptionsmapspankey.md): The amount of the map to display.
- [MKLaunchOptionsMapTypeKey](mklaunchoptionsmaptypekey.md): The type of map (standard, satellite, or hybrid) to display.
- [MKLaunchOptionsShowsTrafficKey](mklaunchoptionsshowstraffickey.md): A Boolean value that indicates whether to display traffic information.

# MKLaunchOptionsCameraKey (Objective-C)

**Framework:** MapKit  
**Kind:** Global Variable  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 2.0+

The virtual camera to use for viewing the map.

## Declaration

```objectivec
extern NSString * const MKLaunchOptionsCameraKey;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [MKMapCamera](mkmapcamera.md) object that describes a virtual camera that can specify a 3D perspective for the map. If you don’t specify this key, the Maps app uses its current settings to define the appearance of the map.

## See Also

### Launch options

- [MKLaunchOptionsDirectionsModeCycling](mklaunchoptionsdirectionsmodecycling.md): Cycling directions between the specified start and end points.
- [MKLaunchOptionsDirectionsModeDefault](mklaunchoptionsdirectionsmodedefault.md): Directions that match the user’s preferred transportation type.
- [MKLaunchOptionsDirectionsModeDriving](mklaunchoptionsdirectionsmodedriving.md): Driving directions between the specified start and end points.
- [MKLaunchOptionsDirectionsModeKey](mklaunchoptionsdirectionsmodekey.md): The mode of transportation.
- [MKLaunchOptionsDirectionsModeTransit](mklaunchoptionsdirectionsmodetransit.md): Public transit directions between the specified start and end points.
- [MKLaunchOptionsDirectionsModeWalking](mklaunchoptionsdirectionsmodewalking.md): Walking directions between the specified start and end points.
- [MKLaunchOptionsMapCenterKey](mklaunchoptionsmapcenterkey.md): The coordinate value on which to center the map.
- [MKLaunchOptionsMapSpanKey](mklaunchoptionsmapspankey.md): The amount of the map to display.
- [MKLaunchOptionsMapTypeKey](mklaunchoptionsmaptypekey.md): The type of map (standard, satellite, or hybrid) to display.
- [MKLaunchOptionsShowsTrafficKey](mklaunchoptionsshowstraffickey.md): A Boolean value that indicates whether to display traffic information.
