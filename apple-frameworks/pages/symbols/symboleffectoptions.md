> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/symboleffectoptions](https://developer.apple.com/documentation/symbols/symboleffectoptions)

# SymbolEffectOptions

**Framework:** Symbols  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Options that configure how effects apply to symbol-based images.

## Declaration

```swift
struct SymbolEffectOptions
```

## Topics

### Accessing effect options

- [default](symboleffectoptions/default.md): The default set of effect options.

### Configuring repeating effects

- [repeating](symboleffectoptions/repeating-swift.property.md): Deprecated. A set of effect options that prefers to repeat indefinitely.
- [repeating](symboleffectoptions/repeating-swift.type.property.md): Deprecated. A default set of effect options that prefers to repeat indefinitely.
- [nonRepeating](symboleffectoptions/nonrepeating-swift.property.md): A set of effect options that prefers to not repeat.
- [nonRepeating](symboleffectoptions/nonrepeating-swift.type.property.md): A default set of effect options that prefers to not repeat.
- [repeat(\_:)](symboleffectoptions/repeat%28__%29-314sv.md): Deprecated. Creates a set of effect options with a preferred repeat count.
- [repeat(\_:)](symboleffectoptions/repeat%28__%29-33816.md): Deprecated. A default set of effect options with a preferred repeat count.

### Configuring effect speed

- [speed(\_:)](symboleffectoptions/speed%28__%29-swift.method.md): Creates a set of effect options with a preferred speed multiplier.
- [speed(\_:)](symboleffectoptions/speed%28__%29-swift.type.method.md): A default set of effect options with a preferred speed multiplier.

### Structures

- [SymbolEffectOptions.RepeatBehavior](symboleffectoptions/repeatbehavior.md): The behavior to use when requesting any repetition on a `SymbolEffect`.

### Instance Methods

- [repeat(\_:)](symboleffectoptions/repeat%28__%29-316cr.md): Creates a set of symbol effect options that repeats with a preferred behavior.

### Type Methods

- [repeat(\_:)](symboleffectoptions/repeat%28__%29-3klm2.md): Sets the preferred repeat behavior.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
