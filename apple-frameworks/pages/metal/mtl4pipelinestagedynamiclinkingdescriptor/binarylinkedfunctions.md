> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4pipelinestagedynamiclinkingdescriptor/binarylinkedfunctions

# binaryLinkedFunctions (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Provides the array of binary functions to link.

## Declaration

```swift
var binaryLinkedFunctions: [any MTL4BinaryFunction]? { get set }
```

<a id="discussion"></a>

## Discussion

Binary functions are shader functions that you compile from Metal IR to machine code ahead of time using instances of [MTL4Compiler](../mtl4compiler.md).

# binaryLinkedFunctions (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Provides the array of binary functions to link.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSArray<id<MTL4BinaryFunction>> * binaryLinkedFunctions;
```

<a id="discussion"></a>

## Discussion

Binary functions are shader functions that you compile from Metal IR to machine code ahead of time using instances of [MTL4Compiler](../mtl4compiler.md).
