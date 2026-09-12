> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/credential/instanceinfo/securitydomainaid](https://developer.apple.com/documentation/secureelementcredential/credentialsession/credential/instanceinfo/securitydomainaid)

# securityDomainAID

**Framework:** SecureElementCredential  
**Kind:** Instance Property  
**Availability:** iOS 18.1+ · iPadOS 18.1+

The unique identifier of the security domain you use to install the instance.

## Declaration

```swift
let securityDomainAID: Data
```

<a id="discussion"></a>

## Discussion

Use this identifier when selecting the security domain to perform data transceive with, such as forming a Secure Channel Protocol 3 (SCP03) channel.

## See Also

### Creating a secure channel

- [securityDomainKeyInfo](securitydomainkeyinfo.md): A data blob which contains the security domain On-Board Generated Key (OBGK).
