> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/makedataready()](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/makedataready())

# makeDataReady()

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Makes the sample buffer’s data ready for use by calling its handler closure.

## Declaration

```swift
func makeDataReady() throws
```

## See Also

### Determining Readiness

- [dataReadiness](datareadiness-swift.property.md): A value that indicates the status of the data the sample buffer contains.
- [setDataReadiness(\_:)](setdatareadiness%28__%29.md): Sets the status of the sample buffer’s data.
- [CMSampleBuffer.DataReadiness](datareadiness-swift.enum.md): Constants that indicate the readiness of a sample buffer’s data.
- [trackDataReadiness(\_:)](trackdatareadiness%28__%29.md): Associates a sample buffer’s data readiness with that of another sample buffer.
