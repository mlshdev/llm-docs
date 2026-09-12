> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkgeocodingrequest/preferredlocale](https://developer.apple.com/documentation/mapkit/mkgeocodingrequest/preferredlocale)

# preferredLocale (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A value that indicates the default locale the geocoder should use when processing requests.

## Declaration

```swift
var preferredLocale: Locale? { get set }
```

## See Also

### Getting information about the geocoder

- [addressString](addressstring.md): The string used to initialize the geocoder.
- [getMapItems(completionHandler:)](getmapitems%28completionhandler_%29.md): Returns the map items relevant to the geocoded location.
- [region](region.md): The geographic region for the framework to use as the bounds for the request; defaults to a region that covers the whole world.

# preferredLocale (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A value that indicates the default locale the geocoder should use when processing requests.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSLocale * preferredLocale;
```

## See Also

### Getting information about the geocoder

- [addressString](addressstring.md): The string used to initialize the geocoder.
- [getMapItemsWithCompletionHandler:](getmapitems%28completionhandler_%29.md): Returns the map items relevant to the geocoded location.
- [region](region.md): The geographic region for the framework to use as the bounds for the request; defaults to a region that covers the whole world.
