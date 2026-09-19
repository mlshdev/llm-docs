> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphexecutiondescriptor/compilationdescriptor

# compilationDescriptor (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

The compilation descriptor for the graph.

## Declaration

```swift
@NSCopying var compilationDescriptor: MPSGraphCompilationDescriptor? { get set }
```

<a id="discussion"></a>

## Discussion

Default value is nil.

# compilationDescriptor (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

The compilation descriptor for the graph.

## Declaration

```objectivec
@property (atomic, copy, readwrite, nullable) MPSGraphCompilationDescriptor * compilationDescriptor;
```

<a id="discussion"></a>

## Discussion

Default value is nil.
