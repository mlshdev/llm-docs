> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelsession/responsestream/snapshot/rawcontent

# rawContent

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

The raw content of the response.

## Declaration

```swift
var rawContent: GeneratedContent
```

<a id="discussion"></a>

## Discussion

When `Content` is `GeneratedContent`, this is the same as `content`.

## See Also

### Inspecting a snapshot

- [content](content.md): The content of the response.
- [transcriptEntries](transcriptentries.md): The list of transcript entries.
