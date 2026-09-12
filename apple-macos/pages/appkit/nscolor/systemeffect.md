> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/systemeffect](https://developer.apple.com/documentation/appkit/nscolor/systemeffect)

# NSColor.SystemEffect (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.14+

Constants for user interactions that change the appearance of a view or control.

## Declaration

```swift
enum SystemEffect
```

## Topics

### Appearances

- [NSColor.SystemEffect.none](systemeffect/none.md): No additional effects.
- [NSColor.SystemEffect.pressed](systemeffect/pressed.md): The color that indicates the item was pressed.
- [NSColor.SystemEffect.deepPressed](systemeffect/deeppressed.md): The color that indicates the item received a deep press.
- [NSColor.SystemEffect.disabled](systemeffect/disabled.md): The color that indicates the item is disabled.
- [NSColor.SystemEffect.rollover](systemeffect/rollover.md): The color that indicates the mouse rolled over the item.

### Initializers

- [init(rawValue:)](systemeffect/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Applying specific appearances to colors

- [withSystemEffect(\_:)](withsystemeffect%28__%29.md): Returns a new color object that represents the current color modified to include the specified visual effect.

# NSColorSystemEffect (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.14+

Constants for user interactions that change the appearance of a view or control.

## Declaration

```objectivec
enum NSColorSystemEffect : NSInteger;
```

## Topics

### Appearances

- [NSColorSystemEffectNone](systemeffect/none.md): No additional effects.
- [NSColorSystemEffectPressed](systemeffect/pressed.md): The color that indicates the item was pressed.
- [NSColorSystemEffectDeepPressed](systemeffect/deeppressed.md): The color that indicates the item received a deep press.
- [NSColorSystemEffectDisabled](systemeffect/disabled.md): The color that indicates the item is disabled.
- [NSColorSystemEffectRollover](systemeffect/rollover.md): The color that indicates the mouse rolled over the item.

## See Also

### Applying specific appearances to colors

- [colorWithSystemEffect:](withsystemeffect%28__%29.md): Returns a new color object that represents the current color modified to include the specified visual effect.
