> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrequestprogressproviding/progresshandler](https://developer.apple.com/documentation/vision/vnrequestprogressproviding/progresshandler)

# progressHandler (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A block of code executed periodically during a Vision request to report progress on long-running tasks.

## Declaration

```swift
var progressHandler: VNRequestProgressHandler { get set }
```

<a id="Discussion"></a>

## Discussion

The progress handler is an optional method that allows clients of the request to report progress to the user or to display partial results as they become available. The Vision framework may call this handler on a different dispatch queue from the thread on which you initiated the original request, so ensure that your handler can execute asynchronously, in a thread-safe manner.

## See Also

### Tracking Progress

- [indeterminate](indeterminate.md): A Boolean set to true when a request can’t determine its progress in fractions completed.

# progressHandler (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A block of code executed periodically during a Vision request to report progress on long-running tasks.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite) VNRequestProgressHandler progressHandler;
```

<a id="Discussion"></a>

## Discussion

The progress handler is an optional method that allows clients of the request to report progress to the user or to display partial results as they become available. The Vision framework may call this handler on a different dispatch queue from the thread on which you initiated the original request, so ensure that your handler can execute asynchronously, in a thread-safe manner.

## See Also

### Tracking Progress

- [indeterminate](indeterminate.md): A Boolean set to true when a request can’t determine its progress in fractions completed.
