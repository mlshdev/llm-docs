> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generationguide/minimumcount(_:)](https://developer.apple.com/documentation/foundationmodels/generationguide/minimumcount(_:))

# minimumCount(\_:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Enforces a minimum number of elements in the array.

## Declaration

```swift
static func minimumCount<Element>(_ count: Int) -> GenerationGuide<[Element]> where Value == [Element]
```

<a id="discussion"></a>

## Discussion

The bounds are inclusive.

A `minimumCount` generation guide may be used when you want to ensure the model produces a number of array elements greater than or equal to to some minimum value, such as the number of items in a game’s shop.

```swift
@Generable
struct Shop {
    @Guide(description: "A creative name for a shop in a fantasy RPG")
    var name: String

    @Guide(description: "A list of items for sale", .minimumCount(3))
    var inventory: [ShopItem]
}
```

## See Also

### Getting the minimum value

- [minimum(\_:)](minimum%28__%29.md): Conforms when `Value` is `Decimal`. Enforces a minimum value.
