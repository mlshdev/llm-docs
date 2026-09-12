> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scscreenshotmanager/capturescreenshot(contentfilter:configuration:completionhandler:)](https://developer.apple.com/documentation/screencapturekit/scscreenshotmanager/capturescreenshot(contentfilter:configuration:completionhandler:))

# captureScreenshot(contentFilter:configuration:completionHandler:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

## Declaration

```swift
class func captureScreenshot(contentFilter: SCContentFilter, configuration config: SCScreenshotConfiguration, completionHandler: (@Sendable (SCScreenshotOutput?, (any Error)?) -> Void)? = nil)
```

```swift
class func captureScreenshot(contentFilter: SCContentFilter, configuration config: SCScreenshotConfiguration) async throws -> SCScreenshotOutput
```

## Parameters

- `contentFilter`: Is the filter containing the content to take a screenshot of
- `config`: Is the screenshot configuration containing information on how to format the screenshot
- `completionHandler`: Is the handler that will deliver the SCScreenshotOutput object to the client

<a id="discussion"></a>

## Discussion

captureScreenshotWithFilter:configuration:completionHandler:

this method returns an SCScreenshotOutput object containing CGImages of the screenshot requested by the client

# captureScreenshotWithFilter:configuration:completionHandler: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 26.0+ · macOS 26.0+

## Declaration

```objectivec
+ (void) captureScreenshotWithFilter:(SCContentFilter *) contentFilter configuration:(SCScreenshotConfiguration *) config completionHandler:(void (^)(SCScreenshotOutput *output, NSError *error)) completionHandler;
```

## Parameters

- `contentFilter`: Is the filter containing the content to take a screenshot of
- `config`: Is the screenshot configuration containing information on how to format the screenshot
- `completionHandler`: Is the handler that will deliver the SCScreenshotOutput object to the client

<a id="discussion"></a>

## Discussion

captureScreenshotWithFilter:configuration:completionHandler:

this method returns an SCScreenshotOutput object containing CGImages of the screenshot requested by the client
