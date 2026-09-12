> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/screcordingeditor/present(from:completionhandler:)-2atpt](https://developer.apple.com/documentation/screencapturekit/screcordingeditor/present(from:completionhandler:)-2atpt)

# present(from:completionHandler:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
func present(from windowScene: UIWindowScene, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func present(from windowScene: UIWindowScene) async throws
```

## Parameters

- `windowScene`: The window scene to present from.
- `completionHandler`: Called when presentation completes. error is nil on success.

<a id="discussion"></a>

## Discussion

Present the recording editor from the specified window scene.

# presentFromWindowScene:completionHandler: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (void) presentFromWindowScene:(UIWindowScene *) windowScene completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `windowScene`: The window scene to present from.
- `completionHandler`: Called when presentation completes. error is nil on success.

<a id="discussion"></a>

## Discussion

Present the recording editor from the specified window scene.
