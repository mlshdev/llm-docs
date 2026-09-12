> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/updatabletabularestimator/adaptedassupervised(annotationcolumnid:)](https://developer.apple.com/documentation/createmlcomponents/updatabletabularestimator/adaptedassupervised(annotationcolumnid:))

# adaptedAsSupervised(annotationColumnID:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Exposes this updatable tabular estimator as a supervised tabular estimator.

## Declaration

```swift
func adaptedAsSupervised<Annotation>(annotationColumnID: ColumnID<Annotation>) -> UpdatableTabularEstimatorToSupervisedAdaptor<Self, Annotation> where Annotation : Equatable
```
