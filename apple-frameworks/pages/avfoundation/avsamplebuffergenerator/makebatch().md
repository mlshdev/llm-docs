> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffergenerator/makebatch()](https://developer.apple.com/documentation/avfoundation/avsamplebuffergenerator/makebatch())

# makeBatch() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a batch object to handle generating multiple sample buffers.

## Declaration

```swift
func makeBatch() -> AVSampleBufferGeneratorBatch
```

<a id="return-value"></a>

## Return Value

An object to batch generate sample buffers.

<a id="Discussion"></a>

## Discussion

Generating sample buffers in batches optimizes performance by allowing the system to asynchronously load sample data and optimize I/O when possible.

## See Also

### Creating a sample buffer

- [makeSampleBuffer(for:)](makesamplebuffer%28for_%29.md): Creates a sample buffer, and attempts to load its data asynchronously if requested.
- [makeSampleBuffer(for:addTo:)](makesamplebuffer%28for_addto_%29.md): Creates a sample buffer and attempts to defer I/O for its data.
- [createSampleBuffer(for:)](createsamplebuffer%28for_%29.md): Deprecated. Creates a new sample buffer reference for the specified buffer request.

# makeBatch (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a batch object to handle generating multiple sample buffers.

## Declaration

```objectivec
- (AVSampleBufferGeneratorBatch *) makeBatch;
```

<a id="return-value"></a>

## Return Value

An object to batch generate sample buffers.

<a id="Discussion"></a>

## Discussion

Generating sample buffers in batches optimizes performance by allowing the system to asynchronously load sample data and optimize I/O when possible.

## See Also

### Creating a sample buffer

- [createSampleBufferForRequest:error:](makesamplebuffer%28for_%29.md): Creates a sample buffer, and attempts to load its data asynchronously if requested.
- [createSampleBufferForRequest:addingToBatch:error:](makesamplebuffer%28for_addto_%29.md): Creates a sample buffer and attempts to defer I/O for its data.
- [createSampleBufferForRequest:](createsamplebuffer%28for_%29.md): Deprecated. Creates a new sample buffer reference for the specified buffer request.
