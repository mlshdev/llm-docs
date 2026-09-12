> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlrecommender/modelparameters-swift.property](https://developer.apple.com/documentation/createml/mlrecommender/modelparameters-swift.property)

# modelParameters

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The configuration parameters that the recommender used for training during initialization.

## Declaration

```swift
let modelParameters: MLRecommender.ModelParameters
```

## See Also

### Creating and training a recommender

- [init(trainingData:userColumn:itemColumn:ratingColumn:parameters:)](init%28trainingdata_usercolumn_itemcolumn_ratingcolumn_parameters_%29.md): Creates an instance given a table and the names of the item and user columns contained therein.
- [MLRecommender.ModelParameters](modelparameters-swift.struct.md): Parameters that affect the process of training a recommender model.
- [userIdentifierColumn](useridentifiercolumn.md): The name of the column you selected at initialization to define the user identifiers.
- [itemIdentifierColumn](itemidentifiercolumn.md): The name of the column you selected at initialization to define the item identifiers.
- [ratingColumn](ratingcolumn.md): The name of the column you selected at initialization to define the ratings.
