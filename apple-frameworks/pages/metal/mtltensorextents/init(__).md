> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensorextents/init(_:)](https://developer.apple.com/documentation/metal/mtltensorextents/init(_:))

# init(\_:)

**Framework:** Metal  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a tensor with extents from an array of dimension values.

## Declaration

```swift
convenience init?(_ values: [Int])
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring the array contains at most `MTL_TENSOR_MAX_RANK` (`16`) elements.
