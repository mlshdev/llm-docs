> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rawrepresentable/init(from:)-29lhi](https://developer.apple.com/documentation/swift/rawrepresentable/init(from:)-29lhi)

# init(from:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `Int64`.

## Declaration

```swift
init(from decoder: any Decoder) throws
```

## Parameters

- `decoder`: The decoder to read data from.

<a id="discussion"></a>

## Discussion

This initializer throws an error if reading from the decoder fails, or if the data read is corrupted or otherwise invalid.

## See Also

### Decoding a Value

- [init(from:)](init%28from_%29-5auil.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `String`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `String`.
- [init(from:)](init%28from_%29-5ar5m.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `Bool`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `Bool`.
- [init(from:)](init%28from_%29-417i8.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `Double`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `Double`.
- [init(from:)](init%28from_%29-9u9tp.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `Float`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `Float`.
- [init(from:)](init%28from_%29-4ibll.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `Int`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `Int`.
- [init(from:)](init%28from_%29-3hvw1.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `UInt`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `UInt`.
- [init(from:)](init%28from_%29-5ktev.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `Int8`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `Int8`.
- [init(from:)](init%28from_%29-2hvc0.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `Int16`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `Int16`.
- [init(from:)](init%28from_%29-114vz.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `Int32`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `Int32`.
- [init(from:)](init%28from_%29-94955.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `UInt8`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `UInt8`.
- [init(from:)](init%28from_%29-6z4x4.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `UInt16`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `UInt16`.
- [init(from:)](init%28from_%29-3arr3.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `UInt32`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `UInt32`.
- [init(from:)](init%28from_%29-812cy.md): Conforms when `Self` conforms to `Decodable` and `RawValue` is `UInt64`. Creates a new instance by decoding from the given decoder, when the type’s `RawValue` is `UInt64`.
