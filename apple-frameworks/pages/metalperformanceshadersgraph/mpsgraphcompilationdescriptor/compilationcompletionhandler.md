> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphcompilationdescriptor/compilationcompletionhandler](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphcompilationdescriptor/compilationcompletionhandler)

# compilationCompletionHandler (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The handler that the graph calls when the compilation completes.

## Declaration

```swift
var compilationCompletionHandler: MPSGraphCompilationCompletionHandler { get set }
```

<a id="discussion"></a>

## Discussion

Default value is nil.

# compilationCompletionHandler (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The handler that the graph calls when the compilation completes.

## Declaration

```objectivec
@property (atomic, readwrite) MPSGraphCompilationCompletionHandler compilationCompletionHandler;
```

<a id="discussion"></a>

## Discussion

Default value is nil.
