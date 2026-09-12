> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyeddecodingcontainer](https://developer.apple.com/documentation/swift/keyeddecodingcontainer)

# KeyedDecodingContainer

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A concrete container that provides a view into a decoder’s storage, making the encoded properties of a decodable type accessible by keys.

## Declaration

```swift
struct KeyedDecodingContainer<K> where K : CodingKey
```

## Topics

### Initializers

- [init(\_:)](keyeddecodingcontainer/init%28__%29.md): Creates a new instance with the given container.

### Instance Properties

- [allKeys](keyeddecodingcontainer/allkeys.md): All the keys the decoder has for this container.
- [codingPath](keyeddecodingcontainer/codingpath.md): The path of coding keys taken to get to this point in decoding.

### Instance Methods

- [contains(\_:)](keyeddecodingcontainer/contains%28__%29.md): Returns a Boolean value indicating whether the decoder contains a value associated with the given key.
- [decode(\_:forKey:)](keyeddecodingcontainer/decode%28__forkey_%29-1d33g.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainer/decode%28__forkey_%29-1n3v.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainer/decode%28__forkey_%29-1u4zx.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainer/decode%28__forkey_%29-21ybk.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainer/decode%28__forkey_%29-3e257.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainer/decode%28__forkey_%29-3egly.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainer/decode%28__forkey_%29-3yw73.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainer/decode%28__forkey_%29-4mzei.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainer/decode%28__forkey_%29-5fh1x.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainer/decode%28__forkey_%29-5io1a.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainer/decode%28__forkey_%29-687gv.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainer/decode%28__forkey_%29-6d98c.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainer/decode%28__forkey_%29-721nc.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainer/decode%28__forkey_%29-7vj8e.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainer/decode%28__forkey_%29-8foeb.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainer/decode%28__forkey_%29-8u7rt.md): Conforms when `K` conforms to `CodingKey`.
- [decode(\_:forKey:)](keyeddecodingcontainer/decode%28__forkey_%29-9633o.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:)](keyeddecodingcontainer/decode%28__forkey_%29-9fa2u.md): Decodes a value of the given type for the given key.
- [decode(\_:forKey:configuration:)](keyeddecodingcontainer/decode%28__forkey_configuration_%29-2rk0t.md): Conforms when `K` conforms to `CodingKey`.
- [decode(\_:forKey:configuration:)](keyeddecodingcontainer/decode%28__forkey_configuration_%29-6t8ew.md): Conforms when `K` conforms to `CodingKey`.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainer/decodeifpresent%28__forkey_%29-1iwt4.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainer/decodeifpresent%28__forkey_%29-1zmt1.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainer/decodeifpresent%28__forkey_%29-23pwi.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainer/decodeifpresent%28__forkey_%29-2ax45.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainer/decodeifpresent%28__forkey_%29-2hn6i.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainer/decodeifpresent%28__forkey_%29-2thz1.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainer/decodeifpresent%28__forkey_%29-2yvgn.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainer/decodeifpresent%28__forkey_%29-3thus.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainer/decodeifpresent%28__forkey_%29-6zxms.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainer/decodeifpresent%28__forkey_%29-74ir4.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainer/decodeifpresent%28__forkey_%29-7ucyl.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainer/decodeifpresent%28__forkey_%29-7x3cg.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainer/decodeifpresent%28__forkey_%29-85fg3.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainer/decodeifpresent%28__forkey_%29-897x4.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainer/decodeifpresent%28__forkey_%29-8tib2.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainer/decodeifpresent%28__forkey_%29-91iaz.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](keyeddecodingcontainer/decodeifpresent%28__forkey_%29-9fnqb.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:configuration:)](keyeddecodingcontainer/decodeifpresent%28__forkey_configuration_%29-469qf.md): Conforms when `K` conforms to `CodingKey`.
- [decodeIfPresent(\_:forKey:configuration:)](keyeddecodingcontainer/decodeifpresent%28__forkey_configuration_%29-5g1cl.md): Conforms when `K` conforms to `CodingKey`.
- [decodeNil(forKey:)](keyeddecodingcontainer/decodenil%28forkey_%29.md): Decodes a null value for the given key.
- [decodePredicateExpression(forKey:input:output:predicateConfiguration:)](keyeddecodingcontainer/decodepredicateexpression%28forkey_input_output_predicateconfiguration_%29.md): Conforms when `K` conforms to `CodingKey`.
- [decodePredicateExpression(forKey:input:predicateConfiguration:)](keyeddecodingcontainer/decodepredicateexpression%28forkey_input_predicateconfiguration_%29.md): Conforms when `K` conforms to `CodingKey`.
- [decodePredicateExpressionIfPresent(forKey:input:output:predicateConfiguration:)](keyeddecodingcontainer/decodepredicateexpressionifpresent%28forkey_input_output_predicateconfiguration_%29.md): Conforms when `K` conforms to `CodingKey`.
- [decodePredicateExpressionIfPresent(forKey:input:predicateConfiguration:)](keyeddecodingcontainer/decodepredicateexpressionifpresent%28forkey_input_predicateconfiguration_%29.md): Conforms when `K` conforms to `CodingKey`.
- [nestedContainer(keyedBy:forKey:)](keyeddecodingcontainer/nestedcontainer%28keyedby_forkey_%29.md): Returns the data stored for the given key as represented in a container keyed by the given key type.
- [nestedUnkeyedContainer(forKey:)](keyeddecodingcontainer/nestedunkeyedcontainer%28forkey_%29.md): Returns the data stored for the given key as represented in an unkeyed container.
- [superDecoder()](keyeddecodingcontainer/superdecoder%28%29.md): Returns a `Decoder` instance for decoding `super` from the container associated with the default `super` key.
- [superDecoder(forKey:)](keyeddecodingcontainer/superdecoder%28forkey_%29.md): Returns a `Decoder` instance for decoding `super` from the container associated with the given key.

### Type Aliases

- [KeyedDecodingContainer.Key](keyeddecodingcontainer/key.md)

### Default Implementations

- [KeyedDecodingContainerProtocol Implementations](keyeddecodingcontainer/keyeddecodingcontainerprotocol-implementations.md)

## Relationships

### Conforms To

- [KeyedDecodingContainerProtocol](keyeddecodingcontainerprotocol.md)

## See Also

### Decoding Containers

- [SingleValueDecodingContainer](singlevaluedecodingcontainer.md): A container that can support the storage and direct decoding of a single nonkeyed value.
- [KeyedDecodingContainerProtocol](keyeddecodingcontainerprotocol.md): A type that provides a view into a decoder’s storage and is used to hold the encoded properties of a decodable type in a keyed manner.
- [UnkeyedDecodingContainer](unkeyeddecodingcontainer.md): A type that provides a view into a decoder’s storage and is used to hold the encoded properties of a decodable type sequentially, without keys.
