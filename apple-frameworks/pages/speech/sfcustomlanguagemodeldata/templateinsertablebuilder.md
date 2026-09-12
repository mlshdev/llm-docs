> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/sfcustomlanguagemodeldata/templateinsertablebuilder](https://developer.apple.com/documentation/speech/sfcustomlanguagemodeldata/templateinsertablebuilder)

# SFCustomLanguageModelData.TemplateInsertableBuilder

**Framework:** Speech  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.1+

A custom parameter attribute that constructs custom language model data from closures.

## Declaration

```swift
@resultBuilder struct TemplateInsertableBuilder
```

<a id="overview"></a>

## Overview

Phrase counts can be generated manually by providing an exact phrase and weight (e.g. “Play the Albin counter gambit”) or from templates (e.g. “Move my \<piece\> to \<square\>”). Templates themselves can be constructed manually, or using the result builder DSL. This type supports the latter.

## Topics

### Result builder methods

- [buildArray(\_:)](templateinsertablebuilder/buildarray%28__%29.md): Enables support for `for..in` loops.
- [buildBlock(\_:)](templateinsertablebuilder/buildblock%28__%29.md): Combines statement blocks into a single product.
- [buildEither(first:)](templateinsertablebuilder/buildeither%28first_%29.md): Enables support for `if-else` and `switch` constructs.
- [buildEither(second:)](templateinsertablebuilder/buildeither%28second_%29.md): Enables support for `if-else` and `switch` constructs.
- [buildOptional(\_:)](templateinsertablebuilder/buildoptional%28__%29.md): Enables support for `if` statements that do not have an `else` clause.

## See Also

### Adding parameterized sample data within a result builder

- [SFCustomLanguageModelData.PhraseCountsFromTemplates](phrasecountsfromtemplates.md): A type that can be used to construct custom language model data by specifying a set of template classes and using the result builder DSL to specify templates.
