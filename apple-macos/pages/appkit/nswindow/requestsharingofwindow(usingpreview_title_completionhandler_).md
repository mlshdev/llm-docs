> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow/requestsharingofwindow(usingpreview:title:completionhandler:)](https://developer.apple.com/documentation/appkit/nswindow/requestsharingofwindow(usingpreview:title:completionhandler:))

# requestSharingOfWindow(usingPreview:title:completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

## Declaration

```swift
func requestSharingOfWindow(usingPreview image: NSImage, title: String, completionHandler: @escaping ((any Error)?) -> Void)
```

```swift
func requestSharingOfWindow(usingPreview image: NSImage, title: String) async throws
```

## Parameters

- `image`: An image showing a preview of the window to share
- `title`: The title to show in a confirmation dialog
- `completionHandler`: A completion block that is called after the request finishes.

<a id="discussion"></a>

## Discussion

Request sharing of window to be provided later.  If there is an available ScreenCaptureKit sharing session, an alert will be presented asking the user to confirm the share.  The delegate will be asked to provide the window to share via windowForSharingRequestFromWindow:

The error will be non-nil if the request does not result in a window being shared.  The error will be NSUserCancelledError if there is no ScreenCaptureKit session, or if the user rejects the offer to share.  If sharing fails for some other reason, the error will provide the details.

# requestSharingOfWindowUsingPreview:title:completionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

## Declaration

```objectivec
- (void) requestSharingOfWindowUsingPreview:(NSImage *) image title:(NSString *) title completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `image`: An image showing a preview of the window to share
- `title`: The title to show in a confirmation dialog
- `completionHandler`: A completion block that is called after the request finishes.

<a id="discussion"></a>

## Discussion

Request sharing of window to be provided later.  If there is an available ScreenCaptureKit sharing session, an alert will be presented asking the user to confirm the share.  The delegate will be asked to provide the window to share via windowForSharingRequestFromWindow:

The error will be non-nil if the request does not result in a window being shared.  The error will be NSUserCancelledError if there is no ScreenCaptureKit session, or if the user rejects the offer to share.  If sharing fails for some other reason, the error will provide the details.
