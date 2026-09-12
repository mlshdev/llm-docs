> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/substring/istriviallyidentical(to:)](https://developer.apple.com/documentation/swift/substring/istriviallyidentical(to:))

# isTriviallyIdentical(to:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a boolean value indicating whether this substring is identical to `other`.

## Declaration

```swift
func isTriviallyIdentical(to other: Substring) -> Bool
```

<a id="discussion"></a>

## Discussion

Two substring values are identical if there is no way to distinguish between them.

For any values `a`, `b`, and `c`:

- `a.isTriviallyIdentical(to: a)` is always `true`. (Reflexivity)
- `a.isTriviallyIdentical(to: b)` implies `b.isTriviallyIdentical(to: a)`. (Symmetry)
- If `a.isTriviallyIdentical(to: b)` and `b.isTriviallyIdentical(to: c)` are both `true`, then `a.isTriviallyIdentical(to: c)` is also `true`. (Transitivity)
- `a.isTriviallyIdentical(b)` implies `a == b`. `a == b` does not imply `a.isTriviallyIdentical(b)`

Values produced by copying the same value, with no intervening mutations, will compare identical:

```swift
let d = c
print(c.isTriviallyIdentical(to: d))
// Prints true
```

Comparing substrings this way includes comparing (normally) hidden implementation details such as the memory location of any underlying substring storage object. Therefore, identical substrings are guaranteed to compare equal with `==`, but not all equal substrings are considered identical.

> **Complexity**

> O(1)
