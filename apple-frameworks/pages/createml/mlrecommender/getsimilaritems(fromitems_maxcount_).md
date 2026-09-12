> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlrecommender/getsimilaritems(fromitems:maxcount:)](https://developer.apple.com/documentation/createml/mlrecommender/getsimilaritems(fromitems:maxcount:))

# getSimilarItems(fromItems:maxCount:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 14.0)

Returns the top ranked similar items based on the model’s similarity type.

## Declaration

```swift
func getSimilarItems(fromItems: [any MLIdentifier], maxCount: Int = 10) throws -> MLDataTable
```

## Parameters

- `fromItems`: An array of item identifiers.
- `maxCount`: The maximum number of similar items per item in the `fromItems` column. The default is `10`.

## See Also

### Testing a recommender

- [recommendations(fromUsers:maxCount:restrictingToItems:excluding:excludingObserved:)](recommendations%28fromusers_maxcount_restrictingtoitems_excluding_excludingobserved_%29.md): Deprecated. Retrieves the highest scored item for the given array of users, based on item similarity and the rating column.
- [MLIdentifier](../mlidentifier.md): Deprecated. A type the Create ML framework can use as a machine learning identifier.
