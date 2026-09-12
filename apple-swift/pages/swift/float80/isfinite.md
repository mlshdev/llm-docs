> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float80/isfinite](https://developer.apple.com/documentation/swift/float80/isfinite)

# isFinite

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value indicating whether this instance is finite.

## Declaration

```swift
var isFinite: Bool { get }
```

<a id="discussion"></a>

## Discussion

All values other than NaN and infinity are considered finite, whether normal or subnormal.  For NaN, both `isFinite` and `isInfinite` are false.
