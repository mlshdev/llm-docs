> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phasegroup/mute()

# mute() (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Silences the group.

## Declaration

```swift
func mute()
```

## See Also

### Silencing Sounds

- [unmute()](unmute%28%29.md): Restores the group’s volume.
- [isMuted](ismuted.md): A Boolean value that indicates whether the app silences the group.
- [solo()](solo%28%29.md): Silences all other groups.
- [unsolo()](unsolo%28%29.md): Restores the other groups’ volume.
- [isSoloed](issoloed.md): A Boolean value that indicates whether the app silences all groups other than this group.

# mute (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Silences the group.

## Declaration

```objectivec
- (void) mute;
```

## See Also

### Silencing Sounds

- [unmute](unmute%28%29.md): Restores the group’s volume.
- [muted](ismuted.md): A Boolean value that indicates whether the app silences the group.
- [solo](solo%28%29.md): Silences all other groups.
- [unsolo](unsolo%28%29.md): Restores the other groups’ volume.
- [soloed](issoloed.md): A Boolean value that indicates whether the app silences all groups other than this group.
