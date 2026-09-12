> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unkeyedencodingcontainer](https://developer.apple.com/documentation/swift/unkeyedencodingcontainer)

# UnkeyedEncodingContainer

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that provides a view into an encoder’s storage and is used to hold the encoded properties of an encodable type sequentially, without keys.

## Declaration

```swift
protocol UnkeyedEncodingContainer
```

<a id="overview"></a>

## Overview

Encoders should provide types conforming to `UnkeyedEncodingContainer` for their format.

## Topics

### Instance Properties

- [codingPath](unkeyedencodingcontainer/codingpath.md): The path of coding keys taken to get to this point in encoding.
- [count](unkeyedencodingcontainer/count.md): The number of elements encoded into the container.

### Instance Methods

- [encode(\_:)](unkeyedencodingcontainer/encode%28__%29-1rqbg.md): Encodes the given value.
- [encode(\_:)](unkeyedencodingcontainer/encode%28__%29-1yl36.md): Encodes the given value.
- [encode(\_:)](unkeyedencodingcontainer/encode%28__%29-24em8.md): Encodes the given value.
- [encode(\_:)](unkeyedencodingcontainer/encode%28__%29-30ux3.md): Encodes the given value.
- [encode(\_:)](unkeyedencodingcontainer/encode%28__%29-3dtgb.md): Encodes the given value.
- [encode(\_:)](unkeyedencodingcontainer/encode%28__%29-4ehqa.md): Encodes the given value.
- [encode(\_:)](unkeyedencodingcontainer/encode%28__%29-6460j.md): Encodes the given value.
- [encode(\_:)](unkeyedencodingcontainer/encode%28__%29-6jau2.md): Encodes the given value.
- [encode(\_:)](unkeyedencodingcontainer/encode%28__%29-6moq8.md): Encodes the given value.
- [encode(\_:)](unkeyedencodingcontainer/encode%28__%29-6o2fd.md): Encodes the given value.
- [encode(\_:)](unkeyedencodingcontainer/encode%28__%29-784h2.md): Encodes the given value.
- [encode(\_:)](unkeyedencodingcontainer/encode%28__%29-7cs0h.md): Encodes the given value.
- [encode(\_:)](unkeyedencodingcontainer/encode%28__%29-7vq.md): Encodes the given value.
- [encode(\_:)](unkeyedencodingcontainer/encode%28__%29-7za3t.md): Encodes the given value.
- [encode(\_:)](unkeyedencodingcontainer/encode%28__%29-9d3m0.md): Encodes the given value.
- [encode(\_:)](unkeyedencodingcontainer/encode%28__%29-9k4uf.md): Encodes the given value.
- [encode(\_:)](unkeyedencodingcontainer/encode%28__%29-9sz81.md): Encodes the given value.
- [encode(\_:configuration:)](unkeyedencodingcontainer/encode%28__configuration_%29-3y681.md)
- [encode(\_:configuration:)](unkeyedencodingcontainer/encode%28__configuration_%29-85f4v.md)
- [encode(contentsOf:)](unkeyedencodingcontainer/encode%28contentsof_%29-19w8r.md): Encodes the elements of the given sequence.
- [encode(contentsOf:)](unkeyedencodingcontainer/encode%28contentsof_%29-2bav9.md): Encodes the elements of the given sequence.
- [encode(contentsOf:)](unkeyedencodingcontainer/encode%28contentsof_%29-36ny.md): Encodes the elements of the given sequence.
- [encode(contentsOf:)](unkeyedencodingcontainer/encode%28contentsof_%29-3upp3.md): Encodes the elements of the given sequence.
- [encode(contentsOf:)](unkeyedencodingcontainer/encode%28contentsof_%29-4tdyr.md): Encodes the elements of the given sequence.
- [encode(contentsOf:)](unkeyedencodingcontainer/encode%28contentsof_%29-54d9i.md): Encodes the elements of the given sequence.
- [encode(contentsOf:)](unkeyedencodingcontainer/encode%28contentsof_%29-58k1b.md): Encodes the elements of the given sequence.
- [encode(contentsOf:)](unkeyedencodingcontainer/encode%28contentsof_%29-62wy5.md): Encodes the elements of the given sequence.
- [encode(contentsOf:)](unkeyedencodingcontainer/encode%28contentsof_%29-7m806.md): Encodes the elements of the given sequence.
- [encode(contentsOf:)](unkeyedencodingcontainer/encode%28contentsof_%29-862ok.md): Encodes the elements of the given sequence.
- [encode(contentsOf:)](unkeyedencodingcontainer/encode%28contentsof_%29-89pyf.md): Encodes the elements of the given sequence.
- [encode(contentsOf:)](unkeyedencodingcontainer/encode%28contentsof_%29-8d3h.md): Encodes the elements of the given sequence.
- [encode(contentsOf:)](unkeyedencodingcontainer/encode%28contentsof_%29-8vtn5.md): Encodes the elements of the given sequence.
- [encode(contentsOf:)](unkeyedencodingcontainer/encode%28contentsof_%29-9s06k.md): Encodes the elements of the given sequence.
- [encode(contentsOf:)](unkeyedencodingcontainer/encode%28contentsof_%29-9sogk.md): Encodes the elements of the given sequence.
- [encode(contentsOf:)](unkeyedencodingcontainer/encode%28contentsof_%29-kdw8.md): Encodes the elements of the given sequence.
- [encode(contentsOf:)](unkeyedencodingcontainer/encode%28contentsof_%29-xykc.md): Encodes the elements of the given sequence.
- [encodeConditional(\_:)](unkeyedencodingcontainer/encodeconditional%28__%29.md): Encodes a reference to the given object only if it is encoded unconditionally elsewhere in the payload (previously, or in the future).
- [encodeNil()](unkeyedencodingcontainer/encodenil%28%29.md): Encodes a null value.
- [encodePredicateExpression(\_:variable:predicateConfiguration:)](unkeyedencodingcontainer/encodepredicateexpression%28__variable_predicateconfiguration_%29-30xlk.md)
- [encodePredicateExpression(\_:variable:predicateConfiguration:)](unkeyedencodingcontainer/encodepredicateexpression%28__variable_predicateconfiguration_%29-3p9ec.md)
- [encodePredicateExpressionIfPresent(\_:variable:predicateConfiguration:)](unkeyedencodingcontainer/encodepredicateexpressionifpresent%28__variable_predicateconfiguration_%29-438on.md)
- [encodePredicateExpressionIfPresent(\_:variable:predicateConfiguration:)](unkeyedencodingcontainer/encodepredicateexpressionifpresent%28__variable_predicateconfiguration_%29-75j8t.md)
- [nestedContainer(keyedBy:)](unkeyedencodingcontainer/nestedcontainer%28keyedby_%29.md): Encodes a nested container keyed by the given type and returns it.
- [nestedUnkeyedContainer()](unkeyedencodingcontainer/nestedunkeyedcontainer%28%29.md): Encodes an unkeyed encoding container and returns it.
- [superEncoder()](unkeyedencodingcontainer/superencoder%28%29.md): Encodes a nested container and returns an `Encoder` instance for encoding `super` into that container.

## See Also

### Encoding Containers

- [SingleValueEncodingContainer](singlevalueencodingcontainer.md): A container that can support the storage and direct encoding of a single non-keyed value.
- [KeyedEncodingContainer](keyedencodingcontainer.md): A concrete container that provides a view into an encoder’s storage, making the encoded properties of an encodable type accessible by keys.
- [KeyedEncodingContainerProtocol](keyedencodingcontainerprotocol.md): A type that provides a view into an encoder’s storage and is used to hold the encoded properties of an encodable type in a keyed manner.
