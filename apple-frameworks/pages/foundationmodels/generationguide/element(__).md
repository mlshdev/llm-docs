> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generationguide/element(_:)](https://developer.apple.com/documentation/foundationmodels/generationguide/element(_:))

# element(\_:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Enforces a guide on the elements within the array.

## Declaration

```swift
static func element<Element>(_ guide: GenerationGuide<Element>) -> GenerationGuide<[Element]> where Value == [Element]
```

<a id="discussion"></a>

## Discussion

An `element` generation guide may be used when you want to apply guides to the values a model produces within an array. For example, you may want to generate an array of integers, where all the integers are in the range 0-9.

```swift
@Generable
struct FortuneCookie {
    @Guide(description: "A fortune from a fortune cookie")
    var name: String

    @Guide(description: "A list lucky numbers", .element(.range(0...9)), .count(4))
    var luckyNumbers: [Int]
}
```
