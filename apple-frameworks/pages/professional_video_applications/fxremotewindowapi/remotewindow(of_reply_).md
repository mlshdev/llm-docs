> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxremotewindowapi/remotewindow(of:reply:)](https://developer.apple.com/documentation/professional_video_applications/fxremotewindowapi/remotewindow(of:reply:))

# remoteWindow(of:reply:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.2.1+

Requests that the host application creates a window to display custom UI.

## Declaration

```swift
func remoteWindow(of contentSize: CGSize, reply: ((NSView?, (any Error)?) -> Void)!)
```

```swift
func remoteWindow(of contentSize: CGSize) async throws -> NSView?
```

## Parameters

- `contentSize`: The desired size for the content rectangle of the window.
- `reply`: Called when the window has been created.

<a id="discussion"></a>

## Discussion

Call this method to request that the host creates a new window to display custom user-interface elements. The reply block returns the window for your custom view. If there are any problems creating the window, `parentView` is `nil` and `error` contains an [NSError](../../foundation/nserror.md) that describes the problem.

Each plug-in instance is limited to a single window. If a user doesn’t close the window that contains the custom user-interface elements, subsequent calls to this method return the same parent view.

# remoteWindowOfSize:reply: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Requests that the host application creates a window to display custom UI.

## Declaration

```objectivec
- (void) remoteWindowOfSize:(CGSize) contentSize reply:(void (^)(NSView * parentView, NSError * error)) reply;
```

## Parameters

- `contentSize`: The desired size for the content rectangle of the window.
- `reply`: Called when the window has been created.

<a id="discussion"></a>

## Discussion

Call this method to request that the host creates a new window to display custom user-interface elements. The reply block returns the window for your custom view. If there are any problems creating the window, `parentView` is `nil` and `error` contains an [NSError](../../foundation/nserror.md) that describes the problem.

Each plug-in instance is limited to a single window. If a user doesn’t close the window that contains the custom user-interface elements, subsequent calls to this method return the same parent view.
