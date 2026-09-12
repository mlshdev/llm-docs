> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/singlevalueencodingcontainer](https://developer.apple.com/documentation/swift/singlevalueencodingcontainer)

# SingleValueEncodingContainer

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A container that can support the storage and direct encoding of a single non-keyed value.

## Declaration

```swift
protocol SingleValueEncodingContainer
```

## Topics

### Instance Properties

- [codingPath](singlevalueencodingcontainer/codingpath.md): The path of coding keys taken to get to this point in encoding.

### Instance Methods

- [encode(\_:)](singlevalueencodingcontainer/encode%28__%29-1mftu.md): Encodes a single value of the given type.
- [encode(\_:)](singlevalueencodingcontainer/encode%28__%29-23skf.md): Encodes a single value of the given type.
- [encode(\_:)](singlevalueencodingcontainer/encode%28__%29-2c14h.md): Encodes a single value of the given type.
- [encode(\_:)](singlevalueencodingcontainer/encode%28__%29-2oplx.md): Encodes a single value of the given type.
- [encode(\_:)](singlevalueencodingcontainer/encode%28__%29-39vhy.md): Encodes a single value of the given type.
- [encode(\_:)](singlevalueencodingcontainer/encode%28__%29-44wsc.md): Encodes a single value of the given type.
- [encode(\_:)](singlevalueencodingcontainer/encode%28__%29-5111.md): Encodes a single value of the given type.
- [encode(\_:)](singlevalueencodingcontainer/encode%28__%29-512uf.md): Encodes a single value of the given type.
- [encode(\_:)](singlevalueencodingcontainer/encode%28__%29-5fuor.md): Encodes a single value of the given type.
- [encode(\_:)](singlevalueencodingcontainer/encode%28__%29-5kf5u.md): Encodes a single value of the given type.
- [encode(\_:)](singlevalueencodingcontainer/encode%28__%29-5ndtj.md): Encodes a single value of the given type.
- [encode(\_:)](singlevalueencodingcontainer/encode%28__%29-687yj.md): Encodes a single value of the given type.
- [encode(\_:)](singlevalueencodingcontainer/encode%28__%29-6a9w5.md): Encodes a single value of the given type.
- [encode(\_:)](singlevalueencodingcontainer/encode%28__%29-7alir.md): Encodes a single value of the given type.
- [encode(\_:)](singlevalueencodingcontainer/encode%28__%29-9mmv6.md): Encodes a single value of the given type.
- [encode(\_:)](singlevalueencodingcontainer/encode%28__%29-hruu.md): Encodes a single value of the given type.
- [encode(\_:)](singlevalueencodingcontainer/encode%28__%29-r5hk.md): Encodes a single value of the given type.
- [encodeNil()](singlevalueencodingcontainer/encodenil%28%29.md): Encodes a null value.

## See Also

### Encoding Containers

- [KeyedEncodingContainer](keyedencodingcontainer.md): A concrete container that provides a view into an encoder’s storage, making the encoded properties of an encodable type accessible by keys.
- [KeyedEncodingContainerProtocol](keyedencodingcontainerprotocol.md): A type that provides a view into an encoder’s storage and is used to hold the encoded properties of an encodable type in a keyed manner.
- [UnkeyedEncodingContainer](unkeyedencodingcontainer.md): A type that provides a view into an encoder’s storage and is used to hold the encoded properties of an encodable type sequentially, without keys.
