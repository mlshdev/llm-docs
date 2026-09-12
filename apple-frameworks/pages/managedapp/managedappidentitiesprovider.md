> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedapp/managedappidentitiesprovider](https://developer.apple.com/documentation/managedapp/managedappidentitiesprovider)

# ManagedAppIdentitiesProvider

**Framework:** ManagedApp  
**Kind:** Class  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · macOS 27.0+ · visionOS 2.4+

A class that provides identities that an MDM admin provisions for a managed app or extension.

## Declaration

```swift
class ManagedAppIdentitiesProvider
```

## Mentioned In

- [Accessing provisioned secrets with identifiers](accessing-provisioned-secrets-with-identifiers.md)

<a id="overview"></a>

## Overview

Create an instance of this class when your app needs to access identities that the MDM admin provisions for your app from their MDM server.

## Topics

### Initializing an identities provider

- [init()](managedappidentitiesprovider/init%28%29.md): Initializes an identities provider.

### Identifying identities

- [identifiers](managedappidentitiesprovider/identifiers.md): An asynchronous sequence of arrays of identity identifiers provided by the MDM server.

### Accessing identities

- [identity(withIdentifier:)](managedappidentitiesprovider/identity%28withidentifier_%29.md): Provides an identity by its identifier.

## See Also

### Secrets and identifiers

- [Accessing provisioned secrets with identifiers](accessing-provisioned-secrets-with-identifiers.md): Specify the secrets your app requires for device management features, receive secrets from MDM servers and use secrets in your app.
- [ManagedAppCertificatesProvider](managedappcertificatesprovider.md): A class that provides certificates that an MDM admin provisions for a managed app or extension.
- [ManagedAppPasswordsProvider](managedapppasswordsprovider.md): A class that provides passwords that an MDM admin provisions for a managed app or extension.
