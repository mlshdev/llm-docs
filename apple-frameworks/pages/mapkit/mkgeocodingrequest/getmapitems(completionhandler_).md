> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkgeocodingrequest/getmapitems(completionhandler:)](https://developer.apple.com/documentation/mapkit/mkgeocodingrequest/getmapitems(completionhandler:))

# getMapItems(completionHandler:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the map items relevant to the geocoded location.

## Declaration

```swift
func getMapItems(completionHandler: @escaping @MainActor @Sendable ([MKMapItem]?, (any Error)?) -> Void)
```

```swift
var mapItems: [MKMapItem] { get async throws }
```

## See Also

### Getting information about the geocoder

- [addressString](addressstring.md): The string used to initialize the geocoder.
- [preferredLocale](preferredlocale.md): A value that indicates the default locale the geocoder should use when processing requests.
- [region](region.md): The geographic region for the framework to use as the bounds for the request; defaults to a region that covers the whole world.

# getMapItemsWithCompletionHandler: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the map items relevant to the geocoded location.

## Declaration

```objectivec
- (void) getMapItemsWithCompletionHandler:(void (^)(NSArray<MKMapItem *> *, NSError *)) completionHandler;
```

## See Also

### Getting information about the geocoder

- [addressString](addressstring.md): The string used to initialize the geocoder.
- [preferredLocale](preferredlocale.md): A value that indicates the default locale the geocoder should use when processing requests.
- [region](region.md): The geographic region for the framework to use as the bounds for the request; defaults to a region that covers the whole world.
