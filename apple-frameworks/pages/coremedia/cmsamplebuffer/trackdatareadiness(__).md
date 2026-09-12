> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/trackdatareadiness(_:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/trackdatareadiness(_:))

# trackDataReadiness(\_:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Associates a sample buffer’s data readiness with that of another sample buffer.

## Declaration

```swift
func trackDataReadiness(_ sampleBufferToTrack: CMSampleBuffer) throws
```

## Parameters

- `sampleBufferToTrack`: The sample buffer for which to track readiness.

<a id="Discussion"></a>

## Discussion

After calling this method, retrieving the value of the [dataReadiness](datareadiness-swift.property.md) property retrieves the value from the tracked sample buffer. Likewise, calling the [makeDataReady()](makedataready%28%29.md) method calls the tracked sample buffers method.

Use this method to convert a multi-sample buffer into single-sample buffer before the data is ready. The single-sample buffer tracks the data readiness of the multi-sample buffers.

## See Also

### Determining Readiness

- [dataReadiness](datareadiness-swift.property.md): A value that indicates the status of the data the sample buffer contains.
- [setDataReadiness(\_:)](setdatareadiness%28__%29.md): Sets the status of the sample buffer’s data.
- [CMSampleBuffer.DataReadiness](datareadiness-swift.enum.md): Constants that indicate the readiness of a sample buffer’s data.
- [makeDataReady()](makedataready%28%29.md): Makes the sample buffer’s data ready for use by calling its handler closure.
