> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfctypenameformat/unchanged](https://developer.apple.com/documentation/corenfc/nfctypenameformat/unchanged)

# NFCTypeNameFormat.unchanged (Swift)

**Framework:** Core NFC  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

A type indicating that the payload is part of a series of records containing chunked data.

## Declaration

```swift
case unchanged
```

<a id="Discussion"></a>

## Discussion

The first record in a series of chunked data records indicates the type name format for the series. The remaining records have a type name format of [NFCTypeNameFormat.unchanged](unchanged.md).

## See Also

### Content Types

- [NFCTypeNameFormat.absoluteURI](absoluteuri.md): A type indicating that the payload contains a uniform resource identifier.
- [NFCTypeNameFormat.empty](empty.md): A type indicating that the payload contains no data.
- [NFCTypeNameFormat.media](media.md): A type indicating that the payload contains media data as defined by RFC 2046.
- [NFCTypeNameFormat.nfcExternal](nfcexternal.md): A type indicating that the payload contains NFC external type data.
- [NFCTypeNameFormat.nfcWellKnown](nfcwellknown.md): A type indicating that the payload contains well-known NFC record type data.
- [NFCTypeNameFormat.unknown](unknown.md): A type indicating that the payload data type is unknown.

# NFCTypeNameFormatUnchanged (Objective-C)

**Framework:** Core NFC  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

A type indicating that the payload is part of a series of records containing chunked data.

## Declaration

```objectivec
NFCTypeNameFormatUnchanged
```

<a id="Discussion"></a>

## Discussion

The first record in a series of chunked data records indicates the type name format for the series. The remaining records have a type name format of [NFCTypeNameFormatUnchanged](unchanged.md).

## See Also

### Content Types

- [NFCTypeNameFormatAbsoluteURI](absoluteuri.md): A type indicating that the payload contains a uniform resource identifier.
- [NFCTypeNameFormatEmpty](empty.md): A type indicating that the payload contains no data.
- [NFCTypeNameFormatMedia](media.md): A type indicating that the payload contains media data as defined by RFC 2046.
- [NFCTypeNameFormatNFCExternal](nfcexternal.md): A type indicating that the payload contains NFC external type data.
- [NFCTypeNameFormatNFCWellKnown](nfcwellknown.md): A type indicating that the payload contains well-known NFC record type data.
- [NFCTypeNameFormatUnknown](unknown.md): A type indicating that the payload data type is unknown.
