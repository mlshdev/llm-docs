> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scshareablecontent/getcurrentprocessshareablecontent(completionhandler:)](https://developer.apple.com/documentation/screencapturekit/scshareablecontent/getcurrentprocessshareablecontent(completionhandler:))

# getCurrentProcessShareableContent(completionHandler:) (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 18.2+ · macOS 14.4+

## Declaration

```swift
class func getCurrentProcessShareableContent(completionHandler: @escaping @Sendable (SCShareableContent?, (any Error)?) -> Void)
```

```swift
class var currentProcess: SCShareableContent { get async throws }
```

# getCurrentProcessShareableContentWithCompletionHandler: (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Type Method  
**Availability:** Mac Catalyst 18.2+ · macOS 14.4+

## Declaration

```objectivec
+ (void) getCurrentProcessShareableContentWithCompletionHandler:(void (^)(SCShareableContent *shareableContent, NSError *error)) completionHandler;
```
