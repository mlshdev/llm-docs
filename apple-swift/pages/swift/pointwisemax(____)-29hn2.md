> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/pointwisemax(_:_:)-29hn2](https://developer.apple.com/documentation/swift/pointwisemax(_:_:)-29hn2)

# pointwiseMax(\_:\_:)

**Framework:** Swift  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The lanewise maximum of two vectors.

## Declaration

```swift
func pointwiseMax<T>(_ a: T, _ b: T) -> T where T : SIMD, T.Scalar : FloatingPoint
```

<a id="discussion"></a>

## Discussion

Each element of the result is the maximum of the corresponding elements of the inputs.

## See Also

### Supporting Functions

- [all(\_:)](all%28__%29.md): True if every lane of mask is true.
- [any(\_:)](any%28__%29.md): True if any lane of mask is true.
- [pointwiseMax(\_:\_:)](pointwisemax%28____%29-2k6er.md): The lanewise maximum of two vectors.
- [pointwiseMin(\_:\_:)](pointwisemin%28____%29-39txi.md): The lanewise minimum of two vectors.
- [pointwiseMin(\_:\_:)](pointwisemin%28____%29-8v95p.md): The lanewise minimum of two vectors.
