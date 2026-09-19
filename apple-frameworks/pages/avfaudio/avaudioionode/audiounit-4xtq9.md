> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudioionode/audiounit-4xtq9

# audioUnit

**Interface language:** Objective-C

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) AudioUnit audioUnit;
```

<a id="discussion"></a>

## Discussion

The node’s underlying AudioUnit, if any.

This is only necessary for certain advanced usages.
