> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffergenerator/makesamplebuffer(for:)](https://developer.apple.com/documentation/avfoundation/avsamplebuffergenerator/makesamplebuffer(for:))

# makeSampleBuffer(for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a sample buffer, and attempts to load its data asynchronously if requested.

## Declaration

```swift
func makeSampleBuffer(for request: AVSampleBufferRequest) throws -> sending CMSampleBuffer
```

## Parameters

- `request`: A sample buffer creation request.

<a id="return-value"></a>

## Return Value

A sample buffer object.

<a id="Discussion"></a>

## Discussion

If you created the generator with a `nil` timebase, any associated [AVSampleBufferRequest](../avsamplebufferrequest.md) objects default to using a request mode of [AVSampleBufferRequest.Mode.immediate](../avsamplebufferrequest/mode-swift.enum/immediate.md).

Call the [notifyOfDataReady(for:completionHandler:)](notifyofdataready%28for_completionhandler_%29.md) class method to have the system notify you when sample buffer data is available.

The request may fail based on generator configuration or file format.

## See Also

### Creating a sample buffer

- [makeBatch()](makebatch%28%29.md): Creates a batch object to handle generating multiple sample buffers.
- [makeSampleBuffer(for:addTo:)](makesamplebuffer%28for_addto_%29.md): Creates a sample buffer and attempts to defer I/O for its data.
- [createSampleBuffer(for:)](createsamplebuffer%28for_%29.md): Deprecated. Creates a new sample buffer reference for the specified buffer request.

# createSampleBufferForRequest:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a sample buffer, and attempts to load its data asynchronously if requested.

## Declaration

```objectivec
- (CMSampleBufferRef) createSampleBufferForRequest:(AVSampleBufferRequest *) request error:(NSError **) outError;
```

## Parameters

- `request`: A sample buffer creation request.
- `outError`: A pointer that the system populates with an [NSError](../../foundation/nserror.md) object if a failure occurs.

<a id="return-value"></a>

## Return Value

A sample buffer object.

<a id="Discussion"></a>

## Discussion

If you created the generator with a `nil` timebase, any associated [AVSampleBufferRequest](../avsamplebufferrequest.md) objects default to using a request mode of [AVSampleBufferRequestModeImmediate](../avsamplebufferrequest/mode-swift.enum/immediate.md).

Call the [notifyOfDataReadyForSampleBuffer:completionHandler:](notifyofdataready%28for_completionhandler_%29.md) class method to have the system notify you when sample buffer data is available.

The request may fail based on generator configuration or file format.

## See Also

### Creating a sample buffer

- [makeBatch](makebatch%28%29.md): Creates a batch object to handle generating multiple sample buffers.
- [createSampleBufferForRequest:addingToBatch:error:](makesamplebuffer%28for_addto_%29.md): Creates a sample buffer and attempts to defer I/O for its data.
- [createSampleBufferForRequest:](createsamplebuffer%28for_%29.md): Deprecated. Creates a new sample buffer reference for the specified buffer request.
