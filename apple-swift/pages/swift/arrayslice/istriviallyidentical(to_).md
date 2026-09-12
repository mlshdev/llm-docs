> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/arrayslice/istriviallyidentical(to:)](https://developer.apple.com/documentation/swift/arrayslice/istriviallyidentical(to:))

# isTriviallyIdentical(to:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a boolean value indicating whether this array is identical to `other`.

## Declaration

```swift
func isTriviallyIdentical(to other: ArraySlice<Element>) -> Bool
```

<a id="discussion"></a>

## Discussion

Two array values are identical if there is no way to distinguish between them.

For any values `a`, `b`, and `c`:

- `a.isTriviallyIdentical(to: a)` is always `true`. (Reflexivity)
- `a.isTriviallyIdentical(to: b)` implies `b.isTriviallyIdentical(to: a)`. (Symmetry)
- If `a.isTriviallyIdentical(to: b)` and `b.isTriviallyIdentical(to: c)` are both `true`, then `a.isTriviallyIdentical(to: c)` is also `true`. (Transitivity)
- If `a` and `b` are `Equatable`, then `a.isTriviallyIdentical(b)` implies `a == b`

  - `a == b` does not imply `a.isTriviallyIdentical(b)`

Values produced by copying the same value, with no intervening mutations, will compare identical:

```swift
let d = c
print(c.isTriviallyIdentical(to: d))
// Prints true
```

Comparing arrays this way includes comparing (normally) hidden implementation details such as the memory location of any underlying array storage object. Therefore, identical arrays are guaranteed to compare equal with `==`, but not all equal arrays are considered identical.

> **Complexity**

> O(1)
