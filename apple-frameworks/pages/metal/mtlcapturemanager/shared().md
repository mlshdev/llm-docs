> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcapturemanager/shared()](https://developer.apple.com/documentation/metal/mtlcapturemanager/shared())

# shared() (Swift)

**Framework:** Metal  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Provides the shared capture manager for your Metal app.

## Declaration

```swift
class func shared() -> MTLCaptureManager
```

<a id="discussion"></a>

## Discussion

There is only one capture manager per process.

# sharedCaptureManager (Objective-C)

**Framework:** Metal  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Provides the shared capture manager for your Metal app.

## Declaration

```objectivec
+ (MTLCaptureManager *) sharedCaptureManager;
```

<a id="discussion"></a>

## Discussion

There is only one capture manager per process.
