> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/catapdescription/stream-u4ff

# stream

**Interface language:** Objective-C

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.0+ · macOS 12.0+

## Declaration

```objectivec
@property (atomic, copy, nullable) NSNumber * stream;
```

<a id="discussion"></a>

## Discussion

An optional NSNumber that will have a value if this tap taps a specific device stream. The value represents the index of the hardware stream.
