> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphcompilationdescriptor/compilationcompletionhandler

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
