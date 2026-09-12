> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mldatatable/stratifiedsplit(proportions:on:generator:)](https://developer.apple.com/documentation/createml/mldatatable/stratifiedsplit(proportions:on:generator:))

# stratifiedSplit(proportions:on:generator:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.14+ · tvOS 16.0+ · visionOS 1.0+

Randomly split a MLDataTable into a number partitions while stratifying on a user-define label column.

## Declaration

```swift
func stratifiedSplit<RNG>(proportions: [Double], on column: String, generator: inout RNG) throws -> MLDataTable where RNG : RandomNumberGenerator
```

## Parameters

- `proportions`: An array of values on \[0,1\] specifying the proprtions in each partition. Automatically normalized to 1.
- `column`: The column in an MLDataTable being stratified on.
- `generator`: User-defined RandomNumberGenerator to use in stratification.

<a id="return-value"></a>

## Return Value

A new MLDataTable with an additional partition column with the index of the partition for each row.

<a id="discussion"></a>

## Discussion

The proportions specified will be applied uniformly to each label being partitioned on.

## See Also

### Splitting a data table

- [randomSplitBySequence(proportion:by:on:seed:)](randomsplitbysequence%28proportion_by_on_seed_%29.md)
- [stratifiedSplit(proportions:on:seed:)](stratifiedsplit%28proportions_on_seed_%29.md): Randomly split a MLDataTable into a number partitions while stratifying on a user-define label column.
- [stratifiedSplitBySequence(proportions:by:on:generator:)](stratifiedsplitbysequence%28proportions_by_on_generator_%29.md): Randomly split a MLDataTable into partitions on a user-define label column, while keeping rows from the same sequence in the original order.
- [stratifiedSplitBySequence(proportions:by:on:seed:)](stratifiedsplitbysequence%28proportions_by_on_seed_%29.md): Randomly split a MLDataTable into partitions on a user-define label column, while keeping rows from the same sequence in the original order.
