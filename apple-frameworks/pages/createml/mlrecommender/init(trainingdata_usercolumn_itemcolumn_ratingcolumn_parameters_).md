> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlrecommender/init(trainingdata:usercolumn:itemcolumn:ratingcolumn:parameters:)](https://developer.apple.com/documentation/createml/mlrecommender/init(trainingdata:usercolumn:itemcolumn:ratingcolumn:parameters:))

# init(trainingData:userColumn:itemColumn:ratingColumn:parameters:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates an instance given a table and the names of the item and user columns contained therein.

## Declaration

```swift
init(trainingData: DataFrame, userColumn: String, itemColumn: String, ratingColumn: String? = nil, parameters: MLRecommender.ModelParameters = ModelParameters(nearestItems: nil)) throws
```

## Parameters

- `trainingData`: A data frame containing training data.
- `userColumn`: Name of the Int or String typed column in the training data containing user identifiers.
- `itemColumn`: Name of the Int or String typed column in the training data containing item identifiers.
- `ratingColumn`: Name of an Int or Double typed column optionally in the training data containing scores or ratings. The default is nil, which corresponds to no rating column.
- `parameters`: Model training parameters.

## See Also

### Creating and training a recommender

- [MLRecommender.ModelParameters](modelparameters-swift.struct.md): Parameters that affect the process of training a recommender model.
- [modelParameters](modelparameters-swift.property.md): The configuration parameters that the recommender used for training during initialization.
- [userIdentifierColumn](useridentifiercolumn.md): The name of the column you selected at initialization to define the user identifiers.
- [itemIdentifierColumn](itemidentifiercolumn.md): The name of the column you selected at initialization to define the item identifiers.
- [ratingColumn](ratingcolumn.md): The name of the column you selected at initialization to define the ratings.
