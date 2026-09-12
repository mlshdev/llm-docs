> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphexecutiondescriptor/completionhandler](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphexecutiondescriptor/completionhandler)

# completionHandler (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The handler that graph calls at the completion of the execution.

## Declaration

```swift
var completionHandler: MPSGraphCompletionHandler { get set }
```

<a id="discussion"></a>

## Discussion

Default value is nil.

# completionHandler (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The handler that graph calls at the completion of the execution.

## Declaration

```objectivec
@property (atomic, readwrite) MPSGraphCompletionHandler completionHandler;
```

<a id="discussion"></a>

## Discussion

Default value is nil.
