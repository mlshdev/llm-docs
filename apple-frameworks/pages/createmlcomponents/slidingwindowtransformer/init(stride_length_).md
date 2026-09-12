> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/slidingwindowtransformer/init(stride:length:)](https://developer.apple.com/documentation/createmlcomponents/slidingwindowtransformer/init(stride:length:))

# init(stride:length:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Creates a window temporal transformer.

## Declaration

```swift
init(stride: Int, length: Int)
```

## Parameters

- `stride`: The number of frames between the start of two consecutive windows. Must be greater than 0.
- `length`: The length of a window in number of frames. Must be greater than 0.
