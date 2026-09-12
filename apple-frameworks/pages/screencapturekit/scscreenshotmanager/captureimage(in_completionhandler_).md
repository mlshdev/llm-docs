> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scscreenshotmanager/captureimage(in:completionhandler:)](https://developer.apple.com/documentation/screencapturekit/scscreenshotmanager/captureimage(in:completionhandler:))

# captureImage(in:completionHandler:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 18.2+ · macOS 15.2+

## Declaration

```swift
class func captureImage(in rect: CGRect, completionHandler: (@Sendable (CGImage?, (any Error)?) -> Void)? = nil)
```

```swift
class func captureImage(in rect: CGRect) async throws -> CGImage
```

## Parameters

- `rect`: The rect for the region in points on the screen space for the screen shot, this is display agnostic and supports multiple displays
- `completionHandler`: Is the handler that will deliver the screenshot to the client

<a id="discussion"></a>

## Discussion

captureImageInRect:completionHandler:

this method returns an image containing the contents of the rectangle in points, specified in display space

# captureImageInRect:completionHandler: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 18.2+ · macOS 15.2+

## Declaration

```objectivec
+ (void) captureImageInRect:(CGRect) rect completionHandler:(void (^)(CGImageRef image, NSError *error)) completionHandler;
```

## Parameters

- `rect`: The rect for the region in points on the screen space for the screen shot, this is display agnostic and supports multiple displays
- `completionHandler`: Is the handler that will deliver the screenshot to the client

<a id="discussion"></a>

## Discussion

captureImageInRect:completionHandler:

this method returns an image containing the contents of the rectangle in points, specified in display space
