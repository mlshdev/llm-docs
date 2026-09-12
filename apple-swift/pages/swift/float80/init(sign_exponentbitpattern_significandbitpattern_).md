> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float80/init(sign:exponentbitpattern:significandbitpattern:)](https://developer.apple.com/documentation/swift/float80/init(sign:exponentbitpattern:significandbitpattern:))

# init(sign:exponentBitPattern:significandBitPattern:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** macOS 10.10+

Creates a new instance from the specified sign and bit patterns.

## Declaration

```swift
init(sign: FloatingPointSign, exponentBitPattern: UInt, significandBitPattern: UInt64)
```

## Parameters

- `sign`: The sign of the new value.
- `exponentBitPattern`: The bit pattern to use for the exponent field of the new value.
- `significandBitPattern`: The bit pattern to use for the significand field of the new value.

<a id="discussion"></a>

## Discussion

The values passed as `exponentBitPattern` and `significandBitPattern` are interpreted in the binary interchange format defined by the [IEEE 754 specification](http://ieeexplore.ieee.org/servlet/opac?punumber=4610933).
