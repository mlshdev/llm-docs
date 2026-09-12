> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/datareadiness-swift.property](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/datareadiness-swift.property)

# dataReadiness

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A value that indicates the status of the data the sample buffer contains.

## Declaration

```swift
var dataReadiness: CMSampleBuffer.DataReadiness { get }
```

## See Also

### Determining Readiness

- [setDataReadiness(\_:)](setdatareadiness%28__%29.md): Sets the status of the sample buffer’s data.
- [CMSampleBuffer.DataReadiness](datareadiness-swift.enum.md): Constants that indicate the readiness of a sample buffer’s data.
- [makeDataReady()](makedataready%28%29.md): Makes the sample buffer’s data ready for use by calling its handler closure.
- [trackDataReadiness(\_:)](trackdatareadiness%28__%29.md): Associates a sample buffer’s data readiness with that of another sample buffer.
