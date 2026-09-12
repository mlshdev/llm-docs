> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/searchpipelinedata/text(_:)](https://developer.apple.com/documentation/corespotlight/searchpipelinedata/text(_:))

# text(\_:)

**Framework:** CoreSpotlight  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Creates a pipeline data structure from a text string.

## Declaration

```swift
static func text(_ s: String) -> SearchPipelineData
```

## Parameters

- `s`: The text content your stage produces.

## See Also

### Configuring the pipeline data

- [init(payload:)](init%28payload_%29.md): Initializes the pipeline data with the specified payload value.
- [items(\_:)](items%28__%29.md): Creates a pipeline data structure from the an array of searchable items.
- [scoredItems(\_:)](scoreditems%28__%29.md): Creates a pipeline data structure from the an array of scored searchable items.
- [groupedItems(\_:)](groupeditems%28__%29.md): Creates a pipeline data structure from a dictionary of attributes and searchable items.
- [count(\_:)](count%28__%29.md): Creates a pipeline data structure from an integer value.
- [statistic(name:value:)](statistic%28name_value_%29.md): Creates a pipeline data structure from statistical information.
- [table(\_:)](table%28__%29.md): Creates a pipeline data structure from tabular data.
