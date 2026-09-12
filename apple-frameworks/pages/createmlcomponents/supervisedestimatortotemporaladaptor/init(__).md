> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/supervisedestimatortotemporaladaptor/init(_:)](https://developer.apple.com/documentation/createmlcomponents/supervisedestimatortotemporaladaptor/init(_:))

# init(\_:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Creates a temporal supervised estimator from a supervised estimator.

## Declaration

```swift
init(_ base: Base)
```

<a id="discussion"></a>

## Discussion

The resulting estimator collects all elements of the input sequence before calling fit on the underlying estimator. The transformer returned from fit is also converted to a temporal transformer.
