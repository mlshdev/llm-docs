> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapitem/openinmaps(launchoptions:completionhandler:)](https://developer.apple.com/documentation/mapkit/mkmapitem/openinmaps(launchoptions:completionhandler:))

# openInMaps(launchOptions:completionHandler:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** macOS 14.4+

Opens the Maps app and displays the map item.

## Declaration

```swift
func openInMaps(launchOptions: [String : Any]? = nil, completionHandler completion: (@Sendable (Bool) -> Void)? = nil)
```

```swift
func openInMaps(launchOptions: [String : Any]? = nil) async -> Bool
```

## Parameters

- `launchOptions`: A dictionary of launch options to pass to the Maps app.
- `completion`: A completion block the system calls that indicates whether the request was successful.

## See Also

### Launching the Maps app

- [openMaps(with:launchOptions:)](openmaps%28with_launchoptions_%29.md): Opens the Maps app and displays the specified map items.
- [openMaps(with:launchOptions:completionHandler:)](openmaps%28with_launchoptions_completionhandler_%29.md): Opens the Maps app using the specified map items and options.
- [openMaps(with:launchOptions:from:completionHandler:)](openmaps%28with_launchoptions_from_completionhandler_%29.md): Opens the Maps app from a particular scene using the specified map items and options.
- [openInMaps(launchOptions:)](openinmaps%28launchoptions_%29.md): Opens the Maps app and displays the map item.
- [openInMaps(launchOptions:from:completionHandler:)](openinmaps%28launchoptions_from_completionhandler_%29.md): Opens the Maps app from a particular scene using the specified options.

# openInMapsWithLaunchOptions:completionHandler: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** macOS 14.4+

Opens the Maps app and displays the map item.

## Declaration

```objectivec
- (void) openInMapsWithLaunchOptions:(NSDictionary<NSString *,id> *) launchOptions completionHandler:(void (^)(BOOL success)) completion;
```

## Parameters

- `launchOptions`: A dictionary of launch options to pass to the Maps app.
- `completion`: A completion block the system calls that indicates whether the request was successful.

## See Also

### Launching the Maps app

- [openMapsWithItems:launchOptions:](openmaps%28with_launchoptions_%29.md): Opens the Maps app and displays the specified map items.
- [openMapsWithItems:launchOptions:completionHandler:](openmaps%28with_launchoptions_completionhandler_%29.md): Opens the Maps app using the specified map items and options.
- [openMapsWithItems:launchOptions:fromScene:completionHandler:](openmaps%28with_launchoptions_from_completionhandler_%29.md): Opens the Maps app from a particular scene using the specified map items and options.
- [openInMapsWithLaunchOptions:](openinmaps%28launchoptions_%29.md): Opens the Maps app and displays the map item.
- [openInMapsWithLaunchOptions:fromScene:completionHandler:](openinmaps%28launchoptions_from_completionhandler_%29.md): Opens the Maps app from a particular scene using the specified options.
