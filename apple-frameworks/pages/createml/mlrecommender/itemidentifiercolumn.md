> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlrecommender/itemidentifiercolumn](https://developer.apple.com/documentation/createml/mlrecommender/itemidentifiercolumn)

# itemIdentifierColumn

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The name of the column you selected at initialization to define the item identifiers.

## Declaration

```swift
var itemIdentifierColumn: String
```

<a id="discussion"></a>

## Discussion

Changing the value of this property doesn’t retrain the model or affect its behavior.

## See Also

### Creating and training a recommender

- [init(trainingData:userColumn:itemColumn:ratingColumn:parameters:)](init%28trainingdata_usercolumn_itemcolumn_ratingcolumn_parameters_%29.md): Creates an instance given a table and the names of the item and user columns contained therein.
- [MLRecommender.ModelParameters](modelparameters-swift.struct.md): Parameters that affect the process of training a recommender model.
- [modelParameters](modelparameters-swift.property.md): The configuration parameters that the recommender used for training during initialization.
- [userIdentifierColumn](useridentifiercolumn.md): The name of the column you selected at initialization to define the user identifiers.
- [ratingColumn](ratingcolumn.md): The name of the column you selected at initialization to define the ratings.
