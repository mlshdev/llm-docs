> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generationguide/maximum(_:)](https://developer.apple.com/documentation/foundationmodels/generationguide/maximum(_:))

# maximum(\_:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Enforces a maximum value.

## Declaration

```swift
static func maximum(_ value: Decimal) -> GenerationGuide<Decimal>
```

<a id="discussion"></a>

## Discussion

Use a `maximum` generation guide — whose bounds are inclusive — to ensure the model produces a value less than or equal to some maximum value. For example, you can specify that the highest level a character in your game can achieve is 99.9:

```swift
@Generable
struct GameCharacter {
    @Guide(description: "A creative name appropriate for a fantasy RPG character")
    var name: String

    @Guide(description: "A level for the character", .maximum(99.9))
    var level: Decimal
}
```

## See Also

### Getting the maximum value

- [maximumCount(\_:)](maximumcount%28__%29.md): Enforces a maximum number of elements in the array.
