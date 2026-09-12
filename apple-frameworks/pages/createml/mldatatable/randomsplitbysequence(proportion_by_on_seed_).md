> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable/randomsplitbysequence(proportion:by:on:seed:)](https://developer.apple.com/documentation/createml/mldatatable/randomsplitbysequence(proportion:by:on:seed:))

# randomSplitBySequence(proportion:by:on:seed:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

## Declaration

```swift
func randomSplitBySequence(proportion: Double, by sequenceIdentifierColumn: String, on column: String, seed: Int = 1) -> (MLDataTable, remaining: MLDataTable)
```

## See Also

### Splitting a data table

- [stratifiedSplit(proportions:on:generator:)](stratifiedsplit%28proportions_on_generator_%29.md): Randomly split a MLDataTable into a number partitions while stratifying on a user-define label column.
- [stratifiedSplit(proportions:on:seed:)](stratifiedsplit%28proportions_on_seed_%29.md): Randomly split a MLDataTable into a number partitions while stratifying on a user-define label column.
- [stratifiedSplitBySequence(proportions:by:on:generator:)](stratifiedsplitbysequence%28proportions_by_on_generator_%29.md): Randomly split a MLDataTable into partitions on a user-define label column, while keeping rows from the same sequence in the original order.
- [stratifiedSplitBySequence(proportions:by:on:seed:)](stratifiedsplitbysequence%28proportions_by_on_seed_%29.md): Randomly split a MLDataTable into partitions on a user-define label column, while keeping rows from the same sequence in the original order.
