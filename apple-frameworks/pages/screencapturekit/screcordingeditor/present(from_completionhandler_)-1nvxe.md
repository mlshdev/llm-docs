> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/screcordingeditor/present(from:completionhandler:)-1nvxe](https://developer.apple.com/documentation/screencapturekit/screcordingeditor/present(from:completionhandler:)-1nvxe)

# present(from:completionHandler:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

## Declaration

```swift
func present(from window: NSWindow, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func present(from window: NSWindow) async throws
```

## Parameters

- `window`: The window to present from.
- `completionHandler`: Called when presentation completes. error is nil on success.

<a id="discussion"></a>

## Discussion

Present the recording editor from the specified window.

# presentFromWindow:completionHandler: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

## Declaration

```objectivec
- (void) presentFromWindow:(NSWindow *) window completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `window`: The window to present from.
- `completionHandler`: Called when presentation completes. error is nil on success.

<a id="discussion"></a>

## Discussion

Present the recording editor from the specified window.
