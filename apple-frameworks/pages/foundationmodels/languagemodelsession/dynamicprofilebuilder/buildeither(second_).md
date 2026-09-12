> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/dynamicprofilebuilder/buildeither(second:)](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/dynamicprofilebuilder/buildeither(second:))

# buildEither(second:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a builder with the second component.

## Declaration

```swift
@export(implementation) static func buildEither<TrueContent, FalseContent>(second content: FalseContent) -> LanguageModelSession.ConditionalDynamicProfile<TrueContent, FalseContent> where TrueContent : LanguageModelSession.DynamicProfile, FalseContent : LanguageModelSession.DynamicProfile
```

## See Also

### Building a dynamic profile

- [buildBlock(\_:)](buildblock%28__%29.md): Creates a builder with a block.
- [buildEither(first:)](buildeither%28first_%29.md): Creates a builder with the first component.
- [buildLimitedAvailability(\_:)](buildlimitedavailability%28__%29.md)
