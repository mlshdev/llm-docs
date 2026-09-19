> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/generatedcontent/id

# id

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

A unique id that is stable for the duration of a generated response.

## Declaration

```swift
var id: GenerationID?
```

<a id="discussion"></a>

## Discussion

A [LanguageModelSession](../languagemodelsession.md) produces instances of [GeneratedContent](../generatedcontent.md) that have a non-nil `id`. When you stream a response, the `id` is the same for all partial generations in the response stream.

Instances of [GeneratedContent](../generatedcontent.md) that you produce manually with initializers have a nil `id` because the framework didn’t create them as part of a generation.

## See Also

### Identifying a generation

- [GenerationID](../generationid.md): A unique identifier that is stable for the duration of a response, but not across responses.
