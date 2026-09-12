> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnsequencerequesthandler/init()](https://developer.apple.com/documentation/vision/vnsequencerequesthandler/init())

# init() (Swift)

**Framework:** Vision  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Initializes a sequence request handler.

## Declaration

```swift
init()
```

<a id="Discussion"></a>

## Discussion

Unlike the [VNImageRequestHandler](../vnimagerequesthandler.md), this initializer accepts no input because image data and auxiliary parameters may change from frame to frame, and are handled dynamically in the request-handling `perform` methods.

# init (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Initializes a sequence request handler.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="Discussion"></a>

## Discussion

Unlike the [VNImageRequestHandler](../vnimagerequesthandler.md), this initializer accepts no input because image data and auxiliary parameters may change from frame to frame, and are handled dynamically in the request-handling `perform` methods.
