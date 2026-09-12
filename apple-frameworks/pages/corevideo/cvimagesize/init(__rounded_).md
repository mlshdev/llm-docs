> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvimagesize/init(_:rounded:)](https://developer.apple.com/documentation/corevideo/cvimagesize/init(_:rounded:))

# init(\_:rounded:)

**Framework:** Core Video  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Convert `CGSize` to [CVImageSize](../cvimagesize.md) using the given rounding rule.

## Declaration

```swift
init(_ size: CGSize, rounded rule: FloatingPointRoundingRule = .down)
```

<a id="discussion"></a>

## Discussion

The same rounding rule is applied to both height and width.
