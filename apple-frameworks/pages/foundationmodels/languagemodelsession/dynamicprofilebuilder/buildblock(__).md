> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/dynamicprofilebuilder/buildblock(_:)](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/dynamicprofilebuilder/buildblock(_:))

# buildBlock(\_:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a builder with a block.

## Declaration

```swift
@export(implementation) static func buildBlock<T>(_ content: T) -> T where T : LanguageModelSession.DynamicProfile
```

## See Also

### Building a dynamic profile

- [buildEither(first:)](buildeither%28first_%29.md): Creates a builder with the first component.
- [buildEither(second:)](buildeither%28second_%29.md): Creates a builder with the second component.
- [buildLimitedAvailability(\_:)](buildlimitedavailability%28__%29.md)
