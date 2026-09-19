> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelsession/dynamicprofilebuilder/buildlimitedavailability(_:)

# buildLimitedAvailability(\_:)

**Framework:** Foundation Models  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a builder with a limited availability dynamic profile.

## Declaration

```swift
@export(implementation) static func buildLimitedAvailability(_ component: some LanguageModelSession.DynamicProfile) -> LanguageModelSession.AnyDynamicProfile
```

## Parameters

- `component`: The dynamic profile.

## See Also

### Building a dynamic profile

- [buildBlock(\_:)](buildblock%28__%29.md): Creates a builder with a block.
- [buildEither(first:)](buildeither%28first_%29.md): Creates a builder with the first component.
- [buildEither(second:)](buildeither%28second_%29.md): Creates a builder with the second component.
