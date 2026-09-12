> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generationguide/count(_:)](https://developer.apple.com/documentation/foundationmodels/generationguide/count(_:))

# count(\_:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Enforces that the array has exactly a certain number of elements.

## Declaration

```swift
static func count<Element>(_ count: Int) -> GenerationGuide<[Element]> where Value == [Element]
```

<a id="discussion"></a>

## Discussion

A `count` generation guide may be used when you want to ensure the model produces exactly a certain number array elements, such as the number of items in a game’s shop.

```swift
@Generable
struct Shop {
    @Guide(description: "A creative name for a shop in a fantasy RPG")
    var name: String

    @Guide(description: "A list of items for sale", .count(3))
    var inventory: [ShopItem]
}
```
