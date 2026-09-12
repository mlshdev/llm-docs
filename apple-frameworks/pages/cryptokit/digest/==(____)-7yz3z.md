> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/digest/==(_:_:)-7yz3z](https://developer.apple.com/documentation/cryptokit/digest/==(_:_:)-7yz3z)

# ==(\_:\_:)

**Framework:** Apple CryptoKit  
**Kind:** Operator  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Determines whether a digest is equivalent to a collection of contiguous bytes.

## Declaration

```swift
static func == <D>(lhs: Self, rhs: D) -> Bool where D : DataProtocol
```

## Parameters

- `lhs`: A digest to compare.
- `rhs`: A collection of contiguous bytes to compare.

<a id="return-value"></a>

## Return Value

A Boolean value that’s `true` if the digest is equivalent to the collection of binary data.

## See Also

### Comparing digests

- [==(\_:\_:)](==%28____%29-6m59k.md): Determines whether two digests are equal.
