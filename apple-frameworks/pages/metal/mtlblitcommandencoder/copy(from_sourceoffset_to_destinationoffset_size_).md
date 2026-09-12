> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlblitcommandencoder/copy(from:sourceoffset:to:destinationoffset:size:)](https://developer.apple.com/documentation/metal/mtlblitcommandencoder/copy(from:sourceoffset:to:destinationoffset:size:))

# copy(from:sourceOffset:to:destinationOffset:size:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Encodes a command that copies data from one buffer into another.

## Declaration

```swift
func copy(from sourceBuffer: any MTLBuffer, sourceOffset: Int, to destinationBuffer: any MTLBuffer, destinationOffset: Int, size: Int)
```

## Parameters

- `sourceBuffer`: A buffer the command copies data from.
- `sourceOffset`: A byte offset within `sourceBuffer` the command copies from. In macOS, `sourceOffset` needs to be a multiple of `4`, but can be any value in iOS and tvOS.
- `destinationBuffer`: The destination buffer for the copy operation.
- `destinationOffset`: A byte offset within `destinationBuffer` the command copies to. In macOS, `destinationOffset` needs to be a multiple of `4`, but can be any value in iOS and tvOS.
- `size`: The number of bytes the command copies from `sourceBuffer` to `destinationBuffer`. In macOS, `size` needs to be a multiple of `4`, but can be any value in iOS and tvOS.

## Mentioned In

- [Copying data to a private resource](../copying-data-to-a-private-resource.md)

<a id="discussion"></a>

## Discussion

You can pass the same buffer to the `sourceBuffer` and `destinationBuffer` parameters if `size` is less than the distance between `sourceOffset` and `destinationOffset`.

> **Important**

>  Copying data to overlapping regions within the same buffer may result in unexpected behavior.

# copyFromBuffer:sourceOffset:toBuffer:destinationOffset:size: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Encodes a command that copies data from one buffer into another.

## Declaration

```objectivec
- (void) copyFromBuffer:(id<MTLBuffer>) sourceBuffer sourceOffset:(NSUInteger) sourceOffset toBuffer:(id<MTLBuffer>) destinationBuffer destinationOffset:(NSUInteger) destinationOffset size:(NSUInteger) size;
```

## Parameters

- `sourceBuffer`: A buffer the command copies data from.
- `sourceOffset`: A byte offset within `sourceBuffer` the command copies from. In macOS, `sourceOffset` needs to be a multiple of `4`, but can be any value in iOS and tvOS.
- `destinationBuffer`: The destination buffer for the copy operation.
- `destinationOffset`: A byte offset within `destinationBuffer` the command copies to. In macOS, `destinationOffset` needs to be a multiple of `4`, but can be any value in iOS and tvOS.
- `size`: The number of bytes the command copies from `sourceBuffer` to `destinationBuffer`. In macOS, `size` needs to be a multiple of `4`, but can be any value in iOS and tvOS.

## Mentioned In

- [Copying data to a private resource](../copying-data-to-a-private-resource.md)

<a id="discussion"></a>

## Discussion

You can pass the same buffer to the `sourceBuffer` and `destinationBuffer` parameters if `size` is less than the distance between `sourceOffset` and `destinationOffset`.

> **Important**

>  Copying data to overlapping regions within the same buffer may result in unexpected behavior.
