> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/anycategoricalsummary](https://developer.apple.com/documentation/tabulardata/anycategoricalsummary)

# AnyCategoricalSummary

**Framework:** TabularData  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type-erased categorical summary.

## Declaration

```swift
struct AnyCategoricalSummary
```

<a id="overview"></a>

## Overview

Categorical summary includes 5 statistics:

- someCount: The number of non-missing elements.
- noneCount: The number of missing elements.
- totalCount: The sum of missing and non-missing elements.
- uniqueCount: The number of unique elements.
- mode: The most common elements.

## Topics

### Getting Statistical Information

- [noneCount](anycategoricalsummary/nonecount.md): The number of missing elements in the column.
- [someCount](anycategoricalsummary/somecount.md): The number of non-missing elements in the column.
- [totalCount](anycategoricalsummary/totalcount.md): The total number of elements in the column.
- [uniqueCount](anycategoricalsummary/uniquecount.md): The number of unique elements.

### Getting Mode Information

- [mode](anycategoricalsummary/mode.md): The most common values in a column.
- [modeType](anycategoricalsummary/modetype.md): The underlying type of [mode](anycategoricalsummary/mode.md).

### Operators

- [==(\_:\_:)](anycategoricalsummary/==%28____%29.md): Returns a Boolean value that indicates whether the categorical summaries are equal.

### Initializers

- [init(\_:)](anycategoricalsummary/init%28__%29-7p9bv.md): Creates a type-erased categorical summary from a typed categorical summary.
- [init(\_:)](anycategoricalsummary/init%28__%29-8innt.md): Creates a type-erased categorical summary from a typed categorical summary.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Statistical Summaries

- [NumericSummary](numericsummary.md): A summary of a numerical column.
- [CategoricalSummary](categoricalsummary.md): A categorical summary of a collection’s elements.
