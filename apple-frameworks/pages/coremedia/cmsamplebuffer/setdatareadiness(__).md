> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffer/setdatareadiness(_:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffer/setdatareadiness(_:))

# setDataReadiness(\_:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the status of the sample buffer’s data.

## Declaration

```swift
func setDataReadiness(_ newValue: CMSampleBuffer.DataReadiness) throws
```

## Parameters

- `newValue`: The new ready state.

## See Also

### Determining Readiness

- [dataReadiness](datareadiness-swift.property.md): A value that indicates the status of the data the sample buffer contains.
- [CMSampleBuffer.DataReadiness](datareadiness-swift.enum.md): Constants that indicate the readiness of a sample buffer’s data.
- [makeDataReady()](makedataready%28%29.md): Makes the sample buffer’s data ready for use by calling its handler closure.
- [trackDataReadiness(\_:)](trackdatareadiness%28__%29.md): Associates a sample buffer’s data readiness with that of another sample buffer.
