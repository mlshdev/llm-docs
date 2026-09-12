> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkgeocodingrequest/region](https://developer.apple.com/documentation/mapkit/mkgeocodingrequest/region)

# region (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The geographic region for the framework to use as the bounds for the request; defaults to a region that covers the whole world.

## Declaration

```swift
var region: MKCoordinateRegion { get set }
```

## See Also

### Getting information about the geocoder

- [addressString](addressstring.md): The string used to initialize the geocoder.
- [getMapItems(completionHandler:)](getmapitems%28completionhandler_%29.md): Returns the map items relevant to the geocoded location.
- [preferredLocale](preferredlocale.md): A value that indicates the default locale the geocoder should use when processing requests.

# region (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The geographic region for the framework to use as the bounds for the request; defaults to a region that covers the whole world.

## Declaration

```objectivec
@property (nonatomic, assign) MKCoordinateRegion region;
```

## See Also

### Getting information about the geocoder

- [addressString](addressstring.md): The string used to initialize the geocoder.
- [getMapItemsWithCompletionHandler:](getmapitems%28completionhandler_%29.md): Returns the map items relevant to the geocoded location.
- [preferredLocale](preferredlocale.md): A value that indicates the default locale the geocoder should use when processing requests.
