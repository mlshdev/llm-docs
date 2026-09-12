> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mklookaroundscenerequest/getscenewithcompletionhandler(_:)](https://developer.apple.com/documentation/mapkit/mklookaroundscenerequest/getscenewithcompletionhandler(_:))

# getSceneWithCompletionHandler(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Requests a LookAround scene and calls the specified completion handler.

## Declaration

```swift
func getSceneWithCompletionHandler(_ completionHandler: @escaping @MainActor @Sendable (MKLookAroundScene?, (any Error)?) -> Void)
```

```swift
var scene: MKLookAroundScene? { get async throws }
```

## Parameters

- `completionHandler`: A completion handler the framework calls when the scene request completes to indicate the success or failure of the request.

## See Also

### Starting and stopping scene requests

- [cancel()](cancel%28%29.md): Cancels the pending scene request.

# getSceneWithCompletionHandler: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Requests a LookAround scene and calls the specified completion handler.

## Declaration

```objectivec
- (void) getSceneWithCompletionHandler:(void (^)(MKLookAroundScene *, NSError *)) completionHandler;
```

## Parameters

- `completionHandler`: A completion handler the framework calls when the scene request completes to indicate the success or failure of the request.

## See Also

### Starting and stopping scene requests

- [cancel](cancel%28%29.md): Cancels the pending scene request.
