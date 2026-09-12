> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkreversegeocodingrequest/preferredlocale](https://developer.apple.com/documentation/mapkit/mkreversegeocodingrequest/preferredlocale)

# preferredLocale (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A value that indicates the preferred locale for the addresses the request returns, or `nil` if the framework should use the device locale.

## Declaration

```swift
var preferredLocale: Locale? { get set }
```

## See Also

### Getting information about map items and the reverse geocoder’s locale’

- [getMapItems(completionHandler:)](getmapitems%28completionhandler_%29.md): Returns the map items relevant to the reverse geocoded location.

# preferredLocale (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A value that indicates the preferred locale for the addresses the request returns, or `nil` if the framework should use the device locale.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSLocale * preferredLocale;
```

## See Also

### Getting information about map items and the reverse geocoder’s locale’

- [getMapItemsWithCompletionHandler:](getmapitems%28completionhandler_%29.md): Returns the map items relevant to the reverse geocoded location.
