> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable/stratifiedsplit(proportions:on:seed:)](https://developer.apple.com/documentation/createml/mldatatable/stratifiedsplit(proportions:on:seed:))

# stratifiedSplit(proportions:on:seed:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Randomly split a MLDataTable into a number partitions while stratifying on a user-define label column.

## Declaration

```swift
func stratifiedSplit(proportions: [Double], on column: String, seed: Int = timestampSeed()) throws -> MLDataTable
```

## Parameters

- `proportions`: An array of values on \[0,1\] specifying the proprtions in each partition. Automatically normalized to 1.
- `column`: The column in an MLDataTable being stratified on.
- `seed`: Seed for the random number generator used for splitting. The default seed is the current epoch time in milliseconds.

<a id="return-value"></a>

## Return Value

A new MLDataTable with an additional partition column with the index of the partition for each row.

<a id="discussion"></a>

## Discussion

The proportions specified will be applied uniformly to each label being partitioned on.

## See Also

### Splitting a data table

- [randomSplitBySequence(proportion:by:on:seed:)](randomsplitbysequence%28proportion_by_on_seed_%29.md)
- [stratifiedSplit(proportions:on:generator:)](stratifiedsplit%28proportions_on_generator_%29.md): Randomly split a MLDataTable into a number partitions while stratifying on a user-define label column.
- [stratifiedSplitBySequence(proportions:by:on:generator:)](stratifiedsplitbysequence%28proportions_by_on_generator_%29.md): Randomly split a MLDataTable into partitions on a user-define label column, while keeping rows from the same sequence in the original order.
- [stratifiedSplitBySequence(proportions:by:on:seed:)](stratifiedsplitbysequence%28proportions_by_on_seed_%29.md): Randomly split a MLDataTable into partitions on a user-define label column, while keeping rows from the same sequence in the original order.
