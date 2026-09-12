> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlrecommender/recommendations(fromusers:maxcount:restrictingtoitems:excluding:excludingobserved:)](https://developer.apple.com/documentation/createml/mlrecommender/recommendations(fromusers:maxcount:restrictingtoitems:excluding:excludingobserved:))

# recommendations(fromUsers:maxCount:restrictingToItems:excluding:excludingObserved:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 14.0)

Retrieves the highest scored item for the given array of users, based on item similarity and the rating column.

## Declaration

```swift
func recommendations(fromUsers: [any MLIdentifier], maxCount: Int = 10, restrictingToItems: [any MLIdentifier]? = nil, excluding userItemObservations: MLDataTable? = nil, excludingObserved: Bool = true) throws -> MLDataTable
```

## Parameters

- `fromUsers`: An array of user identifiers.
- `maxCount`: The maximum number of recommendations per user. The default is `10`.
- `restrictingToItems`: An array of item identifiers that defines the only values the recommender can use this set of recommendations. By default, the parameter is `nil`, meaning there are no restrictions.
- `userItemObservations`: A data table of user-item observations to exclude from recommendations. The default is `nil`, meaning no observations are excluded. The column names for the user identifiers and item identifiers must be the same as those provided in the training data.
- `excludingObserved`: Set this value to `true` to omit training data from the recommendations, or `false` to include them. The default is `true`.

<a id="return-value"></a>

## Return Value

An [MLDataTable](../mldatatable.md) containing columns with user identifiers, item identifiers, scores and ranks (numbered between `1` and the `maxCount`).

## See Also

### Testing a recommender

- [MLIdentifier](../mlidentifier.md): Deprecated. A type the Create ML framework can use as a machine learning identifier.
- [getSimilarItems(fromItems:maxCount:)](getsimilaritems%28fromitems_maxcount_%29.md): Deprecated. Returns the top ranked similar items based on the model’s similarity type.
