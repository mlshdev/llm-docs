> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unkeyeddecodingcontainer](https://developer.apple.com/documentation/swift/unkeyeddecodingcontainer)

# UnkeyedDecodingContainer

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that provides a view into a decoder’s storage and is used to hold the encoded properties of a decodable type sequentially, without keys.

## Declaration

```swift
protocol UnkeyedDecodingContainer
```

<a id="overview"></a>

## Overview

Decoders should provide types conforming to `UnkeyedDecodingContainer` for their format.

## Topics

### Instance Properties

- [codingPath](unkeyeddecodingcontainer/codingpath.md): The path of coding keys taken to get to this point in decoding.
- [count](unkeyeddecodingcontainer/count.md): The number of elements contained within this container.
- [currentIndex](unkeyeddecodingcontainer/currentindex.md): The current decoding index of the container (i.e. the index of the next element to be decoded.) Incremented after every successful decode call.
- [isAtEnd](unkeyeddecodingcontainer/isatend.md): A Boolean value indicating whether there are no more elements left to be decoded in the container.

### Instance Methods

- [decode(\_:)](unkeyeddecodingcontainer/decode%28__%29-1jjjp.md): Decodes a value of the given type.
- [decode(\_:)](unkeyeddecodingcontainer/decode%28__%29-276l5.md): Decodes a value of the given type.
- [decode(\_:)](unkeyeddecodingcontainer/decode%28__%29-2jd5t.md): Decodes a value of the given type.
- [decode(\_:)](unkeyeddecodingcontainer/decode%28__%29-30psn.md): Decodes a value of the given type.
- [decode(\_:)](unkeyeddecodingcontainer/decode%28__%29-499mt.md): Decodes a value of the given type.
- [decode(\_:)](unkeyeddecodingcontainer/decode%28__%29-4cm6k.md): Decodes a value of the given type.
- [decode(\_:)](unkeyeddecodingcontainer/decode%28__%29-5eszo.md): Decodes a value of the given type.
- [decode(\_:)](unkeyeddecodingcontainer/decode%28__%29-5kbz9.md): Decodes a value of the given type.
- [decode(\_:)](unkeyeddecodingcontainer/decode%28__%29-66zb4.md): Decodes a value of the given type.
- [decode(\_:)](unkeyeddecodingcontainer/decode%28__%29-6o9j1.md): Decodes a value of the given type.
- [decode(\_:)](unkeyeddecodingcontainer/decode%28__%29-7gp3y.md): Decodes a value of the given type.
- [decode(\_:)](unkeyeddecodingcontainer/decode%28__%29-83ekt.md): Decodes a value of the given type.
- [decode(\_:)](unkeyeddecodingcontainer/decode%28__%29-8g0io.md): Decodes a value of the given type.
- [decode(\_:)](unkeyeddecodingcontainer/decode%28__%29-96zc5.md): Decodes a value of the given type.
- [decode(\_:)](unkeyeddecodingcontainer/decode%28__%29-9gfvr.md): Decodes a value of the given type.
- [decode(\_:)](unkeyeddecodingcontainer/decode%28__%29-gn40.md): Decodes a value of the given type.
- [decode(\_:)](unkeyeddecodingcontainer/decode%28__%29-nztw.md): Decodes a value of the given type.
- [decode(\_:configuration:)](unkeyeddecodingcontainer/decode%28__configuration_%29-3q1ra.md)
- [decode(\_:configuration:)](unkeyeddecodingcontainer/decode%28__configuration_%29-72ctg.md)
- [decodeIfPresent(\_:)](unkeyeddecodingcontainer/decodeifpresent%28__%29-1lbyq.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](unkeyeddecodingcontainer/decodeifpresent%28__%29-1oxo9.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](unkeyeddecodingcontainer/decodeifpresent%28__%29-24deb.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](unkeyeddecodingcontainer/decodeifpresent%28__%29-2n0nb.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](unkeyeddecodingcontainer/decodeifpresent%28__%29-4d6xc.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](unkeyeddecodingcontainer/decodeifpresent%28__%29-599d9.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](unkeyeddecodingcontainer/decodeifpresent%28__%29-5t8p7.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](unkeyeddecodingcontainer/decodeifpresent%28__%29-62i7k.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](unkeyeddecodingcontainer/decodeifpresent%28__%29-6aqhk.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](unkeyeddecodingcontainer/decodeifpresent%28__%29-6d53.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](unkeyeddecodingcontainer/decodeifpresent%28__%29-6j7g9.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](unkeyeddecodingcontainer/decodeifpresent%28__%29-6uoka.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](unkeyeddecodingcontainer/decodeifpresent%28__%29-7dfq.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](unkeyeddecodingcontainer/decodeifpresent%28__%29-80st4.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](unkeyeddecodingcontainer/decodeifpresent%28__%29-86f1g.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](unkeyeddecodingcontainer/decodeifpresent%28__%29-gxli.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](unkeyeddecodingcontainer/decodeifpresent%28__%29-n5tj.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:configuration:)](unkeyeddecodingcontainer/decodeifpresent%28__configuration_%29-3i2jl.md)
- [decodeIfPresent(\_:configuration:)](unkeyeddecodingcontainer/decodeifpresent%28__configuration_%29-7nafo.md)
- [decodeNil()](unkeyeddecodingcontainer/decodenil%28%29.md): Decodes a null value.
- [decodePredicateExpression(input:output:predicateConfiguration:)](unkeyeddecodingcontainer/decodepredicateexpression%28input_output_predicateconfiguration_%29.md)
- [decodePredicateExpression(input:predicateConfiguration:)](unkeyeddecodingcontainer/decodepredicateexpression%28input_predicateconfiguration_%29.md)
- [decodePredicateExpressionIfPresent(input:output:predicateConfiguration:)](unkeyeddecodingcontainer/decodepredicateexpressionifpresent%28input_output_predicateconfiguration_%29.md)
- [decodePredicateExpressionIfPresent(input:predicateConfiguration:)](unkeyeddecodingcontainer/decodepredicateexpressionifpresent%28input_predicateconfiguration_%29.md)
- [nestedContainer(keyedBy:)](unkeyeddecodingcontainer/nestedcontainer%28keyedby_%29.md): Decodes a nested container keyed by the given type.
- [nestedUnkeyedContainer()](unkeyeddecodingcontainer/nestedunkeyedcontainer%28%29.md): Decodes an unkeyed nested container.
- [superDecoder()](unkeyeddecodingcontainer/superdecoder%28%29.md): Decodes a nested container and returns a `Decoder` instance for decoding `super` from that container.

## See Also

### Decoding Containers

- [KeyedDecodingContainer](keyeddecodingcontainer.md): A concrete container that provides a view into a decoder’s storage, making the encoded properties of a decodable type accessible by keys.
- [SingleValueDecodingContainer](singlevaluedecodingcontainer.md): A container that can support the storage and direct decoding of a single nonkeyed value.
- [KeyedDecodingContainerProtocol](keyeddecodingcontainerprotocol.md): A type that provides a view into a decoder’s storage and is used to hold the encoded properties of a decodable type in a keyed manner.
