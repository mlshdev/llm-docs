> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/singlevaluedecodingcontainer/decode(_:)-ypkn](https://developer.apple.com/documentation/swift/singlevaluedecodingcontainer/decode(_:)-ypkn)

# decode(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Decodes a single value of the given type.

## Declaration

```swift
func decode(_ type: Float.Type) throws -> Float
```

## Parameters

- `type`: The type to decode as.

<a id="return-value"></a>

## Return Value

A value of the requested type.

<a id="discussion"></a>

## Discussion

> **Throws**

> `DecodingError.typeMismatch` if the encountered encoded value cannot be converted to the requested type.

> **Throws**

> `DecodingError.valueNotFound` if the encountered encoded value is null.

## Default Implementations

### SingleValueDecodingContainer Implementations

- [decode(\_:)](decode%28__%29-1rz83.md): Decodes a single value of the given type.
- [decode(\_:)](decode%28__%29-5f6dc.md): Conforms when `Self` conforms to `UnkeyedDecodingContainer`. Decodes a single value of the given type.
- [decode(\_:)](decode%28__%29-5i4ec.md): Decodes a single value of the given type.
- [decode(\_:)](decode%28__%29-6vzg2.md): Conforms when `Self` conforms to `UnkeyedDecodingContainer`. Decodes a single value of the given type.
