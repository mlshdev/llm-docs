> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/rawrepresentable/encode(to:)-4tbh4](https://developer.apple.com/documentation/swift/rawrepresentable/encode(to:)-4tbh4)

# encode(to:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Encodes this value into the given encoder, when the type’s `RawValue` is `Double`.

## Declaration

```swift
func encode(to encoder: any Encoder) throws
```

## Parameters

- `encoder`: The encoder to write data to.

<a id="discussion"></a>

## Discussion

This function throws an error if any values are invalid for the given encoder’s format.

## See Also

### Encoding a Value

- [encode(to:)](encode%28to_%29-4evma.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `String`. Encodes this value into the given encoder, when the type’s `RawValue` is `String`.
- [encode(to:)](encode%28to_%29-5igsi.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `Bool`. Encodes this value into the given encoder, when the type’s `RawValue` is `Bool`.
- [encode(to:)](encode%28to_%29-21ma8.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `Float`. Encodes this value into the given encoder, when the type’s `RawValue` is `Float`.
- [encode(to:)](encode%28to_%29-8horh.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `Int`. Encodes this value into the given encoder, when the type’s `RawValue` is `Int`.
- [encode(to:)](encode%28to_%29-78oqu.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `UInt`. Encodes this value into the given encoder, when the type’s `RawValue` is `UInt`.
- [encode(to:)](encode%28to_%29-4pavm.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `Int8`. Encodes this value into the given encoder, when the type’s `RawValue` is `Int8`.
- [encode(to:)](encode%28to_%29-86dqn.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `Int16`. Encodes this value into the given encoder, when the type’s `RawValue` is `Int16`.
- [encode(to:)](encode%28to_%29-7dyeb.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `Int32`. Encodes this value into the given encoder, when the type’s `RawValue` is `Int32`.
- [encode(to:)](encode%28to_%29-4gohs.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `Int64`. Encodes this value into the given encoder, when the type’s `RawValue` is `Int64`.
- [encode(to:)](encode%28to_%29-9u5rt.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `UInt8`. Encodes this value into the given encoder, when the type’s `RawValue` is `UInt8`.
- [encode(to:)](encode%28to_%29-cla3.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `UInt16`. Encodes this value into the given encoder, when the type’s `RawValue` is `UInt16`.
- [encode(to:)](encode%28to_%29-27waz.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `UInt32`. Encodes this value into the given encoder, when the type’s `RawValue` is `UInt32`.
- [encode(to:)](encode%28to_%29-16ame.md): Conforms when `Self` conforms to `Encodable` and `RawValue` is `UInt64`. Encodes this value into the given encoder, when the type’s `RawValue` is `UInt64`.
