> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mesamplelocation/init(bytesource:samplelocation:)](https://developer.apple.com/documentation/mediaextension/mesamplelocation/init(bytesource:samplelocation:))

# init(byteSource:sampleLocation:) (Swift)

**Framework:** MediaExtension  
**Kind:** Initializer  
**Availability:** macOS 14.0+

Creates a sample location object with the byte source and sample location that you specify.

## Declaration

```swift
init(byteSource: MEByteSource, sampleLocation: AVSampleCursorStorageRange)
```

## Parameters

- `byteSource`: The byte source to use to read the data for the sample.
- `sampleLocation`: The starting file offset and size in bytes of the sample.

# initWithByteSource:sampleLocation: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Creates a sample location object with the byte source and sample location that you specify.

## Declaration

```objectivec
- (instancetype) initWithByteSource:(MEByteSource *) byteSource sampleLocation:(AVSampleCursorStorageRange) sampleLocation;
```

## Parameters

- `byteSource`: The byte source to use to read the data for the sample.
- `sampleLocation`: The starting file offset and size in bytes of the sample.
