> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyeddecodingcontainerprotocol/decode(_:forkey:)-1pd5k](https://developer.apple.com/documentation/swift/keyeddecodingcontainerprotocol/decode(_:forkey:)-1pd5k)

# decode(\_:forKey:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decodes a value of the given type for the given key.

## Declaration

```swift
func decode(_ type: UInt8.Type, forKey key: Self.Key) throws -> UInt8
```

## Parameters

- `type`: The type of value to decode.
- `key`: The key that the decoded value is associated with.

<a id="return-value"></a>

## Return Value

A value of the requested type, if present for the given key and convertible to the requested type.

<a id="discussion"></a>

## Discussion

> **Throws**

> `DecodingError.typeMismatch` if the encountered encoded value is not convertible to the requested type.

> **Throws**

> `DecodingError.keyNotFound` if `self` does not have an entry for the given key.

> **Throws**

> `DecodingError.valueNotFound` if `self` has a null entry for the given key.

## Default Implementations

### KeyedDecodingContainerProtocol Implementations

- [decode(\_:forKey:)](decode%28__forkey_%29-7za3v.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](decode%28__forkey_%29-u839.md): Decodes a value of the given type for the given key.
