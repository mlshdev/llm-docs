> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/symboleffectoptions/repeat(_:)-33816](https://developer.apple.com/documentation/symbols/symboleffectoptions/repeat(_:)-33816)

# repeat(\_:)

**Framework:** Symbols  
**Kind:** Type Method  
**Availability:** iOS 17.0+ (deprecated in 27.0) · iPadOS 17.0+ (deprecated in 27.0) · Mac Catalyst 17.0+ (deprecated in 27.0) · macOS 14.0+ (deprecated in 27.0) · tvOS 17.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 10.0+ (deprecated in 27.0)

A default set of effect options with a preferred repeat count.

## Declaration

```swift
static func `repeat`(_ count: Int?) -> SymbolEffectOptions
```

## Parameters

- `count`: The preferred number of times to play the effect, or `nil` to request the default number of times. The function may clamp very large or small values.

<a id="return-value"></a>

## Return Value

A new set of effect options with the preferred repeat count.

## See Also

### Configuring repeating effects

- [repeating](repeating-swift.property.md): Deprecated. A set of effect options that prefers to repeat indefinitely.
- [repeating](repeating-swift.type.property.md): Deprecated. A default set of effect options that prefers to repeat indefinitely.
- [nonRepeating](nonrepeating-swift.property.md): A set of effect options that prefers to not repeat.
- [nonRepeating](nonrepeating-swift.type.property.md): A default set of effect options that prefers to not repeat.
- [repeat(\_:)](repeat%28__%29-314sv.md): Deprecated. Creates a set of effect options with a preferred repeat count.
