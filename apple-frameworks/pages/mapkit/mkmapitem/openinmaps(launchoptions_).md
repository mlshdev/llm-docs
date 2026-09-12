> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapitem/openinmaps(launchoptions:)](https://developer.apple.com/documentation/mapkit/mkmapitem/openinmaps(launchoptions:))

# openInMaps(launchOptions:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+ · watchOS 2.0+

Opens the Maps app and displays the map item.

## Declaration

```swift
func openInMaps(launchOptions: [String : Any]? = nil) -> Bool
```

## Parameters

- `launchOptions`: Additional information that the Maps app can use to configure the map display. For example, you can use the launch options to specify the visible map region and the map type. For a list of keys you can put into this dictionary, see [Launch options dictionary keys](../launch-options-dictionary-keys.md).

  This parameter may be `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the Maps app successfully opens the map item, or [false](https://developer.apple.com/documentation/swift/false) if there’s an error.

<a id="Discussion"></a>

## Discussion

You use this method to pass the map item to the Maps app. If your map item contains descriptive information about the location (such as a name or URL), the Maps app displays that information at the specified coordinate.

If you specify the [MKLaunchOptionsDirectionsModeKey](../mklaunchoptionsdirectionsmodekey.md) option in the `launchOptions` dictionary, the Maps app interprets that as an attempt to map from the user’s current location to the location that the map item specifies.

> **Note**

>  This is a blocking call and the system suspends interaction with your app until the Maps app finishes launching.

If you don’t include the [MKLaunchOptionsMapCenterKey](../mklaunchoptionsmapcenterkey.md) and [MKLaunchOptionsMapSpanKey](../mklaunchoptionsmapspankey.md) keys in your `launchOptions` dictionary, the Maps app constructs a region around the map item. It uses that region to set the visible portion of the map.

## See Also

### Launching the Maps app

- [openMaps(with:launchOptions:)](openmaps%28with_launchoptions_%29.md): Opens the Maps app and displays the specified map items.
- [openMaps(with:launchOptions:completionHandler:)](openmaps%28with_launchoptions_completionhandler_%29.md): Opens the Maps app using the specified map items and options.
- [openMaps(with:launchOptions:from:completionHandler:)](openmaps%28with_launchoptions_from_completionhandler_%29.md): Opens the Maps app from a particular scene using the specified map items and options.
- [openInMaps(launchOptions:completionHandler:)](openinmaps%28launchoptions_completionhandler_%29.md): Opens the Maps app and displays the map item.
- [openInMaps(launchOptions:from:completionHandler:)](openinmaps%28launchoptions_from_completionhandler_%29.md): Opens the Maps app from a particular scene using the specified options.

# openInMapsWithLaunchOptions: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+ · watchOS 2.0+

Opens the Maps app and displays the map item.

## Declaration

```objectivec
- (BOOL) openInMapsWithLaunchOptions:(NSDictionary<NSString *,id> *) launchOptions;
```

## Parameters

- `launchOptions`: Additional information that the Maps app can use to configure the map display. For example, you can use the launch options to specify the visible map region and the map type. For a list of keys you can put into this dictionary, see [Launch options dictionary keys](../launch-options-dictionary-keys.md).

  This parameter may be `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the Maps app successfully opens the map item, or [false](https://developer.apple.com/documentation/swift/false) if there’s an error.

<a id="Discussion"></a>

## Discussion

You use this method to pass the map item to the Maps app. If your map item contains descriptive information about the location (such as a name or URL), the Maps app displays that information at the specified coordinate.

If you specify the [MKLaunchOptionsDirectionsModeKey](../mklaunchoptionsdirectionsmodekey.md) option in the `launchOptions` dictionary, the Maps app interprets that as an attempt to map from the user’s current location to the location that the map item specifies.

> **Note**

>  This is a blocking call and the system suspends interaction with your app until the Maps app finishes launching.

If you don’t include the [MKLaunchOptionsMapCenterKey](../mklaunchoptionsmapcenterkey.md) and [MKLaunchOptionsMapSpanKey](../mklaunchoptionsmapspankey.md) keys in your `launchOptions` dictionary, the Maps app constructs a region around the map item. It uses that region to set the visible portion of the map.

## See Also

### Launching the Maps app

- [openMapsWithItems:launchOptions:](openmaps%28with_launchoptions_%29.md): Opens the Maps app and displays the specified map items.
- [openMapsWithItems:launchOptions:completionHandler:](openmaps%28with_launchoptions_completionhandler_%29.md): Opens the Maps app using the specified map items and options.
- [openMapsWithItems:launchOptions:fromScene:completionHandler:](openmaps%28with_launchoptions_from_completionhandler_%29.md): Opens the Maps app from a particular scene using the specified map items and options.
- [openInMapsWithLaunchOptions:completionHandler:](openinmaps%28launchoptions_completionhandler_%29.md): Opens the Maps app and displays the map item.
- [openInMapsWithLaunchOptions:fromScene:completionHandler:](openinmaps%28launchoptions_from_completionhandler_%29.md): Opens the Maps app from a particular scene using the specified options.
