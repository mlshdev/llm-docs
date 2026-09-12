> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffermakedataready(_:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffermakedataready(_:))

# CMSampleBufferMakeDataReady(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Makes the sample buffer’s data ready for use by invoking its callback to load the data.

## Declaration

```swift
func CMSampleBufferMakeDataReady(_ sbuf: CMSampleBuffer) -> OSStatus
```

## Parameters

- `sbuf`: The sample buffer being modified.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

The `CMSampleBufferMakeDataReadyCallback` is passed in by the client during creation. It must return 0 if successful, and in that case, `CMSampleBufferMakeDataReady` sets the data readiness of the `CMSampleBuffer` to true. If the sample buffer isn’t ready, and there’s no `CMSampleBufferMakeDataReadyCallback` to call, `kCMSampleBufferError_BufferNotReady` will be returned. Similarly, if the `CMSampleBuffer` isn’t ready, and the `CMSampleBufferMakeDataReadyCallback` fails and returns an error, [CMSampleBuffer](cmsamplebuffer.md) will be returned.

## See Also

### Determining Readiness

- [CMSampleBufferDataIsReady(\_:)](cmsamplebufferdataisready%28__%29.md): Returns a Boolean value that indicates whether the sample buffer’s data is ready for use.
- [CMSampleBufferSetDataReady(\_:)](cmsamplebuffersetdataready%28__%29.md): Marks a sample buffer’s data as ready for use.
- [CMSampleBufferSetDataFailed(\_:status:)](cmsamplebuffersetdatafailed%28__status_%29.md): Marks the sample buffer’s data as failed to indicate that it won’t become ready.
- [CMSampleBufferHasDataFailed(\_:statusOut:)](cmsamplebufferhasdatafailed%28__statusout_%29.md): Returns a Boolean value that indicates whether the sample buffer’s data loading request failed.
- [CMSampleBufferTrackDataReadiness(\_:sampleBufferToTrack:)](cmsamplebuffertrackdatareadiness%28__samplebuffertotrack_%29.md): Associates a sample buffer’s data readiness with that of another sample buffer.

# CMSampleBufferMakeDataReady (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Makes the sample buffer’s data ready for use by invoking its callback to load the data.

## Declaration

```objectivec
extern OSStatus CMSampleBufferMakeDataReady(CMSampleBufferRef sbuf);
```

## Parameters

- `sbuf`: The sample buffer being modified.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

The `CMSampleBufferMakeDataReadyCallback` is passed in by the client during creation. It must return 0 if successful, and in that case, `CMSampleBufferMakeDataReady` sets the data readiness of the `CMSampleBuffer` to true. If the sample buffer isn’t ready, and there’s no `CMSampleBufferMakeDataReadyCallback` to call, `kCMSampleBufferError_BufferNotReady` will be returned. Similarly, if the `CMSampleBuffer` isn’t ready, and the `CMSampleBufferMakeDataReadyCallback` fails and returns an error, [CMSampleBufferRef](cmsamplebuffer.md) will be returned.

## See Also

### Determining Readiness

- [CMSampleBufferDataIsReady](cmsamplebufferdataisready%28__%29.md): Returns a Boolean value that indicates whether the sample buffer’s data is ready for use.
- [CMSampleBufferSetDataReady](cmsamplebuffersetdataready%28__%29.md): Marks a sample buffer’s data as ready for use.
- [CMSampleBufferSetDataFailed](cmsamplebuffersetdatafailed%28__status_%29.md): Marks the sample buffer’s data as failed to indicate that it won’t become ready.
- [CMSampleBufferHasDataFailed](cmsamplebufferhasdatafailed%28__statusout_%29.md): Returns a Boolean value that indicates whether the sample buffer’s data loading request failed.
- [CMSampleBufferTrackDataReadiness](cmsamplebuffertrackdatareadiness%28__samplebuffertotrack_%29.md): Associates a sample buffer’s data readiness with that of another sample buffer.
