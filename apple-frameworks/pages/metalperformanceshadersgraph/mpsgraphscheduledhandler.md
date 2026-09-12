> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphscheduledhandler](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphscheduledhandler)

# MPSGraphScheduledHandler (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A notification that appears when graph execution schedules.

## Declaration

```swift
typealias MPSGraphScheduledHandler = ([MPSGraphTensor : MPSGraphTensorData], (any Error)?) -> Void
```

## Parameters

- `resultsDictionary`: If no error, the results dictionary produced by the graph operation. If Graph has not yet allocated, the results will be `NSNull`.
- `error`: If an error occurs, more information might be found here.

# MPSGraphScheduledHandler (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A notification that appears when graph execution schedules.

## Declaration

```objectivec
typedef void (^)(NSDictionary<MPSGraphTensor *,MPSGraphTensorData *> *, NSError *) MPSGraphScheduledHandler;
```

## Parameters

- `resultsDictionary`: If no error, the results dictionary produced by the graph operation. If Graph has not yet allocated, the results will be `NSNull`.
- `error`: If an error occurs, more information might be found here.
