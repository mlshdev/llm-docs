> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelexecutorgenerationchannel/dataentry/update

# LanguageModelExecutorGenerationChannel.DataEntry.Update

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · macOS 27.2+ beta · visionOS 27.2+ beta · watchOS 27.2+ beta

The content carried by an [update(contentType:content:metadata:)](action-swift.struct/update%28contenttype_content_metadata_%29.md) action.

## Declaration

```swift
struct Update
```

## Topics

### Instance Properties

- [content](update/content.md): Beta. A raw binary representation of the entry.
- [contentType](update/contenttype.md): Beta. A `UTType` identifying how to interpret [content](update/content.md).
- [metadata](update/metadata.md): Beta. Metadata pertinent to the entry.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
