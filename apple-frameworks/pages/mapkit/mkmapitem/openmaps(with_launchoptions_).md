> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapitem/openmaps(with:launchoptions:)](https://developer.apple.com/documentation/mapkit/mkmapitem/openmaps(with:launchoptions:))

# openMaps(with:launchOptions:) (Swift)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+ · watchOS 2.0+

Opens the Maps app and displays the specified map items.

## Declaration

```swift
class func openMaps(with mapItems: [MKMapItem], launchOptions: [String : Any]? = nil) -> Bool
```

## Parameters

- `mapItems`: An array containing one or more `MKMapItem` objects representing the items you want to display on the map.
- `launchOptions`: Additional information that the Maps app can use to configure the map display. For example, you can use the launch options to specify the visible map region, a 3D perspective, and the map type. For a list of keys you can put into this dictionary, see [Launch options dictionary keys](../launch-options-dictionary-keys.md).

  You may specify `nil` for this parameter.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the Maps app successfully opens the maps items, or [false](https://developer.apple.com/documentation/swift/false) if there’s an error.

<a id="Discussion"></a>

## Discussion

You use this method to pass one or more map items to the Maps app. For example, you might use this method to ask the Maps app to display location-based search results that your app generates. The Maps app displays pins at each location you specify and uses the contents of each map item object to display additional information.

If you specify the [MKLaunchOptionsDirectionsModeKey](../mklaunchoptionsdirectionsmodekey.md) option in the `launchOptions` dictionary, the `mapItems` array may have no more than two items in it. If the array contains one item, the Maps app generates directions from the user’s location to the location that the map item specifies. If the array contains two items, the Maps app generates directions from the location of the first item to the location of the second item in the array.

If you don’t include the [MKLaunchOptionsMapCenterKey](../mklaunchoptionsmapcenterkey.md) and [MKLaunchOptionsMapSpanKey](../mklaunchoptionsmapspankey.md) keys in your `launchOptions` dictionary, the Maps app constructs a region that encompasses the provided items. It uses this region to set the visible portion of the map.

## See Also

### Launching the Maps app

- [openMaps(with:launchOptions:completionHandler:)](openmaps%28with_launchoptions_completionhandler_%29.md): Opens the Maps app using the specified map items and options.
- [openMaps(with:launchOptions:from:completionHandler:)](openmaps%28with_launchoptions_from_completionhandler_%29.md): Opens the Maps app from a particular scene using the specified map items and options.
- [openInMaps(launchOptions:)](openinmaps%28launchoptions_%29.md): Opens the Maps app and displays the map item.
- [openInMaps(launchOptions:completionHandler:)](openinmaps%28launchoptions_completionhandler_%29.md): Opens the Maps app and displays the map item.
- [openInMaps(launchOptions:from:completionHandler:)](openinmaps%28launchoptions_from_completionhandler_%29.md): Opens the Maps app from a particular scene using the specified options.

# openMapsWithItems:launchOptions: (Objective-C)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+ · watchOS 2.0+

Opens the Maps app and displays the specified map items.

## Declaration

```objectivec
+ (BOOL) openMapsWithItems:(NSArray<MKMapItem *> *) mapItems launchOptions:(NSDictionary<NSString *,id> *) launchOptions;
```

## Parameters

- `mapItems`: An array containing one or more `MKMapItem` objects representing the items you want to display on the map.
- `launchOptions`: Additional information that the Maps app can use to configure the map display. For example, you can use the launch options to specify the visible map region, a 3D perspective, and the map type. For a list of keys you can put into this dictionary, see [Launch options dictionary keys](../launch-options-dictionary-keys.md).

  You may specify `nil` for this parameter.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the Maps app successfully opens the maps items, or [false](https://developer.apple.com/documentation/swift/false) if there’s an error.

<a id="Discussion"></a>

## Discussion

You use this method to pass one or more map items to the Maps app. For example, you might use this method to ask the Maps app to display location-based search results that your app generates. The Maps app displays pins at each location you specify and uses the contents of each map item object to display additional information.

If you specify the [MKLaunchOptionsDirectionsModeKey](../mklaunchoptionsdirectionsmodekey.md) option in the `launchOptions` dictionary, the `mapItems` array may have no more than two items in it. If the array contains one item, the Maps app generates directions from the user’s location to the location that the map item specifies. If the array contains two items, the Maps app generates directions from the location of the first item to the location of the second item in the array.

If you don’t include the [MKLaunchOptionsMapCenterKey](../mklaunchoptionsmapcenterkey.md) and [MKLaunchOptionsMapSpanKey](../mklaunchoptionsmapspankey.md) keys in your `launchOptions` dictionary, the Maps app constructs a region that encompasses the provided items. It uses this region to set the visible portion of the map.

## See Also

### Launching the Maps app

- [openMapsWithItems:launchOptions:completionHandler:](openmaps%28with_launchoptions_completionhandler_%29.md): Opens the Maps app using the specified map items and options.
- [openMapsWithItems:launchOptions:fromScene:completionHandler:](openmaps%28with_launchoptions_from_completionhandler_%29.md): Opens the Maps app from a particular scene using the specified map items and options.
- [openInMapsWithLaunchOptions:](openinmaps%28launchoptions_%29.md): Opens the Maps app and displays the map item.
- [openInMapsWithLaunchOptions:completionHandler:](openinmaps%28launchoptions_completionhandler_%29.md): Opens the Maps app and displays the map item.
- [openInMapsWithLaunchOptions:fromScene:completionHandler:](openinmaps%28launchoptions_from_completionhandler_%29.md): Opens the Maps app from a particular scene using the specified options.
