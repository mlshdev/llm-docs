> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/generationguide](https://developer.apple.com/documentation/foundationmodels/generationguide)

# GenerationGuide

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Guides that control how values are generated.

## Declaration

```swift
struct GenerationGuide<Value>
```

## Mentioned In

- [Categorizing and organizing data with content tags](categorizing-and-organizing-data-with-content-tags.md)

## Topics

### Getting the pattern

- [pattern(\_:)](generationguide/pattern%28__%29.md): Conforms when `Value` is `String`. Enforces that the string follows the pattern.

### Getting the element

- [element(\_:)](generationguide/element%28__%29.md): Enforces a guide on the elements within the array.

### Getting the count

- [count(\_:)](generationguide/count%28__%29.md): Enforces that the array has exactly a certain number of elements.

### Getting the constant

- [constant(\_:)](generationguide/constant%28__%29.md): Conforms when `Value` is `String`. Enforces that the string be precisely the given value.
- [anyOf(\_:)](generationguide/anyof%28__%29.md): Conforms when `Value` is `String`. Enforces that the string be one of the provided values.

### Getting a range

- [range(\_:)](generationguide/range%28__%29.md): Conforms when `Value` is `Decimal`. Enforces values that fall within a range.

### Getting the minimum value

- [minimum(\_:)](generationguide/minimum%28__%29.md): Conforms when `Value` is `Decimal`. Enforces a minimum value.
- [minimumCount(\_:)](generationguide/minimumcount%28__%29.md): Enforces a minimum number of elements in the array.

### Getting the maximum value

- [maximum(\_:)](generationguide/maximum%28__%29.md): Conforms when `Value` is `Decimal`. Enforces a maximum value.
- [maximumCount(\_:)](generationguide/maximumcount%28__%29.md): Enforces a maximum number of elements in the array.

## See Also

### Creating a guide

- [Guide(description:)](guide%28description_%29.md)
- [Guide(description:\_:)](guide%28description___%29.md)
