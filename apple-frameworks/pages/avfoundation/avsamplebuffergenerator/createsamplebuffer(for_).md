> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avsamplebuffergenerator/createsamplebuffer(for:)](https://developer.apple.com/documentation/avfoundation/avsamplebuffergenerator/createsamplebuffer(for:))

# createSampleBuffer(for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 13.0)

Creates a new sample buffer reference for the specified buffer request.

> Use -createSampleBufferForRequest: error:, passing NULL for the error if not required

## Declaration

```swift
func createSampleBuffer(for request: AVSampleBufferRequest) -> CMSampleBuffer?
```

## Parameters

- `request`: The sample buffer request.

<a id="return-value"></a>

## Return Value

Returns a new `CMSampleBufferRef`.

<a id="Discussion"></a>

## Discussion

It is an error to use an `AVSampleBufferRequest` object with mode set to `AVSampleBufferRequestModeScheduled` when the `AVSampleBufferGenerator` was created with a `NULL` timebase.

## See Also

### Creating a sample buffer

- [makeSampleBuffer(for:)](makesamplebuffer%28for_%29.md): Creates a sample buffer, and attempts to load its data asynchronously if requested.
- [makeBatch()](makebatch%28%29.md): Creates a batch object to handle generating multiple sample buffers.
- [makeSampleBuffer(for:addTo:)](makesamplebuffer%28for_addto_%29.md): Creates a sample buffer and attempts to defer I/O for its data.

# createSampleBufferForRequest: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 13.0)

Creates a new sample buffer reference for the specified buffer request.

> Use -createSampleBufferForRequest: error:, passing NULL for the error if not required

## Declaration

```objectivec
- (CMSampleBufferRef) createSampleBufferForRequest:(AVSampleBufferRequest *) request;
```

## Parameters

- `request`: The sample buffer request.

<a id="return-value"></a>

## Return Value

Returns a new `CMSampleBufferRef`.

<a id="Discussion"></a>

## Discussion

It is an error to use an `AVSampleBufferRequest` object with mode set to `AVSampleBufferRequestModeScheduled` when the `AVSampleBufferGenerator` was created with a `NULL` timebase.

## See Also

### Creating a sample buffer

- [createSampleBufferForRequest:error:](makesamplebuffer%28for_%29.md): Creates a sample buffer, and attempts to load its data asynchronously if requested.
- [makeBatch](makebatch%28%29.md): Creates a batch object to handle generating multiple sample buffers.
- [createSampleBufferForRequest:addingToBatch:error:](makesamplebuffer%28for_addto_%29.md): Creates a sample buffer and attempts to defer I/O for its data.
