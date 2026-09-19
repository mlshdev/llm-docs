> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremediaio/cmioextensionstreamformat/validframedurations-707st

# validFrameDurations

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+ · Xcode 13.0+

An array of frame durations the stream supports.

## Declaration

```swift
@nonobjc var validFrameDurations: [CMTime]? { get }
```

## See Also

### Configuring Frame Durations

- [minFrameDuration](minframeduration.md): The minimum frame duration a stream supports.
- [maxFrameDuration](maxframeduration.md): The maximum duration a stream supports.
