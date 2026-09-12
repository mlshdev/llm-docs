> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scscreenshotmanager/capturescreenshot(rect:configuration:completionhandler:)](https://developer.apple.com/documentation/screencapturekit/scscreenshotmanager/capturescreenshot(rect:configuration:completionhandler:))

# captureScreenshot(rect:configuration:completionHandler:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

## Declaration

```swift
class func captureScreenshot(rect: CGRect, configuration config: SCScreenshotConfiguration, completionHandler: (@Sendable (SCScreenshotOutput?, (any Error)?) -> Void)? = nil)
```

```swift
class func captureScreenshot(rect: CGRect, configuration config: SCScreenshotConfiguration) async throws -> SCScreenshotOutput
```

## Parameters

- `rect`: The rect for the region in points on the screen space for the screen shot, this is display agnostic and supports multiple displays
- `config`: Is the screenshot configuration containing information on how to format the screenshot
- `completionHandler`: Is the handler that will deliver the SCScreenshotOutput object to the client

<a id="discussion"></a>

## Discussion

captureScreenshotWithRect:configuration:completionHandler:

this method returns an SCScreenshotOutput object containing CGImages of the screenshot requested by the client

# captureScreenshotWithRect:configuration:completionHandler: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

## Declaration

```objectivec
+ (void) captureScreenshotWithRect:(CGRect) rect configuration:(SCScreenshotConfiguration *) config completionHandler:(void (^)(SCScreenshotOutput *output, NSError *error)) completionHandler;
```

## Parameters

- `rect`: The rect for the region in points on the screen space for the screen shot, this is display agnostic and supports multiple displays
- `config`: Is the screenshot configuration containing information on how to format the screenshot
- `completionHandler`: Is the handler that will deliver the SCScreenshotOutput object to the client

<a id="discussion"></a>

## Discussion

captureScreenshotWithRect:configuration:completionHandler:

this method returns an SCScreenshotOutput object containing CGImages of the screenshot requested by the client
