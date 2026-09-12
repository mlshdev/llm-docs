> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedapp/managedappcertificatesprovider](https://developer.apple.com/documentation/managedapp/managedappcertificatesprovider)

# ManagedAppCertificatesProvider

**Framework:** ManagedApp  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · macOS 27.0+ · visionOS 2.4+

A class that provides certificates that an MDM admin provisions for a managed app or extension.

## Declaration

```swift
class ManagedAppCertificatesProvider
```

## Mentioned In

- [Accessing provisioned secrets with identifiers](accessing-provisioned-secrets-with-identifiers.md)

<a id="overview"></a>

## Overview

Create an instance of this class when your app needs to access certificates that the MDM admin provisions for your app from their MDM server.

## Topics

### Initializing a certificates provider

- [init()](managedappcertificatesprovider/init%28%29.md): Initializes a managed app certificates provider.

### Identifying cerificates

- [identifiers](managedappcertificatesprovider/identifiers.md): An asynchronous sequence of arrays of certificate identifiers provided by the MDM server.

### Accessing certificates

- [certificate(withIdentifier:)](managedappcertificatesprovider/certificate%28withidentifier_%29.md): Provides a certificate by its identifier.

## See Also

### Secrets and identifiers

- [Accessing provisioned secrets with identifiers](accessing-provisioned-secrets-with-identifiers.md): Specify the secrets your app requires for device management features, receive secrets from MDM servers and use secrets in your app.
- [ManagedAppIdentitiesProvider](managedappidentitiesprovider.md): A class that provides identities that an MDM admin provisions for a managed app or extension.
- [ManagedAppPasswordsProvider](managedapppasswordsprovider.md): A class that provides passwords that an MDM admin provisions for a managed app or extension.
