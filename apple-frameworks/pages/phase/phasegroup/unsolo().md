> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasegroup/unsolo()](https://developer.apple.com/documentation/phase/phasegroup/unsolo())

# unsolo() (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Restores the other groups’ volume.

## Declaration

```swift
func unsolo()
```

## See Also

### Silencing Sounds

- [mute()](mute%28%29.md): Silences the group.
- [unmute()](unmute%28%29.md): Restores the group’s volume.
- [isMuted](ismuted.md): A Boolean value that indicates whether the app silences the group.
- [solo()](solo%28%29.md): Silences all other groups.
- [isSoloed](issoloed.md): A Boolean value that indicates whether the app silences all groups other than this group.

# unsolo (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Restores the other groups’ volume.

## Declaration

```objectivec
- (void) unsolo;
```

## See Also

### Silencing Sounds

- [mute](mute%28%29.md): Silences the group.
- [unmute](unmute%28%29.md): Restores the group’s volume.
- [muted](ismuted.md): A Boolean value that indicates whether the app silences the group.
- [solo](solo%28%29.md): Silences all other groups.
- [soloed](issoloed.md): A Boolean value that indicates whether the app silences all groups other than this group.
