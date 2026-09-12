> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/customstage/execute(table:)](https://developer.apple.com/documentation/corespotlight/customstage/execute(table:))

# execute(table:)

**Framework:** CoreSpotlight  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Generates output data from the specified tabular data.

## Declaration

```swift
nonisolated(nonsending) func execute(table: SearchResultsTable) async throws -> SearchPipelineData
```

## Parameters

- `table`: The column and row data with the values to process.

<a id="return-value"></a>

## Return Value

A pipeline data structure with data your stage produced. Make sure the output you return matches the output you specified in the [outputType](outputtype.md) property.

<a id="discussion"></a>

## Discussion

If your stage supports tabular data as input, implement this method and use it to generate your stage’s supported output data. Write your code to run in parallel with other instances of your stage and instances of other stages. The best approach is to use only the contents of the `items` parameter and local intermediate values you create to deliver the output data.

## Default Implementations

### CustomStage Implementations

- [execute(table:)](execute%28table_%29-1kaw6.md): Generates output data from the specified tabular data.

## See Also

### Performing the stage behavior

- [execute(items:)](execute%28items_%29.md): Generates output data from an array of searchable items from the app’s Spotlight index.
- [execute(scoredItems:)](execute%28scoreditems_%29.md): Generates output data from an array of scored searchable items.
- [execute(text:)](execute%28text_%29.md): Generates output data from the specified input string.
- [execute(count:)](execute%28count_%29.md): Generates output data from the specified count value.
- [execute(groupedItems:)](execute%28groupeditems_%29.md): Generates output data from the specified dictionary of attributes and searchable items.
