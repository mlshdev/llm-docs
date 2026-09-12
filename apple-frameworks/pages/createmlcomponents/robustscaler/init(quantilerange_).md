> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/robustscaler/init(quantilerange:)](https://developer.apple.com/documentation/createmlcomponents/robustscaler/init(quantilerange:))

# init(quantileRange:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Creates a robust scaler.

## Declaration

```swift
init(quantileRange: ClosedRange<Element> = 0.25...0.75)
```

## Parameters

- `quantileRange`: This scaler removes the median and scales the data according to the quantile range.
