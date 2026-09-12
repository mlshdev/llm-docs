> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactivityclassifier/predictions(from:perwindowprediction:)](https://developer.apple.com/documentation/createml/mlactivityclassifier/predictions(from:perwindowprediction:))

# predictions(from:perWindowPrediction:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Predict activities from new observations.

## Declaration

```swift
func predictions(from data: DataFrame, perWindowPrediction: Bool? = false) throws -> [String]
```

<a id="return-value"></a>

## Return Value

An array of predicted class names.

<a id="discussion"></a>

## Discussion

- Parameters

  - testingData: A data frame containing unlabeled sensor data samples. All samples are assumed to come from the same recording. Feature column names used in the table should be consistent with those used in training.
  - perWindowPrediction: A Boolean option to specify the prediction frequency. Default is false, and prediction is made per sample, instead of per window.

> **Throws**

> `MLCreateError.type` if `testingData` format is invalid.
