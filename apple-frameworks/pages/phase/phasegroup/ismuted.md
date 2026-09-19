> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phasegroup/ismuted

# isMuted (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the app silences the group.

## Declaration

```swift
var isMuted: Bool { get }
```

## See Also

### Silencing Sounds

- [mute()](mute%28%29.md): Silences the group.
- [unmute()](unmute%28%29.md): Restores the group’s volume.
- [solo()](solo%28%29.md): Silences all other groups.
- [unsolo()](unsolo%28%29.md): Restores the other groups’ volume.
- [isSoloed](issoloed.md): A Boolean value that indicates whether the app silences all groups other than this group.

# muted (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the app silences the group.

## Declaration

```objectivec
@property (readonly, getter=isMuted) BOOL muted;
```

## See Also

### Silencing Sounds

- [mute](mute%28%29.md): Silences the group.
- [unmute](unmute%28%29.md): Restores the group’s volume.
- [solo](solo%28%29.md): Silences all other groups.
- [unsolo](unsolo%28%29.md): Restores the other groups’ volume.
- [soloed](issoloed.md): A Boolean value that indicates whether the app silences all groups other than this group.
