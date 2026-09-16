> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/float80/issubnormal

# isSubnormal

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value indicating whether the instance is subnormal.

## Declaration

```swift
var isSubnormal: Bool { get }
```

<a id="discussion"></a>

## Discussion

A *subnormal* value is a nonzero number that has a lesser magnitude than the smallest normal number. Subnormal values don’t use the full precision available to values of a type.

Zero is neither a normal nor a subnormal number. Subnormal numbers are often called *denormal* or *denormalized*—these are different names for the same concept.
