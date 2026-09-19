> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphexecutablescheduledhandler

# MPSGraphExecutableScheduledHandler (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A notification when graph executable execution schedules.

## Declaration

```swift
typealias MPSGraphExecutableScheduledHandler = ([MPSGraphTensorData], (any Error)?) -> Void
```

## Parameters

- `results`: If no error, the results produced by the graph operation.
- `error`: If an error occurs, more information might be found here.

# MPSGraphExecutableScheduledHandler (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A notification when graph executable execution schedules.

## Declaration

```objectivec
typedef void (^)(NSArray<MPSGraphTensorData *> *, NSError *) MPSGraphExecutableScheduledHandler;
```

## Parameters

- `results`: If no error, the results produced by the graph operation.
- `error`: If an error occurs, more information might be found here.
