> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiotime/hosttime

# hostTime (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The host time.

## Declaration

```swift
var hostTime: UInt64 { get }
```

## See Also

### Manipulating Host Time

- [isHostTimeValid](ishosttimevalid.md): A Boolean value that indicates whether the host time value is valid.
- [hostTime(forSeconds:)](hosttime%28forseconds_%29.md): Converts seconds to host time.
- [seconds(forHostTime:)](seconds%28forhosttime_%29.md): Converts host time to seconds.

# hostTime (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The host time.

## Declaration

```objectivec
@property (nonatomic, readonly) uint64_t hostTime;
```

## See Also

### Manipulating Host Time

- [hostTimeValid](ishosttimevalid.md): A Boolean value that indicates whether the host time value is valid.
- [hostTimeForSeconds:](hosttime%28forseconds_%29.md): Converts seconds to host time.
- [secondsForHostTime:](seconds%28forhosttime_%29.md): Converts host time to seconds.
