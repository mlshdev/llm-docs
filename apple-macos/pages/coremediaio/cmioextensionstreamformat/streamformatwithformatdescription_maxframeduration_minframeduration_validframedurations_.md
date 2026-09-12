> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamformat/streamformatwithformatdescription:maxframeduration:minframeduration:validframedurations:](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamformat/streamformatwithformatdescription:maxframeduration:minframeduration:validframedurations:)

# streamFormatWithFormatDescription:maxFrameDuration:minFrameDuration:validFrameDurations:

**Interface language:** Objective-C

**Framework:** Core Media I/O  
**Kind:** Type Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Returns a new stream format with a format description and frame durations.

## Declaration

```objectivec
+ (instancetype) streamFormatWithFormatDescription:(CMFormatDescriptionRef) formatDescription maxFrameDuration:(CMTime) maxFrameDuration minFrameDuration:(CMTime) minFrameDuration validFrameDurations:(NSArray<NSDictionary *> *) validFrameDurations;
```

## Parameters

- `formatDescription`: The format of the samples that a stream delivers.
- `maxFrameDuration`: The maximum frame duration the stream supports.
- `minFrameDuration`: The minimum frame duration the stream supports.
- `validFrameDurations`: A discrete set of supported frame durations.

## See Also

### Creating a Stream Format

- [initWithFormatDescription:maxFrameDuration:minFrameDuration:validFrameDurations:](initwithformatdescription_maxframeduration_minframeduration_validframedurations_.md): Creates a stream format with a format description and frame durations.
