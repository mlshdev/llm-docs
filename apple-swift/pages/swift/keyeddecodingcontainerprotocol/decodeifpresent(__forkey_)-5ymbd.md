> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/keyeddecodingcontainerprotocol/decodeifpresent(_:forkey:)-5ymbd](https://developer.apple.com/documentation/swift/keyeddecodingcontainerprotocol/decodeifpresent(_:forkey:)-5ymbd)

# decodeIfPresent(\_:forKey:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decodes a value of the given type for the given key, if present.

## Declaration

```swift
func decodeIfPresent(_ type: UInt8.Type, forKey key: Self.Key) throws -> UInt8?
```

## Parameters

- `type`: The type of value to decode.
- `key`: The key that the decoded value is associated with.

<a id="return-value"></a>

## Return Value

A decoded value of the requested type, or `nil` if the `Decoder` does not have an entry associated with the given key, or if the value is a null value.

<a id="discussion"></a>

## Discussion

This method returns `nil` if the container does not have a value associated with `key`, or if the value is null. The difference between these states can be distinguished with a `contains(_:)` call.

> **Throws**

> `DecodingError.typeMismatch` if the encountered encoded value is not convertible to the requested type.

## Default Implementations

### KeyedDecodingContainerProtocol Implementations

- [decodeIfPresent(\_:forKey:)](decodeifpresent%28__forkey_%29-189q8.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](decodeifpresent%28__forkey_%29-1i7qt.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](decodeifpresent%28__forkey_%29-2g0dg.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](decodeifpresent%28__forkey_%29-2o9mb.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](decodeifpresent%28__forkey_%29-4j3g5.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](decodeifpresent%28__forkey_%29-5vg9.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](decodeifpresent%28__forkey_%29-613fl.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](decodeifpresent%28__forkey_%29-6d6xo.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](decodeifpresent%28__forkey_%29-6lga8.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](decodeifpresent%28__forkey_%29-6ze9z.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](decodeifpresent%28__forkey_%29-8cej4.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](decodeifpresent%28__forkey_%29-8l1ao.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](decodeifpresent%28__forkey_%29-8ujl.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](decodeifpresent%28__forkey_%29-8w7i2.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](decodeifpresent%28__forkey_%29-8wk2a.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](decodeifpresent%28__forkey_%29-fyzb.md): Decodes a value of the given type for the given key, if present.
- [decodeIfPresent(\_:forKey:)](decodeifpresent%28__forkey_%29-g4cp.md): Decodes a value of the given type for the given key, if present.
