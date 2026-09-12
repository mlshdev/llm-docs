> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/annotatedfeatureprovider/init(_:annotationscolumnname:featurescolumnname:resultscolumnname:)](https://developer.apple.com/documentation/createmlcomponents/annotatedfeatureprovider/init(_:annotationscolumnname:featurescolumnname:resultscolumnname:))

# init(\_:annotationsColumnName:featuresColumnName:resultsColumnName:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Creates an adaptor that converts a regular estimator to a tabular estimator.

## Declaration

```swift
init(_ base: Base, annotationsColumnName: String = "targets", featuresColumnName: String = "features", resultsColumnName: String = "results")
```

## Parameters

- `base`: A supervised estimator.
- `annotationsColumnName`: The annotations column name.
- `featuresColumnName`: The features column name.
- `resultsColumnName`: The results column name.
