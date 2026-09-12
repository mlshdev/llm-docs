> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcndefstatus/notsupported](https://developer.apple.com/documentation/corenfc/nfcndefstatus/notsupported)

# NFCNDEFStatus.notSupported (Swift)

**Framework:** Core NFC  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A status indicating that that tag isn’t an NDEF-formatted tag.

## Declaration

```swift
case notSupported
```

<a id="Discussion"></a>

## Discussion

You cannot perform read and write operations on the tag.

## See Also

### Statuses

- [NFCNDEFStatus.readOnly](readonly.md): A status indicating that the tag supports reading NDEF message data only.
- [NFCNDEFStatus.readWrite](readwrite.md): A status indicating that the tag supports reading and writing NDEF message data.

# NFCNDEFStatusNotSupported (Objective-C)

**Framework:** Core NFC  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A status indicating that that tag isn’t an NDEF-formatted tag.

## Declaration

```objectivec
NFCNDEFStatusNotSupported
```

<a id="Discussion"></a>

## Discussion

You cannot perform read and write operations on the tag.

## See Also

### Statuses

- [NFCNDEFStatusReadOnly](readonly.md): A status indicating that the tag supports reading NDEF message data only.
- [NFCNDEFStatusReadWrite](readwrite.md): A status indicating that the tag supports reading and writing NDEF message data.
