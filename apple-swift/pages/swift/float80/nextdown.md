> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float80/nextdown](https://developer.apple.com/documentation/swift/float80/nextdown)

# nextDown

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The greatest representable value that compares less than this value.

## Declaration

```swift
var nextDown: Self { get }
```

<a id="discussion"></a>

## Discussion

For any finite value `x`, `x.nextDown` is less than `x`. For `nan` or `-infinity`, `x.nextDown` is `x` itself. The following special cases also apply:

- If `x` is `infinity`, then `x.nextDown` is `greatestFiniteMagnitude`.
- If `x` is `leastNonzeroMagnitude`, then `x.nextDown` is `0.0`.
- If `x` is zero, then `x.nextDown` is `-leastNonzeroMagnitude`.
- If `x` is `-greatestFiniteMagnitude`, then `x.nextDown` is `-infinity`.
