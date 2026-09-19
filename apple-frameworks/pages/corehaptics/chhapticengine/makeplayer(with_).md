> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corehaptics/chhapticengine/makeplayer(with:)

# makePlayer(with:) (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Creates a standard haptic pattern player from a haptic pattern.

## Declaration

```swift
func makePlayer(with pattern: CHHapticPattern) throws -> any CHHapticPatternPlayer
```

## Parameters

- `pattern`: The haptic pattern you’d like the player to play.

<a id="return-value"></a>

## Return Value

A new pattern player instance.

## Mentioned In

- [Playing a single-tap haptic pattern](../playing-a-single-tap-haptic-pattern.md)
- [Preparing your app to play haptics](../preparing-your-app-to-play-haptics.md)

## See Also

### Creating Haptic Pattern Players

- [makeAdvancedPlayer(with:)](makeadvancedplayer%28with_%29.md): Creates an advanced haptic pattern player from a haptic pattern.

# createPlayerWithPattern:error: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Creates a standard haptic pattern player from a haptic pattern.

## Declaration

```objectivec
- (id<CHHapticPatternPlayer>) createPlayerWithPattern:(CHHapticPattern *) pattern error:(NSError **) outError;
```

## Parameters

- `pattern`: The haptic pattern you’d like the player to play.
- `outError`: An error in Objective-C that contains information about failed player creation, or `nil` if no error occurred.

<a id="return-value"></a>

## Return Value

A new pattern player instance.

## Mentioned In

- [Playing a single-tap haptic pattern](../playing-a-single-tap-haptic-pattern.md)
- [Preparing your app to play haptics](../preparing-your-app-to-play-haptics.md)

## See Also

### Creating Haptic Pattern Players

- [createAdvancedPlayerWithPattern:error:](makeadvancedplayer%28with_%29.md): Creates an advanced haptic pattern player from a haptic pattern.
