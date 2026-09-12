> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float80/significandbitcount](https://developer.apple.com/documentation/swift/float80/significandbitcount)

# significandBitCount

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** macOS 10.10+

The available number of fractional significand bits.

## Declaration

```swift
static var significandBitCount: Int { get }
```

<a id="discussion"></a>

## Discussion

For fixed-width floating-point types, this is the actual number of fractional significand bits.

For extensible floating-point types, `significandBitCount` should be the maximum allowed significand width (without counting any leading integral bit of the significand). If there is no upper limit, then `significandBitCount` should be `Int.max`.

Note that `Float80.significandBitCount` is 63, even though 64 bits are used to store the significand in the memory representation of a `Float80` (unlike other floating-point types, `Float80` explicitly stores the leading integral significand bit, but the `BinaryFloatingPoint` APIs provide an abstraction so that users don’t need to be aware of this detail).
