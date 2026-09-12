> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapitem/openmaps(with:launchoptions:completionhandler:)](https://developer.apple.com/documentation/mapkit/mkmapitem/openmaps(with:launchoptions:completionhandler:))

# openMaps(with:launchOptions:completionHandler:) (Swift)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** macOS 14.4+

Opens the Maps app using the specified map items and options.

## Declaration

```swift
class func openMaps(with mapItems: [MKMapItem], launchOptions: [String : Any]? = nil, completionHandler completion: (@Sendable (Bool) -> Void)? = nil)
```

```swift
class func openMaps(with mapItems: [MKMapItem], launchOptions: [String : Any]? = nil) async -> Bool
```

## Parameters

- `mapItems`: An array of map items to open in the Maps app.
- `launchOptions`: A dictionary of launch options to pass to the Maps app.
- `completion`: A completion block the system calls that indicates whether the request was successful.

## See Also

### Launching the Maps app

- [openMaps(with:launchOptions:)](openmaps%28with_launchoptions_%29.md): Opens the Maps app and displays the specified map items.
- [openMaps(with:launchOptions:from:completionHandler:)](openmaps%28with_launchoptions_from_completionhandler_%29.md): Opens the Maps app from a particular scene using the specified map items and options.
- [openInMaps(launchOptions:)](openinmaps%28launchoptions_%29.md): Opens the Maps app and displays the map item.
- [openInMaps(launchOptions:completionHandler:)](openinmaps%28launchoptions_completionhandler_%29.md): Opens the Maps app and displays the map item.
- [openInMaps(launchOptions:from:completionHandler:)](openinmaps%28launchoptions_from_completionhandler_%29.md): Opens the Maps app from a particular scene using the specified options.

# openMapsWithItems:launchOptions:completionHandler: (Objective-C)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** macOS 14.4+

Opens the Maps app using the specified map items and options.

## Declaration

```objectivec
+ (void) openMapsWithItems:(NSArray<MKMapItem *> *) mapItems launchOptions:(NSDictionary<NSString *,id> *) launchOptions completionHandler:(void (^)(BOOL success)) completion;
```

## Parameters

- `mapItems`: An array of map items to open in the Maps app.
- `launchOptions`: A dictionary of launch options to pass to the Maps app.
- `completion`: A completion block the system calls that indicates whether the request was successful.

## See Also

### Launching the Maps app

- [openMapsWithItems:launchOptions:](openmaps%28with_launchoptions_%29.md): Opens the Maps app and displays the specified map items.
- [openMapsWithItems:launchOptions:fromScene:completionHandler:](openmaps%28with_launchoptions_from_completionhandler_%29.md): Opens the Maps app from a particular scene using the specified map items and options.
- [openInMapsWithLaunchOptions:](openinmaps%28launchoptions_%29.md): Opens the Maps app and displays the map item.
- [openInMapsWithLaunchOptions:completionHandler:](openinmaps%28launchoptions_completionhandler_%29.md): Opens the Maps app and displays the map item.
- [openInMapsWithLaunchOptions:fromScene:completionHandler:](openinmaps%28launchoptions_from_completionhandler_%29.md): Opens the Maps app from a particular scene using the specified options.
