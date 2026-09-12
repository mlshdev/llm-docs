> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyeddecodingcontainerprotocol/decode(_:forkey:)-4d1ff](https://developer.apple.com/documentation/swift/keyeddecodingcontainerprotocol/decode(_:forkey:)-4d1ff)

# decode(\_:forKey:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Decodes a value of the given type for the given key.

## Declaration

```swift
func decode(_ type: UInt128.Type, forKey key: Self.Key) throws -> UInt128
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
