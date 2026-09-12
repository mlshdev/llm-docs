> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float80/nextup](https://developer.apple.com/documentation/swift/float80/nextup)

# nextUp

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The least representable value that compares greater than this value.

## Declaration

```swift
var nextUp: Float80 { get }
```

<a id="discussion"></a>

## Discussion

For any finite value `x`, `x.nextUp` is greater than `x`. For `nan` or `infinity`, `x.nextUp` is `x` itself. The following special cases also apply:

- If `x` is `-infinity`, then `x.nextUp` is `-greatestFiniteMagnitude`.
- If `x` is `-leastNonzeroMagnitude`, then `x.nextUp` is `-0.0`.
- If `x` is zero, then `x.nextUp` is `leastNonzeroMagnitude`.
- If `x` is `greatestFiniteMagnitude`, then `x.nextUp` is `infinity`.
