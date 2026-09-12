> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/credential/instanceinfo/securitydomainkeyinfo](https://developer.apple.com/documentation/secureelementcredential/credentialsession/credential/instanceinfo/securitydomainkeyinfo)

# securityDomainKeyInfo

**Framework:** SecureElementCredential  
**Kind:** Instance Property  
**Availability:** iOS 18.1+ · iPadOS 18.1+

A data blob which contains the security domain On-Board Generated Key (OBGK).

## Declaration

```swift
let securityDomainKeyInfo: Data
```

<a id="discussion"></a>

## Discussion

This data has the information required to form a Secure Channel Protocol 3 (SCP03) channel between the user and the security domain.

## See Also

### Creating a secure channel

- [securityDomainAID](securitydomainaid.md): The unique identifier of the security domain you use to install the instance.
