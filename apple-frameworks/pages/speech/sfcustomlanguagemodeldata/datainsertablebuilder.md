> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfcustomlanguagemodeldata/datainsertablebuilder](https://developer.apple.com/documentation/speech/sfcustomlanguagemodeldata/datainsertablebuilder)

# SFCustomLanguageModelData.DataInsertableBuilder

**Framework:** Speech  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.1+

A custom parameter attribute that constructs custom language model data from closures.

## Declaration

```swift
@resultBuilder struct DataInsertableBuilder
```

<a id="overview"></a>

## Overview

The `SFCustomLanguageModelData` class provides two methods for accumulating data: manually constructing `PhraseCount` and `CustomPronunciation` objects and providing them using the `insert` methods defined below, or by using the result builder DSL upon initialization. This type supports the latter.

## Topics

### Result builder methods

- [buildArray(\_:)](datainsertablebuilder/buildarray%28__%29.md): Enables support for `for..in` loops.
- [buildBlock(\_:)](datainsertablebuilder/buildblock%28__%29.md): Combines statement blocks into a single product.
- [buildEither(first:)](datainsertablebuilder/buildeither%28first_%29.md): Enables support for `if-else` and `switch` constructs.
- [buildEither(second:)](datainsertablebuilder/buildeither%28second_%29.md): Enables support for `if-else` and `switch` constructs.
- [buildOptional(\_:)](datainsertablebuilder/buildoptional%28__%29.md): Enables support for `if` statements that do not have an `else` clause.

## See Also

### Creating a model data container

- [init(locale:identifier:version:builder:)](init%28locale_identifier_version_builder_%29.md): Constructs a data container using a builder
- [init(locale:identifier:version:)](init%28locale_identifier_version_%29.md): Constructs an empty data container.
