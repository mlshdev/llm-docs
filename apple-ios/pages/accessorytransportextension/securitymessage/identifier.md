> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/securitymessage/identifier

# identifier

**Framework:** Accessory Transport Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

An optional Bluetooth identifier that the system uses to derive HPKE keys.

## Declaration

```swift
let identifier: String?
```

<a id="discussion"></a>

## Discussion

The system provides this identifier when delivering [SecurityMessage.KeyType.encapsulatedKey](keytype-swift.enum/encapsulatedkey.md) to your extension. Forward it to your accessory for key derivation.
