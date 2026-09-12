> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorytransportextension/securitymessage/ciphersuite-swift.enum/version/version1](https://developer.apple.com/documentation/accessorytransportextension/securitymessage/ciphersuite-swift.enum/version/version1)

# SecurityMessage.CipherSuite.Version.version1

**Framework:** Accessory Transport Extension  
**Kind:** Case  
**Availability:** iOS 26.5+

Version 1 of the cipher suite protocol.

## Declaration

```swift
case version1
```

<a id="discussion"></a>

## Discussion

Use this value when creating [SecurityMessage](../../../securitymessage.md) instances. When deriving HPKE keys on your accessory, format the protocol information as: `{cipherSuite}-version1-{identifier}`.
