> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/transcript/dataentry/contenttype

# contentType

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · macOS 27.2+ beta · visionOS 27.2+ beta · watchOS 27.2+ beta

A `UTType` identifying how to interpret [content](content.md).

## Declaration

```swift
var contentType: UTType
```

<a id="discussion"></a>

## Discussion

Packages that ship data entry payloads should declare a dedicated `UTType` conforming to `.data` (or a more specific format like `.json`) and expose it as a static extension member so consumers can match on it directly.
