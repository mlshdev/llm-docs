> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/unkeyeddecodingcontainer/nestedcontainer(keyedby:)

# nestedContainer(keyedBy:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decodes a nested container keyed by the given type.

## Declaration

```swift
mutating func nestedContainer<NestedKey>(keyedBy type: NestedKey.Type) throws -> KeyedDecodingContainer<NestedKey> where NestedKey : CodingKey
```

## Parameters

- `type`: The key type to use for the container.

<a id="return-value"></a>

## Return Value

A keyed decoding container view into `self`.

<a id="discussion"></a>

## Discussion

> **Throws**

> `DecodingError.typeMismatch` if the encountered stored value is not a keyed container.
