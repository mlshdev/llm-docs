> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mesamplecursor/chunkdetails()](https://developer.apple.com/documentation/mediaextension/mesamplecursor/chunkdetails())

# chunkDetails() (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Returns information about the chunk that holds the sample indicated by the cursor.

## Declaration

```swift
optional func chunkDetails() throws -> MESampleCursorChunk
```

<a id="return-value"></a>

## Return Value

A sample cursor chunk.

<a id="Discussion"></a>

## Discussion

If the sample resides in a contiguous chunk of the file among similar samples, this method returns information about that chunk.

> **Note**

>  If a cursor implements this method, it also needs to implement [sampleLocation()](samplelocation%28%29.md) to get samples inside the chunk’s location.

It may not be practical to use this method with some media assets. In this case, or if the cursor doesn’t support this method, it returns [MEError.Code.locationNotAvailable](../meerror-swift.struct/code/locationnotavailable.md), which indicates to use [loadSampleBufferContainingSamples(to:completionHandler:)](loadsamplebuffercontainingsamples%28to_completionhandler_%29.md) to load the sample data instead.

## See Also

### Sending samples to a pipeline

- [sampleLocation()](samplelocation%28%29.md): Returns the location and byte source of the sample indicated by the cursor.
- [loadSampleBufferContainingSamples(to:completionHandler:)](loadsamplebuffercontainingsamples%28to_completionhandler_%29.md): Builds a sample buffer that contains the samples at the cursor that you specify.

# chunkDetailsReturningError: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Returns information about the chunk that holds the sample indicated by the cursor.

## Declaration

```objectivec
- (MESampleCursorChunk *) chunkDetailsReturningError:(NSError **) error;
```

## Parameters

- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

A sample cursor chunk. On failure, this method returns `nil`.

<a id="Discussion"></a>

## Discussion

If the sample resides in a contiguous chunk of the file among similar samples, this method returns information about that chunk.

> **Note**

>  If a cursor implements this method, it also needs to implement [sampleLocationReturningError:](samplelocation%28%29.md) to get samples inside the chunk’s location.

It may not be practical to use this method with some media assets. In this case, or if the cursor doesn’t support this method, it returns [MEErrorLocationNotAvailable](../meerror-swift.struct/code/locationnotavailable.md), which indicates to use [loadSampleBufferContainingSamplesToEndCursor:completionHandler:](loadsamplebuffercontainingsamples%28to_completionhandler_%29.md) to load the sample data instead.

## See Also

### Sending samples to a pipeline

- [sampleLocationReturningError:](samplelocation%28%29.md): Returns the location and byte source of the sample indicated by the cursor.
- [loadSampleBufferContainingSamplesToEndCursor:completionHandler:](loadsamplebuffercontainingsamples%28to_completionhandler_%29.md): Builds a sample buffer that contains the samples at the cursor that you specify.
