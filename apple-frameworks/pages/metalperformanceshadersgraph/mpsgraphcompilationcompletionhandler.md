> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphcompilationcompletionhandler](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphcompilationcompletionhandler)

# MPSGraphCompilationCompletionHandler (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A notification that appears when compilation finishes.

## Declaration

```swift
typealias MPSGraphCompilationCompletionHandler = (MPSGraphExecutable, (any Error)?) -> Void
```

## Parameters

- `executable`: If no error, the executable produced by the compilation.
- `error`: If an error occurs, more information might be found here.

# MPSGraphCompilationCompletionHandler (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A notification that appears when compilation finishes.

## Declaration

```objectivec
typedef void (^)(MPSGraphExecutable *, NSError *) MPSGraphCompilationCompletionHandler;
```

## Parameters

- `executable`: If no error, the executable produced by the compilation.
- `error`: If an error occurs, more information might be found here.
