> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/rangeexpression](https://developer.apple.com/documentation/coreai/ndarray/rangeexpression)

# NDArray.RangeExpression

**Framework:** Core AI  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
protocol RangeExpression : Sendable
```

## Topics

### Selecting an entire dimension

- [all](rangeexpression/all.md): Conforms when `Self` is `_AllRange`. A range expression that selects the entire dimension.

### Resolving a range

- [relative(to:)](rangeexpression/relative%28to_%29.md): Returns Range for the dimension.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
