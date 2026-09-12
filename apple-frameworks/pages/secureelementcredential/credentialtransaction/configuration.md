> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialtransaction/configuration](https://developer.apple.com/documentation/secureelementcredential/credentialtransaction/configuration)

# CredentialTransaction.Configuration

**Framework:** SecureElementCredential  
**Kind:** Class  
**Availability:** iOS 18.1+ · iPadOS 18.1+

An object that provides configuration information for a transaction that the client intends to perform.

## Declaration

```swift
class Configuration
```

## Mentioned In

- [Accessing and using secure element credentials](../accessing-and-using-secure-element-credentials.md)

<a id="overview"></a>

## Overview

In SwiftUI apps, you fetch a `Configuration` for use in calling the [transactionTask(\_:action:)](https://developer.apple.com/documentation/swiftui/view/transactiontask%28_:action:%29) view modifier to perform wired transactions and card emulation. Inside the task closure, call [invalidate()](configuration/invalidate%28%29.md) on the configuration when you finish your transaction work.

## Topics

### Invalidating a configuration

- [invalidate()](configuration/invalidate%28%29.md): Invalidates the configuration and transitions the underlying session state to management.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Using SwiftUI

- [configuration()](../credentialsession/configuration%28%29.md): Retrieves a transaction configuration related to this session.
