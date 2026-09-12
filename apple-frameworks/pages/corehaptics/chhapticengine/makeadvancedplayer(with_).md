> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticengine/makeadvancedplayer(with:)](https://developer.apple.com/documentation/corehaptics/chhapticengine/makeadvancedplayer(with:))

# makeAdvancedPlayer(with:) (Swift)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Creates an advanced haptic pattern player from a haptic pattern.

## Declaration

```swift
func makeAdvancedPlayer(with pattern: CHHapticPattern) throws -> any CHHapticAdvancedPatternPlayer
```

## Parameters

- `pattern`: The haptic pattern you’d like the player to play.

<a id="return-value"></a>

## Return Value

A new advanced pattern player instance.

## See Also

### Creating Haptic Pattern Players

- [makePlayer(with:)](makeplayer%28with_%29.md): Creates a standard haptic pattern player from a haptic pattern.

# createAdvancedPlayerWithPattern:error: (Objective-C)

**Framework:** Core Haptics  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Creates an advanced haptic pattern player from a haptic pattern.

## Declaration

```objectivec
- (id<CHHapticAdvancedPatternPlayer>) createAdvancedPlayerWithPattern:(CHHapticPattern *) pattern error:(NSError **) outError;
```

## Parameters

- `pattern`: The haptic pattern you’d like the player to play.
- `outError`: An error in Objective-C that contains information about failed player creation, or `nil` if no error occurred.

<a id="return-value"></a>

## Return Value

A new advanced pattern player instance.

## See Also

### Creating Haptic Pattern Players

- [createPlayerWithPattern:error:](makeplayer%28with_%29.md): Creates a standard haptic pattern player from a haptic pattern.
