> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialtransaction](https://developer.apple.com/documentation/secureelementcredential/credentialtransaction)

# CredentialTransaction

**Framework:** SecureElementCredential  
**Kind:** Class  
**Availability:** iOS 18.1+ · iPadOS 18.1+

A transaction object for performing wired and contactless operations in SwiftUI views.

## Declaration

```swift
class CredentialTransaction
```

## Mentioned In

- [Accessing and using secure element credentials](accessing-and-using-secure-element-credentials.md)

<a id="overview"></a>

## Overview

Use the [transactionTask(\_:action:)](https://developer.apple.com/documentation/swiftui/view/transactiontask%28_:action:%29) view modifier to create a task for working with a credential. The `action` closure receives a `CredentialTransaction` instance that it can perform actions on.

You can call the methods of `CredentialTransaction` and [CredentialTransaction.Configuration](credentialtransaction/configuration.md) from both apps and app extensions.

> **Warning**

> Don’t import UIKit in any file that imports this type. This causes ambiguity resolving the [SecureElementCredential](../secureelementcredential.md) framework’s SwiftUI and UIKit symbols.

## Topics

### Configuring transactions

- [CredentialTransaction.Configuration](credentialtransaction/configuration.md): An object that provides configuration information for a transaction that the client intends to perform.

### Performing transactions

- [performTransaction(using:options:)](credentialtransaction/performtransaction%28using_options_%29.md): Prompts the user for authorization and then activates a credential for card emulation.
- [performTransactionInWiredMode(using:instanceAID:)](credentialtransaction/performtransactioninwiredmode%28using_instanceaid_%29.md): Enters wired mode to perform a transaction.
- [performCardEmulationTransactionWithCurrentCredential(options:)](credentialtransaction/performcardemulationtransactionwithcurrentcredential%28options_%29.md): Activate the current credential to perform a transaction in card emulation mode.

### Supporting types

- [Credential](credential.md)
- [CardEmulationOptions](cardemulationoptions.md)
