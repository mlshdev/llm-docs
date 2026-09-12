> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamformat/initwithformatdescription:maxframeduration:minframeduration:validframedurations:](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamformat/initwithformatdescription:maxframeduration:minframeduration:validframedurations:)

# initWithFormatDescription:maxFrameDuration:minFrameDuration:validFrameDurations:

**Interface language:** Objective-C

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Creates a stream format with a format description and frame durations.

## Declaration

```objectivec
- (instancetype) initWithFormatDescription:(CMFormatDescriptionRef) formatDescription maxFrameDuration:(CMTime) maxFrameDuration minFrameDuration:(CMTime) minFrameDuration validFrameDurations:(NSArray<NSDictionary *> *) validFrameDurations;
```

## Parameters

- `formatDescription`: The format of the samples that a stream delivers.
- `maxFrameDuration`: The maximum frame duration the stream supports.
- `minFrameDuration`: The minimum frame duration the stream supports.
- `validFrameDurations`: A discrete set of supported frame durations.

## See Also

### Creating a Stream Format

- [streamFormatWithFormatDescription:maxFrameDuration:minFrameDuration:validFrameDurations:](streamformatwithformatdescription_maxframeduration_minframeduration_validframedurations_.md): Returns a new stream format with a format description and frame durations.
