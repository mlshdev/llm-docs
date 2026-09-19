> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/generable(description:representnilexplicitlyingeneratedcontent:)

# Generable(description:representNilExplicitlyInGeneratedContent:)

**Framework:** Foundation Models  
**Kind:** Macro  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+ · watchOS 27.0+

## Declaration

```swift
@attached(extension, conformances: Generable, names: named(init(_:)), named(generatedContent)) @attached(member, names: arbitrary) macro Generable(description: String? = nil, representNilExplicitlyInGeneratedContent: Bool)
```

## See Also

### Creating a Generable type

- [Generable(description:)](generable%28description_%29.md)
- [Generable(name:description:representNilExplicitlyInGeneratedContent:)](generable%28name_description_representnilexplicitlyingeneratedcontent_%29.md)
