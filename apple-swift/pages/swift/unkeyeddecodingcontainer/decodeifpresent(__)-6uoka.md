> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unkeyeddecodingcontainer/decodeifpresent(_:)-6uoka](https://developer.apple.com/documentation/swift/unkeyeddecodingcontainer/decodeifpresent(_:)-6uoka)

# decodeIfPresent(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decodes a value of the given type, if present.

## Declaration

```swift
mutating func decodeIfPresent(_ type: Double.Type) throws -> Double?
```

## Parameters

- `type`: The type of value to decode.

<a id="return-value"></a>

## Return Value

A decoded value of the requested type, or `nil` if the value is a null value, or if there are no more elements to decode.

<a id="discussion"></a>

## Discussion

This method returns `nil` if the container has no elements left to decode, or if the value is null. The difference between these states can be distinguished by checking `isAtEnd`.

> **Throws**

> `DecodingError.typeMismatch` if the encountered encoded value is not convertible to the requested type.

## Default Implementations

### UnkeyedDecodingContainer Implementations

- [decodeIfPresent(\_:)](decodeifpresent%28__%29-11drn.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](decodeifpresent%28__%29-1mzxv.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](decodeifpresent%28__%29-33p27.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](decodeifpresent%28__%29-3hokf.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](decodeifpresent%28__%29-3tuys.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](decodeifpresent%28__%29-4b7tu.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](decodeifpresent%28__%29-4bqkd.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](decodeifpresent%28__%29-5mgpl.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](decodeifpresent%28__%29-5zug7.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](decodeifpresent%28__%29-64o4m.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](decodeifpresent%28__%29-6k5py.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](decodeifpresent%28__%29-6snuc.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](decodeifpresent%28__%29-87qsg.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](decodeifpresent%28__%29-8nfu7.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](decodeifpresent%28__%29-8we74.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](decodeifpresent%28__%29-9tk6h.md): Decodes a value of the given type, if present.
- [decodeIfPresent(\_:)](decodeifpresent%28__%29-o708.md): Decodes a value of the given type, if present.
