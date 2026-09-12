> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkreversegeocodingrequest/getmapitems(completionhandler:)](https://developer.apple.com/documentation/mapkit/mkreversegeocodingrequest/getmapitems(completionhandler:))

# getMapItems(completionHandler:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the map items relevant to the reverse geocoded location.

## Declaration

```swift
func getMapItems(completionHandler: @escaping @MainActor @Sendable ([MKMapItem]?, (any Error)?) -> Void)
```

```swift
var mapItems: [MKMapItem] { get async throws }
```

## See Also

### Getting information about map items and the reverse geocoder’s locale’

- [preferredLocale](preferredlocale.md): A value that indicates the preferred locale for the addresses the request returns, or `nil` if the framework should use the device locale.

# getMapItemsWithCompletionHandler: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the map items relevant to the reverse geocoded location.

## Declaration

```objectivec
- (void) getMapItemsWithCompletionHandler:(void (^)(NSArray<MKMapItem *> *, NSError *)) completionHandler;
```

## See Also

### Getting information about map items and the reverse geocoder’s locale’

- [preferredLocale](preferredlocale.md): A value that indicates the preferred locale for the addresses the request returns, or `nil` if the framework should use the device locale.
