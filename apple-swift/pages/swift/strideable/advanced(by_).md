> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/strideable/advanced(by:)](https://developer.apple.com/documentation/swift/strideable/advanced(by:))

# advanced(by:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a value that is offset the specified distance from this value.

## Declaration

```swift
func advanced(by n: Self.Stride) -> Self
```

## Parameters

- `n`: The distance to advance this value.

<a id="return-value"></a>

## Return Value

A value that is offset from this value by `n`.

<a id="discussion"></a>

## Discussion

Use the `advanced(by:)` method in generic code to offset a value by a specified distance. If you’re working directly with numeric values, use the addition operator (`+`) instead of this method.

```swift
func addOne<T: Strideable>(to x: T) -> T
    where T.Stride: ExpressibleByIntegerLiteral
{
    return x.advanced(by: 1)
}

let x = addOne(to: 5)
// x == 6
let y = addOne(to: 3.5)
// y = 4.5
```

If this type’s `Stride` type conforms to `BinaryInteger`, then for a value `x`, a distance `n`, and a value `y = x.advanced(by: n)`, `x.distance(to: y) == n`. Using this method with types that have a noninteger `Stride` may result in an approximation. If the result of advancing by `n` is not representable as a value of this type, then a runtime error may occur.

> **Complexity**

> O(1)

## Default Implementations

### Strideable Implementations

- [advanced(by:)](advanced%28by_%29-9b2es.md): Returns a value that is offset the specified distance from this value.

## See Also

### Getting an Offset Value

- [+(\_:\_:)](+%28____%29-8m1px.md): Conforms when `Self` conforms to `_Pointer`.
- [+(\_:\_:)](+%28____%29-94mlm.md): Conforms when `Self` conforms to `_Pointer`.
- [-(\_:\_:)](-%28____%29-1kjns.md): Conforms when `Self` conforms to `_Pointer`.
- [-(\_:\_:)](-%28____%29-2mot7.md): Conforms when `Self` conforms to `_Pointer`.
