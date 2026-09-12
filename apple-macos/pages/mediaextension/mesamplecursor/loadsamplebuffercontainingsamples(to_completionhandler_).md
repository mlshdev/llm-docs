> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mesamplecursor/loadsamplebuffercontainingsamples(to:completionhandler:)](https://developer.apple.com/documentation/mediaextension/mesamplecursor/loadsamplebuffercontainingsamples(to:completionhandler:))

# loadSampleBufferContainingSamples(to:completionHandler:) (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Builds a sample buffer that contains the samples at the cursor that you specify.

## Declaration

```swift
optional func loadSampleBufferContainingSamples(to endSampleCursor: (any MESampleCursor)?, completionHandler: @escaping @Sendable (CMSampleBuffer?, (any Error)?) -> Void)
```

```swift
optional func loadSampleBufferContainingSamples(to endSampleCursor: (any MESampleCursor)?) async throws -> CMSampleBuffer
```

## Parameters

- `endSampleCursor`: If not `nil`, this cursor indicates the last sample that the new sample buffer should contain.
- `completionHandler`: The completion block to execute when the load operation finishes.

<a id="Discussion"></a>

## Discussion

Plugin format readers that don’t implement [sampleLocation()](samplelocation%28%29.md) or that always load sample data to answer cursor queries need to implement this method. If a plug-in format reader implements [sampleLocation()](samplelocation%28%29.md), implementing [loadSampleBufferContainingSamples(to:completionHandler:)](loadsamplebuffercontainingsamples%28to_completionhandler_%29.md) is optional.

If there’s no sample data between the sample cursor and `endSampleCursor`, the sample buffer is empty. If an error occurs, the sample buffer is `nil`.

> **Important**

>  If there’s a change of format description between the sample cursor and `endSampleCursor`, the returned sample buffer needs to contain only the contiguous samples with the same format description as the first sample.

## See Also

### Sending samples to a pipeline

- [chunkDetails()](chunkdetails%28%29.md): Returns information about the chunk that holds the sample indicated by the cursor.
- [sampleLocation()](samplelocation%28%29.md): Returns the location and byte source of the sample indicated by the cursor.

# loadSampleBufferContainingSamplesToEndCursor:completionHandler: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Builds a sample buffer that contains the samples at the cursor that you specify.

## Declaration

```objectivec
- (void) loadSampleBufferContainingSamplesToEndCursor:(id<MESampleCursor>) endSampleCursor completionHandler:(void (^)(CMSampleBufferRef newSampleBuffer, NSError *error)) completionHandler;
```

## Parameters

- `endSampleCursor`: If not `nil`, this cursor indicates the last sample that the new sample buffer should contain.
- `completionHandler`: The completion block to execute when the load operation finishes.

<a id="Discussion"></a>

## Discussion

Plugin format readers that don’t implement [sampleLocationReturningError:](samplelocation%28%29.md) or that always load sample data to answer cursor queries need to implement this method. If a plug-in format reader implements [sampleLocationReturningError:](samplelocation%28%29.md), implementing [loadSampleBufferContainingSamplesToEndCursor:completionHandler:](loadsamplebuffercontainingsamples%28to_completionhandler_%29.md) is optional.

If there’s no sample data between the sample cursor and `endSampleCursor`, the sample buffer is empty. If an error occurs, the sample buffer is `nil`.

> **Important**

>  If there’s a change of format description between the sample cursor and `endSampleCursor`, the returned sample buffer needs to contain only the contiguous samples with the same format description as the first sample.

## See Also

### Sending samples to a pipeline

- [chunkDetailsReturningError:](chunkdetails%28%29.md): Returns information about the chunk that holds the sample indicated by the cursor.
- [sampleLocationReturningError:](samplelocation%28%29.md): Returns the location and byte source of the sample indicated by the cursor.
