> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/boostedtreeclassifier/fitted(to:validateon:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/boostedtreeclassifier/fitted(to:validateon:eventhandler:))

# fitted(to:validateOn:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Fits a boosted tree classifier model to a collection of examples.

## Declaration

```swift
func fitted(to input: DataFrame, validateOn validation: DataFrame? = nil, eventHandler: EventHandler? = nil) async throws -> TreeClassifierModel<Label>
```

## Parameters

- `input`: A data frame of examples.
- `validation`: A data frame of validation examples.
- `eventHandler`: An event handler. This method reports accuracy and loss metrics.

<a id="return-value"></a>

## Return Value

The fitted boosted tree classifier model.

## See Also

### Fitting the classifier

- [BoostedTreeClassifier.Annotation](annotation.md): The annotation type.
- [BoostedTreeClassifier.Transformer](transformer.md): The transformer type created by this estimator.
