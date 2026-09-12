> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasegroup/solo()](https://developer.apple.com/documentation/phase/phasegroup/solo())

# solo() (Swift)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Silences all other groups.

## Declaration

```swift
func solo()
```

<a id="Discussion"></a>

## Discussion

The engine silences all groups other than the group on which the app calls this function.

## See Also

### Silencing Sounds

- [mute()](mute%28%29.md): Silences the group.
- [unmute()](unmute%28%29.md): Restores the group’s volume.
- [isMuted](ismuted.md): A Boolean value that indicates whether the app silences the group.
- [unsolo()](unsolo%28%29.md): Restores the other groups’ volume.
- [isSoloed](issoloed.md): A Boolean value that indicates whether the app silences all groups other than this group.

# solo (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Silences all other groups.

## Declaration

```objectivec
- (void) solo;
```

<a id="Discussion"></a>

## Discussion

The engine silences all groups other than the group on which the app calls this function.

## See Also

### Silencing Sounds

- [mute](mute%28%29.md): Silences the group.
- [unmute](unmute%28%29.md): Restores the group’s volume.
- [muted](ismuted.md): A Boolean value that indicates whether the app silences the group.
- [unsolo](unsolo%28%29.md): Restores the other groups’ volume.
- [soloed](issoloed.md): A Boolean value that indicates whether the app silences all groups other than this group.
