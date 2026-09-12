> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/configuration()](https://developer.apple.com/documentation/secureelementcredential/credentialsession/configuration())

# configuration()

**Framework:** SecureElementCredential  
**Kind:** Instance Method  
**Availability:** iOS 18.1+ · iPadOS 18.1+

Retrieves a transaction configuration related to this session.

## Declaration

```swift
nonisolated func configuration() async throws -> CredentialTransaction.Configuration
```

<a id="discussion"></a>

## Discussion

This method provides a way to get the session configuration after performing a transaction task with a SwiftUI view.

Clients should call [invalidate()](../credentialtransaction/configuration/invalidate%28%29.md) on this configuration after completing each transaction.

> **Warning**

> Don’t import UIKit in any file that imports this type. This causes ambiguity resolving the [SecureElementCredential](../../secureelementcredential.md) framework’s SwiftUI and UIKit symbols.

## See Also

### Using SwiftUI

- [CredentialTransaction.Configuration](../credentialtransaction/configuration.md): An object that provides configuration information for a transaction that the client intends to perform.
