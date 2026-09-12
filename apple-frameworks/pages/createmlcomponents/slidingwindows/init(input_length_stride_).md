> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/slidingwindows/init(input:length:stride:)](https://developer.apple.com/documentation/createmlcomponents/slidingwindows/init(input:length:stride:))

# init(input:length:stride:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a sliding windows sequence.

## Declaration

```swift
init(input: MLShapedArray<Scalar>, length: Int, stride: Int = 1) throws
```

## Parameters

- `input`: A shaped array having two dimensions.
- `length`: The number of samples in each window. Must be positive.
- `stride`: The number of samples between windows. Must be positive. Defaults to 1.
