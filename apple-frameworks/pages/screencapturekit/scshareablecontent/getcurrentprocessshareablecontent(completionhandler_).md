> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/screencapturekit/scshareablecontent/getcurrentprocessshareablecontent(completionhandler:)

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
