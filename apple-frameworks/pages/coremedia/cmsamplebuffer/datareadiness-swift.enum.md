> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/datareadiness-swift.enum](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/datareadiness-swift.enum)

# CMSampleBuffer.DataReadiness

**Framework:** Core Media  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that indicate the readiness of a sample buffer’s data.

## Declaration

```swift
enum DataReadiness
```

## Topics

### States

- [CMSampleBuffer.DataReadiness.notReady](datareadiness-swift.enum/notready.md): The media data isn’t ready to use.
- [CMSampleBuffer.DataReadiness.ready](datareadiness-swift.enum/ready.md): The media data is ready to use.
- [CMSampleBuffer.DataReadiness.failed(\_:)](datareadiness-swift.enum/failed%28__%29.md): The system failed to load the media data.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining Readiness

- [dataReadiness](datareadiness-swift.property.md): A value that indicates the status of the data the sample buffer contains.
- [setDataReadiness(\_:)](setdatareadiness%28__%29.md): Sets the status of the sample buffer’s data.
- [makeDataReady()](makedataready%28%29.md): Makes the sample buffer’s data ready for use by calling its handler closure.
- [trackDataReadiness(\_:)](trackdatareadiness%28__%29.md): Associates a sample buffer’s data readiness with that of another sample buffer.
