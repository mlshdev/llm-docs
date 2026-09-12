> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklaunchoptionsdirectionsmodecycling](https://developer.apple.com/documentation/mapkit/mklaunchoptionsdirectionsmodecycling)

# MKLaunchOptionsDirectionsModeCycling (Swift)

**Framework:** MapKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

Cycling directions between the specified start and end points.

## Declaration

```swift
let MKLaunchOptionsDirectionsModeCycling: String
```

<a id="Discussion"></a>

## Discussion

You can use this launch options key to open the Maps app directly in the mode that enables route planning that returns cycling directions, as shown in this example.

```swift
    Button("Cycling Directions") {
        selectedItem.openInMaps(
            launchOptions: [MKLaunchOptionsDirectionsModeKey: MKLaunchOptionsDirectionsModeCycling]
        )
    }
```

## See Also

### Launch options

- [MKLaunchOptionsCameraKey](mklaunchoptionscamerakey.md): The virtual camera to use for viewing the map.
- [MKLaunchOptionsDirectionsModeDefault](mklaunchoptionsdirectionsmodedefault.md): Directions that match the user’s preferred transportation type.
- [MKLaunchOptionsDirectionsModeDriving](mklaunchoptionsdirectionsmodedriving.md): Driving directions between the specified start and end points.
- [MKLaunchOptionsDirectionsModeKey](mklaunchoptionsdirectionsmodekey.md): The mode of transportation.
- [MKLaunchOptionsDirectionsModeTransit](mklaunchoptionsdirectionsmodetransit.md): Public transit directions between the specified start and end points.
- [MKLaunchOptionsDirectionsModeWalking](mklaunchoptionsdirectionsmodewalking.md): Walking directions between the specified start and end points.
- [MKLaunchOptionsMapCenterKey](mklaunchoptionsmapcenterkey.md): The coordinate value on which to center the map.
- [MKLaunchOptionsMapSpanKey](mklaunchoptionsmapspankey.md): The amount of the map to display.
- [MKLaunchOptionsMapTypeKey](mklaunchoptionsmaptypekey.md): The type of map (standard, satellite, or hybrid) to display.
- [MKLaunchOptionsShowsTrafficKey](mklaunchoptionsshowstraffickey.md): A Boolean value that indicates whether to display traffic information.

# MKLaunchOptionsDirectionsModeCycling (Objective-C)

**Framework:** MapKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

Cycling directions between the specified start and end points.

## Declaration

```objectivec
extern NSString * const MKLaunchOptionsDirectionsModeCycling;
```

<a id="Discussion"></a>

## Discussion

You can use this launch options key to open the Maps app directly in the mode that enables route planning that returns cycling directions, as shown in this example.

```swift
    Button("Cycling Directions") {
        selectedItem.openInMaps(
            launchOptions: [MKLaunchOptionsDirectionsModeKey: MKLaunchOptionsDirectionsModeCycling]
        )
    }
```

## See Also

### Launch options

- [MKLaunchOptionsCameraKey](mklaunchoptionscamerakey.md): The virtual camera to use for viewing the map.
- [MKLaunchOptionsDirectionsModeDefault](mklaunchoptionsdirectionsmodedefault.md): Directions that match the user’s preferred transportation type.
- [MKLaunchOptionsDirectionsModeDriving](mklaunchoptionsdirectionsmodedriving.md): Driving directions between the specified start and end points.
- [MKLaunchOptionsDirectionsModeKey](mklaunchoptionsdirectionsmodekey.md): The mode of transportation.
- [MKLaunchOptionsDirectionsModeTransit](mklaunchoptionsdirectionsmodetransit.md): Public transit directions between the specified start and end points.
- [MKLaunchOptionsDirectionsModeWalking](mklaunchoptionsdirectionsmodewalking.md): Walking directions between the specified start and end points.
- [MKLaunchOptionsMapCenterKey](mklaunchoptionsmapcenterkey.md): The coordinate value on which to center the map.
- [MKLaunchOptionsMapSpanKey](mklaunchoptionsmapspankey.md): The amount of the map to display.
- [MKLaunchOptionsMapTypeKey](mklaunchoptionsmaptypekey.md): The type of map (standard, satellite, or hybrid) to display.
- [MKLaunchOptionsShowsTrafficKey](mklaunchoptionsshowstraffickey.md): A Boolean value that indicates whether to display traffic information.
