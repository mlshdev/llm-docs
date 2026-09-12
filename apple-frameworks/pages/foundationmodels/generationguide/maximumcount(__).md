> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generationguide/maximumcount(_:)](https://developer.apple.com/documentation/foundationmodels/generationguide/maximumcount(_:))

# maximumCount(\_:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Enforces a maximum number of elements in the array.

## Declaration

```swift
static func maximumCount<Element>(_ count: Int) -> GenerationGuide<[Element]> where Value == [Element]
```

## Mentioned In

- [Categorizing and organizing data with content tags](../categorizing-and-organizing-data-with-content-tags.md)
- [Managing the context window](../managing-the-context-window.md)

<a id="discussion"></a>

## Discussion

The bounds are inclusive.

A `maximumCount` generation guide may be used when you want to ensure the model produces a number of array elements less than or equal to to some maximum value, such as the number of items in a game’s shop.

```swift
@Generable
struct Shop {
    @Guide(description: "A creative name for a shop in a fantasy RPG")
    var name: String

    @Guide(description: "A list of items for sale", .maximumCount(10))
    var inventory: [ShopItem]
}
```

## See Also

### Getting the maximum value

- [maximum(\_:)](maximum%28__%29.md): Conforms when `Value` is `Decimal`. Enforces a maximum value.
