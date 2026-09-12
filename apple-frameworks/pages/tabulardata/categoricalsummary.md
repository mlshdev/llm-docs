> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/categoricalsummary](https://developer.apple.com/documentation/tabulardata/categoricalsummary)

# CategoricalSummary

**Framework:** TabularData  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A categorical summary of a collection’s elements.

## Declaration

```swift
struct CategoricalSummary<Element> where Element : Hashable
```

<a id="overview"></a>

## Overview

Each categorical summary has 5 statistics about a collection:

- `someCount`: The number of non-missing elements.
- `noneCount` The number of missing elements.
- `uniqueCount`: The number of unique elements.
- `totalCount`: The total number of elements.
- `mode`: An array of the most common values.

## Topics

### Creating a Summary

- [init()](categoricalsummary/init%28%29.md): Creates a categorical summary with default values.
- [init(someCount:noneCount:uniqueCount:mode:)](categoricalsummary/init%28somecount_nonecount_uniquecount_mode_%29.md): Creates a categorical summary.

### Inspecting a Summary

- [debugDescription](categoricalsummary/debugdescription.md): A text representation of the summary’s statistics suitable for debugging.
- [mode](categoricalsummary/mode.md): The most common values in a column, ignoring missing elements.
- [uniqueCount](categoricalsummary/uniquecount.md): The number of elements with distinct values in a column that excludes missing elements.
- [someCount](categoricalsummary/somecount.md): The number of non-missing elements in the column.
- [noneCount](categoricalsummary/nonecount.md): The number of missing elements in the column.
- [totalCount](categoricalsummary/totalcount.md): The total number of elements in the column.

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Statistical Summaries

- [NumericSummary](numericsummary.md): A summary of a numerical column.
- [AnyCategoricalSummary](anycategoricalsummary.md): A type-erased categorical summary.
