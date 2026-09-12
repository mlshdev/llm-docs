> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/meestimatedsamplelocation/init(bytesource:estimatedsamplelocation:refinementdatalocation:)](https://developer.apple.com/documentation/mediaextension/meestimatedsamplelocation/init(bytesource:estimatedsamplelocation:refinementdatalocation:))

# init(byteSource:estimatedSampleLocation:refinementDataLocation:) (Swift)

**Framework:** MediaExtension  
**Kind:** Initializer  
**Availability:** macOS 14.0+

Creates an estimated sample location object with the byte source, sample location, and data location that you specify.

## Declaration

```swift
init(byteSource: MEByteSource, estimatedSampleLocation: AVSampleCursorStorageRange, refinementDataLocation: AVSampleCursorStorageRange)
```

## Parameters

- `byteSource`: The byte source to use to read the data for the sample.
- `estimatedSampleLocation`: The estimated starting file offset and size in bytes of the sample.
- `refinementDataLocation`: The starting file offset and size in bytes of the data necessary to provide an accurate sample location.

# initWithByteSource:estimatedSampleLocation:refinementDataLocation: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Creates an estimated sample location object with the byte source, sample location, and data location that you specify.

## Declaration

```objectivec
- (instancetype) initWithByteSource:(MEByteSource *) byteSource estimatedSampleLocation:(AVSampleCursorStorageRange) estimatedSampleLocation refinementDataLocation:(AVSampleCursorStorageRange) refinementDataLocation;
```

## Parameters

- `byteSource`: The byte source to use to read the data for the sample.
- `estimatedSampleLocation`: The estimated starting file offset and size in bytes of the sample.
- `refinementDataLocation`: The starting file offset and size in bytes of the data necessary to provide an accurate sample location.
