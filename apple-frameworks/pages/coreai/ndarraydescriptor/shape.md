> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarraydescriptor/shape](https://developer.apple.com/documentation/coreai/ndarraydescriptor/shape)

# shape

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The length of each dimension of the array.

## Declaration

```swift
var shape: [Int] { get }
```

<a id="discussion"></a>

## Discussion

The shape contains [rank](rank.md) elements. A value of `-1` in any dimension indicates a dynamic size.

## See Also

### Inspecting descriptor properties

- [scalarType](scalartype.md): The scalar type of the array.
- [rank](rank.md): The number of dimensions in the array.
- [hasDynamicShape](hasdynamicshape.md): A Boolean value that indicates whether the shape has any dynamic dimensions.
- [interleaveLayout](interleavelayout.md): Returns the interleaved layout of this ndArray, or `nil` if there is no interleave.
