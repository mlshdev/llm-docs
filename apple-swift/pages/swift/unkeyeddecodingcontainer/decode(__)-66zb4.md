> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unkeyeddecodingcontainer/decode(_:)-66zb4](https://developer.apple.com/documentation/swift/unkeyeddecodingcontainer/decode(_:)-66zb4)

# decode(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Decodes a value of the given type.

## Declaration

```swift
mutating func decode(_ type: UInt128.Type) throws -> UInt128
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
