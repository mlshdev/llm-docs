> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyeddecodingcontainerprotocol](https://developer.apple.com/documentation/swift/keyeddecodingcontainerprotocol)

# KeyedDecodingContainerProtocol

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that provides a view into a decoder’s storage and is used to hold the encoded properties of a decodable type in a keyed manner.

## Declaration

```swift
protocol KeyedDecodingContainerProtocol
```

<a id="overview"></a>

## Overview

Decoders should provide types conforming to `UnkeyedDecodingContainer` for their format.

## Topics

### Associated Types

- [Key](keyeddecodingcontainerprotocol/key.md)

### Instance Properties

- [allKeys](keyeddecodingcontainerprotocol/allkeys.md): All the keys the `Decoder` has for this container.
- [codingPath](keyeddecodingcontainerprotocol/codingpath.md): The path of coding keys taken to get to this point in decoding.

### Instance Methods

- [contains(\_:)](keyeddecodingcontainerprotocol/contains%28__%29.md): Returns a Boolean value indicating whether the decoder contains a value associated with the given key.
- [decode(\_:forKey:)](keyeddecodingcontainerprotocol/decode%28__forkey_%29-1pd5k.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainerprotocol/decode%28__forkey_%29-2sa7a.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainerprotocol/decode%28__forkey_%29-3cyg.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainerprotocol/decode%28__forkey_%29-3zluy.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainerprotocol/decode%28__forkey_%29-43hen.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainerprotocol/decode%28__forkey_%29-4d1ff.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainerprotocol/decode%28__forkey_%29-4k53i.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainerprotocol/decode%28__forkey_%29-5jtvg.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainerprotocol/decode%28__forkey_%29-5kzmf.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainerprotocol/decode%28__forkey_%29-62kn6.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainerprotocol/decode%28__forkey_%29-873gm.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainerprotocol/decode%28__forkey_%29-880hl.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainerprotocol/decode%28__forkey_%29-8h5vd.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainerprotocol/decode%28__forkey_%29-decq.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainerprotocol/decode%28__forkey_%29-kecy.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainerprotocol/decode%28__forkey_%29-p613.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainerprotocol/decode%28__forkey_%29-xuqk.md): Decodes a value of the given type for the given key.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainerprotocol/decodeifpresent%28__forkey_%29-17w89.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainerprotocol/decodeifpresent%28__forkey_%29-1qynx.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainerprotocol/decodeifpresent%28__forkey_%29-1saky.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainerprotocol/decodeifpresent%28__forkey_%29-375xf.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainerprotocol/decodeifpresent%28__forkey_%29-39kc6.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainerprotocol/decodeifpresent%28__forkey_%29-3pes5.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainerprotocol/decodeifpresent%28__forkey_%29-5bqjw.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainerprotocol/decodeifpresent%28__forkey_%29-5k5md.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainerprotocol/decodeifpresent%28__forkey_%29-5ymbd.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainerprotocol/decodeifpresent%28__forkey_%29-6n52q.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainerprotocol/decodeifpresent%28__forkey_%29-6vzzs.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainerprotocol/decodeifpresent%28__forkey_%29-7a1da.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainerprotocol/decodeifpresent%28__forkey_%29-7jjj2.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainerprotocol/decodeifpresent%28__forkey_%29-7opy8.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainerprotocol/decodeifpresent%28__forkey_%29-7p1j1.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainerprotocol/decodeifpresent%28__forkey_%29-8qp1h.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainerprotocol/decodeifpresent%28__forkey_%29-lc54.md): Decodes a value of the given type for the given key, if present.
- [decodeNil(forKey:)](keyeddecodingcontainerprotocol/decodenil%28forkey_%29.md): Decodes a null value for the given key.
- [nestedContainer(keyedBy:forKey:)](keyeddecodingcontainerprotocol/nestedcontainer%28keyedby_forkey_%29.md): Returns the data stored for the given key as represented in a container keyed by the given key type.
- [nestedUnkeyedContainer(forKey:)](keyeddecodingcontainerprotocol/nestedunkeyedcontainer%28forkey_%29.md): Returns the data stored for the given key as represented in an unkeyed container.
- [superDecoder()](keyeddecodingcontainerprotocol/superdecoder%28%29.md): Returns a `Decoder` instance for decoding `super` from the container associated with the default `super` key.
- [superDecoder(forKey:)](keyeddecodingcontainerprotocol/superdecoder%28forkey_%29.md): Returns a `Decoder` instance for decoding `super` from the container associated with the given key.

## Relationships

### Conforming Types

- [KeyedDecodingContainer](keyeddecodingcontainer.md)

## See Also

### Decoding Containers

- [KeyedDecodingContainer](keyeddecodingcontainer.md): A concrete container that provides a view into a decoder’s storage, making the encoded properties of a decodable type accessible by keys.
- [SingleValueDecodingContainer](singlevaluedecodingcontainer.md): A container that can support the storage and direct decoding of a single nonkeyed value.
- [UnkeyedDecodingContainer](unkeyeddecodingcontainer.md): A type that provides a view into a decoder’s storage and is used to hold the encoded properties of a decodable type sequentially, without keys.
