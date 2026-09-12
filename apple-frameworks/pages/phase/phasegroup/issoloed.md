> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasegroup/issoloed](https://developer.apple.com/documentation/phase/phasegroup/issoloed)

# isSoloed (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the app silences all groups other than this group.

## Declaration

```swift
var isSoloed: Bool { get }
```

## See Also

### Silencing Sounds

- [mute()](mute%28%29.md): Silences the group.
- [unmute()](unmute%28%29.md): Restores the group’s volume.
- [isMuted](ismuted.md): A Boolean value that indicates whether the app silences the group.
- [solo()](solo%28%29.md): Silences all other groups.
- [unsolo()](unsolo%28%29.md): Restores the other groups’ volume.

# soloed (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the app silences all groups other than this group.

## Declaration

```objectivec
@property (readonly, getter=isSoloed) BOOL soloed;
```

## See Also

### Silencing Sounds

- [mute](mute%28%29.md): Silences the group.
- [unmute](unmute%28%29.md): Restores the group’s volume.
- [muted](ismuted.md): A Boolean value that indicates whether the app silences the group.
- [solo](solo%28%29.md): Silences all other groups.
- [unsolo](unsolo%28%29.md): Restores the other groups’ volume.
