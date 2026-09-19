> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/phase/phasegroup/unmute()

# unmute() (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Restores the group’s volume.

## Declaration

```swift
func unmute()
```

## See Also

### Silencing Sounds

- [mute()](mute%28%29.md): Silences the group.
- [isMuted](ismuted.md): A Boolean value that indicates whether the app silences the group.
- [solo()](solo%28%29.md): Silences all other groups.
- [unsolo()](unsolo%28%29.md): Restores the other groups’ volume.
- [isSoloed](issoloed.md): A Boolean value that indicates whether the app silences all groups other than this group.

# unmute (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Restores the group’s volume.

## Declaration

```objectivec
- (void) unmute;
```

## See Also

### Silencing Sounds

- [mute](mute%28%29.md): Silences the group.
- [muted](ismuted.md): A Boolean value that indicates whether the app silences the group.
- [solo](solo%28%29.md): Silences all other groups.
- [unsolo](unsolo%28%29.md): Restores the other groups’ volume.
- [soloed](issoloed.md): A Boolean value that indicates whether the app silences all groups other than this group.
