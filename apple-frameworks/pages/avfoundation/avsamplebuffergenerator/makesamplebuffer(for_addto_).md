> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffergenerator/makesamplebuffer(for:addto:)](https://developer.apple.com/documentation/avfoundation/avsamplebuffergenerator/makesamplebuffer(for:addto:))

# makeSampleBuffer(for:addTo:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a sample buffer and attempts to defer I/O for its data.

## Declaration

```swift
func makeSampleBuffer(for request: AVSampleBufferRequest, addTo batch: AVSampleBufferGeneratorBatch) throws -> CMSampleBuffer
```

## Parameters

- `request`: A sample buffer creation request.
- `batch`: A batch object to contain the output sample buffer. You must create this object by calling [makeBatch()](makebatch%28%29.md) on the same instance of [AVSampleBufferGenerator](../avsamplebuffergenerator.md) or an error occurs.

<a id="return-value"></a>

## Return Value

A sample buffer.

<a id="Discussion"></a>

## Discussion

Call the [makeDataReady(completionHandler:)](../avsamplebuffergeneratorbatch/makedataready%28completionhandler_%29.md) on [AVSampleBufferGeneratorBatch](../avsamplebuffergeneratorbatch.md) once to commence I/O and load sample data for all [CMSampleBuffer](../../coremedia/cmsamplebuffer.md) objects in a batch. After loading commences, any subsequent calls to [makeSampleBuffer(for:addTo:)](makesamplebuffer%28for_addto_%29.md) throw an exception.

The generator may defer I/O to fetch sample data depending on the source of the sample data and the generator’s timebase

The request may fail based on generator configuration or file format.

## See Also

### Creating a sample buffer

- [makeSampleBuffer(for:)](makesamplebuffer%28for_%29.md): Creates a sample buffer, and attempts to load its data asynchronously if requested.
- [makeBatch()](makebatch%28%29.md): Creates a batch object to handle generating multiple sample buffers.
- [createSampleBuffer(for:)](createsamplebuffer%28for_%29.md): Deprecated. Creates a new sample buffer reference for the specified buffer request.

# createSampleBufferForRequest:addingToBatch:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a sample buffer and attempts to defer I/O for its data.

## Declaration

```objectivec
- (CMSampleBufferRef) createSampleBufferForRequest:(AVSampleBufferRequest *) request addingToBatch:(AVSampleBufferGeneratorBatch *) batch error:(NSError **) outError;
```

## Parameters

- `request`: A sample buffer creation request.
- `batch`: A batch object to contain the output sample buffer. You must create this object by calling [makeBatch](makebatch%28%29.md) on the same instance of [AVSampleBufferGenerator](../avsamplebuffergenerator.md) or an error occurs.
- `outError`: A pointer that the system populates with an [NSError](../../foundation/nserror.md) object if a failure occurs.

<a id="return-value"></a>

## Return Value

A sample buffer.

<a id="Discussion"></a>

## Discussion

Call the [makeDataReadyWithCompletionHandler:](../avsamplebuffergeneratorbatch/makedataready%28completionhandler_%29.md) on [AVSampleBufferGeneratorBatch](../avsamplebuffergeneratorbatch.md) once to commence I/O and load sample data for all [CMSampleBufferRef](../../coremedia/cmsamplebuffer.md) objects in a batch. After loading commences, any subsequent calls to [createSampleBufferForRequest:addingToBatch:error:](makesamplebuffer%28for_addto_%29.md) throw an exception.

The generator may defer I/O to fetch sample data depending on the source of the sample data and the generator’s timebase

The request may fail based on generator configuration or file format.

## See Also

### Creating a sample buffer

- [createSampleBufferForRequest:error:](makesamplebuffer%28for_%29.md): Creates a sample buffer, and attempts to load its data asynchronously if requested.
- [makeBatch](makebatch%28%29.md): Creates a batch object to handle generating multiple sample buffers.
- [createSampleBufferForRequest:](createsamplebuffer%28for_%29.md): Deprecated. Creates a new sample buffer reference for the specified buffer request.
