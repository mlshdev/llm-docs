> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyedencodingcontainerprotocol](https://developer.apple.com/documentation/swift/keyedencodingcontainerprotocol)

# KeyedEncodingContainerProtocol

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that provides a view into an encoder’s storage and is used to hold the encoded properties of an encodable type in a keyed manner.

## Declaration

```swift
protocol KeyedEncodingContainerProtocol
```

<a id="overview"></a>

## Overview

Encoders should provide types conforming to `KeyedEncodingContainerProtocol` for their format.

## Topics

### Associated Types

- [Key](keyedencodingcontainerprotocol/key.md)

### Instance Properties

- [codingPath](keyedencodingcontainerprotocol/codingpath.md): The path of coding keys taken to get to this point in encoding.

### Instance Methods

- [encode(\_:forKey:)](keyedencodingcontainerprotocol/encode%28__forkey_%29-389ei.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainerprotocol/encode%28__forkey_%29-44xki.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainerprotocol/encode%28__forkey_%29-45mw2.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainerprotocol/encode%28__forkey_%29-4lg54.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainerprotocol/encode%28__forkey_%29-4xpm2.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainerprotocol/encode%28__forkey_%29-53bkq.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainerprotocol/encode%28__forkey_%29-73p1b.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainerprotocol/encode%28__forkey_%29-74l0h.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainerprotocol/encode%28__forkey_%29-75dqb.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainerprotocol/encode%28__forkey_%29-7d8l.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainerprotocol/encode%28__forkey_%29-86s3y.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainerprotocol/encode%28__forkey_%29-887jx.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainerprotocol/encode%28__forkey_%29-8gl89.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainerprotocol/encode%28__forkey_%29-8mwtj.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainerprotocol/encode%28__forkey_%29-8xq4c.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainerprotocol/encode%28__forkey_%29-9hxpb.md): Encodes the given value for the given key.
- [encode(\_:forKey:)](keyedencodingcontainerprotocol/encode%28__forkey_%29-qjna.md): Encodes the given value for the given key.
- [encodeConditional(\_:forKey:)](keyedencodingcontainerprotocol/encodeconditional%28__forkey_%29.md): Encodes a reference to the given object only if it is encoded unconditionally elsewhere in the payload (previously, or in the future).
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainerprotocol/encodeifpresent%28__forkey_%29-1d9dk.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainerprotocol/encodeifpresent%28__forkey_%29-1f6sg.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainerprotocol/encodeifpresent%28__forkey_%29-1iqzh.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainerprotocol/encodeifpresent%28__forkey_%29-1r22b.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainerprotocol/encodeifpresent%28__forkey_%29-2xq5p.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainerprotocol/encodeifpresent%28__forkey_%29-35mgj.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainerprotocol/encodeifpresent%28__forkey_%29-3j1kl.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainerprotocol/encodeifpresent%28__forkey_%29-4axra.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainerprotocol/encodeifpresent%28__forkey_%29-5ig1w.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainerprotocol/encodeifpresent%28__forkey_%29-5uiig.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainerprotocol/encodeifpresent%28__forkey_%29-5xhse.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainerprotocol/encodeifpresent%28__forkey_%29-68f89.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainerprotocol/encodeifpresent%28__forkey_%29-6xotr.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainerprotocol/encodeifpresent%28__forkey_%29-7b7eu.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainerprotocol/encodeifpresent%28__forkey_%29-837jy.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainerprotocol/encodeifpresent%28__forkey_%29-d7xg.md): Encodes the given value for the given key if it is not `nil`.
- [encodeIfPresent(\_:forKey:)](keyedencodingcontainerprotocol/encodeifpresent%28__forkey_%29-luij.md): Encodes the given value for the given key if it is not `nil`.
- [encodeNil(forKey:)](keyedencodingcontainerprotocol/encodenil%28forkey_%29.md): Encodes a null value for the given key.
- [nestedContainer(keyedBy:forKey:)](keyedencodingcontainerprotocol/nestedcontainer%28keyedby_forkey_%29.md): Stores a keyed encoding container for the given key and returns it.
- [nestedUnkeyedContainer(forKey:)](keyedencodingcontainerprotocol/nestedunkeyedcontainer%28forkey_%29.md): Stores an unkeyed encoding container for the given key and returns it.
- [superEncoder()](keyedencodingcontainerprotocol/superencoder%28%29.md): Stores a new nested container for the default `super` key and returns a new encoder instance for encoding `super` into that container.
- [superEncoder(forKey:)](keyedencodingcontainerprotocol/superencoder%28forkey_%29.md): Stores a new nested container for the given key and returns a new encoder instance for encoding `super` into that container.

## Relationships

### Conforming Types

- [KeyedEncodingContainer](keyedencodingcontainer.md)

## See Also

### Encoding Containers

- [SingleValueEncodingContainer](singlevalueencodingcontainer.md): A container that can support the storage and direct encoding of a single non-keyed value.
- [KeyedEncodingContainer](keyedencodingcontainer.md): A concrete container that provides a view into an encoder’s storage, making the encoded properties of an encodable type accessible by keys.
- [UnkeyedEncodingContainer](unkeyedencodingcontainer.md): A type that provides a view into an encoder’s storage and is used to hold the encoded properties of an encodable type sequentially, without keys.
