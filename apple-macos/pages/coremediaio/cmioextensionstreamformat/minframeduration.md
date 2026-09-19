> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremediaio/cmioextensionstreamformat/minframeduration

# minFrameDuration (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

The minimum frame duration a stream supports.

## Declaration

```swift
var minFrameDuration: CMTime { get }
```

## See Also

### Configuring Frame Durations

- [maxFrameDuration](maxframeduration.md): The maximum duration a stream supports.
- [validFrameDurations](validframedurations-707st.md): An array of frame durations the stream supports.

# minFrameDuration (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

The minimum frame duration a stream supports.

## Declaration

```objectivec
@property (atomic, readonly) CMTime minFrameDuration;
```

## See Also

### Configuring Frame Durations

- [maxFrameDuration](maxframeduration.md): The maximum duration a stream supports.
- [validFrameDurations](validframedurations-4rbay.md): An array of frame durations the stream supports.
