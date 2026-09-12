> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unkeyeddecodingcontainer/decode(_:)-30psn](https://developer.apple.com/documentation/swift/unkeyeddecodingcontainer/decode(_:)-30psn)

# decode(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decodes a value of the given type.

## Declaration

```swift
mutating func decode(_ type: UInt32.Type) throws -> UInt32
```

## Parameters

- `type`: The type of value to decode.

<a id="return-value"></a>

## Return Value

A value of the requested type, if present for the given key and convertible to the requested type.

<a id="discussion"></a>

## Discussion

> **Throws**

> `DecodingError.typeMismatch` if the encountered encoded value is not convertible to the requested type.

> **Throws**

> `DecodingError.valueNotFound` if the encountered encoded value is null, or of there are no more values to decode.

## Default Implementations

### UnkeyedDecodingContainer Implementations

- [decode(\_:)](decode%28__%29-4c0se.md): Decodes a value of the given type.
- [decode(\_:)](decode%28__%29-6k8gu.md): Decodes a value of the given type.
