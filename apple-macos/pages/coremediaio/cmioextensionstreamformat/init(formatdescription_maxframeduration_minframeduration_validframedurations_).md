> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamformat/init(formatdescription:maxframeduration:minframeduration:validframedurations:)](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamformat/init(formatdescription:maxframeduration:minframeduration:validframedurations:))

# init(formatDescription:maxFrameDuration:minFrameDuration:validFrameDurations:)

**Framework:** Core Media I/O  
**Kind:** Initializer  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+ · Xcode 13.0+

Creates a stream format with a format description and frame durations.

## Declaration

```swift
@nonobjc convenience init(formatDescription: CMFormatDescription, maxFrameDuration: CMTime, minFrameDuration: CMTime, validFrameDurations: [CMTime]?)
```

## Parameters

- `formatDescription`: The format of the samples that a stream delivers.
- `maxFrameDuration`: The maximum frame duration the stream supports.
- `minFrameDuration`: The minimum frame duration the stream supports.
- `validFrameDurations`: A discrete set of supported frame durations.
