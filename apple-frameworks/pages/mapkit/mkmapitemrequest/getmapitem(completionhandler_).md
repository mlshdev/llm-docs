> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapitemrequest/getmapitem(completionhandler:)](https://developer.apple.com/documentation/mapkit/mkmapitemrequest/getmapitem(completionhandler:))

# getMapItem(completionHandler:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

Requests a map item and calls the provided completion handler.

## Declaration

```swift
func getMapItem(completionHandler: @escaping @MainActor @Sendable (MKMapItem?, (any Error)?) -> Void)
```

```swift
var mapItem: MKMapItem { get async throws }
```

## Parameters

- `completionHandler`: A completion handler the framework calls to indicate the success or failure of the map item request.

## See Also

### Starting and stopping requests

- [cancel()](cancel%28%29.md): Cancels an in-progress map item request.

# getMapItemWithCompletionHandler: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

Requests a map item and calls the provided completion handler.

## Declaration

```objectivec
- (void) getMapItemWithCompletionHandler:(void (^)(MKMapItem *, NSError *)) completionHandler;
```

## Parameters

- `completionHandler`: A completion handler the framework calls to indicate the success or failure of the map item request.

## See Also

### Starting and stopping requests

- [cancel](cancel%28%29.md): Cancels an in-progress map item request.
