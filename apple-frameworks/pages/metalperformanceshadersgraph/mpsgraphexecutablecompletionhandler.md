> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphexecutablecompletionhandler](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphexecutablecompletionhandler)

# MPSGraphExecutableCompletionHandler (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A notification when graph executable execution finishes.

## Declaration

```swift
typealias MPSGraphExecutableCompletionHandler = ([MPSGraphTensorData], (any Error)?) -> Void
```

## Parameters

- `results`: If no error, the results produced by the graph operation. If Graph hasn’t yet allocated the results, this will be `NSNull`.
- `error`: If an error occurs, more information might be found here.

# MPSGraphExecutableCompletionHandler (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A notification when graph executable execution finishes.

## Declaration

```objectivec
typedef void (^)(NSArray<MPSGraphTensorData *> *, NSError *) MPSGraphExecutableCompletionHandler;
```

## Parameters

- `results`: If no error, the results produced by the graph operation. If Graph hasn’t yet allocated the results, this will be `NSNull`.
- `error`: If an error occurs, more information might be found here.
