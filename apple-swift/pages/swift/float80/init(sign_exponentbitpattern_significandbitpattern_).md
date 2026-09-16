> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/float80/init(sign:exponentbitpattern:significandbitpattern:)

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
