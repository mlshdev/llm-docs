> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrequestprogressproviding/indeterminate](https://developer.apple.com/documentation/vision/vnrequestprogressproviding/indeterminate)

# indeterminate (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A Boolean set to true when a request can’t determine its progress in fractions completed.

## Declaration

```swift
var indeterminate: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A value of [true](https://developer.apple.com/documentation/swift/true) doesn’t mean that the request will run forever. Rather, it means that the nature of the request can’t be broken down into identifiable fractions to report. The [progressHandler](progresshandler.md) will still be called at suitable intervals.

## See Also

### Tracking Progress

- [progressHandler](progresshandler.md): A block of code executed periodically during a Vision request to report progress on long-running tasks.

# indeterminate (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A Boolean set to true when a request can’t determine its progress in fractions completed.

## Declaration

```objectivec
@property (readonly) BOOL indeterminate;
```

<a id="Discussion"></a>

## Discussion

A value of [true](https://developer.apple.com/documentation/swift/true) doesn’t mean that the request will run forever. Rather, it means that the nature of the request can’t be broken down into identifiable fractions to report. The [progressHandler](progresshandler.md) will still be called at suitable intervals.

## See Also

### Tracking Progress

- [progressHandler](progresshandler.md): A block of code executed periodically during a Vision request to report progress on long-running tasks.
