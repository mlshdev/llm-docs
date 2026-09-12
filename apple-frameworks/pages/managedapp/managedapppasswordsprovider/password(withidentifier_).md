> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedapp/managedapppasswordsprovider/password(withidentifier:)](https://developer.apple.com/documentation/managedapp/managedapppasswordsprovider/password(withidentifier:))

# password(withIdentifier:)

**Framework:** ManagedApp  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · macOS 27.0+ · visionOS 2.4+

Provides a password by its identifier.

## Declaration

```swift
func password(withIdentifier identifier: String) async throws(ManagedAppError) -> String
```

## Parameters

- `identifier`: The identifier of the requested password. This function throws [ManagedAppError.invalidIdentifier](../managedapperror/invalididentifier.md) if the value you supply isn’t currently in [identifiers](../managedappidentitiesprovider/identifiers.md).

<a id="return-value"></a>

## Return Value

The requested password.

## Mentioned In

- [Accessing provisioned secrets with identifiers](../accessing-provisioned-secrets-with-identifiers.md)

<a id="discussion"></a>

## Discussion

The MDM server can update the password at any time. After that, [identifiers](../managedappidentitiesprovider/identifiers.md) yields a new array of identifiers. Call this method again to obtain the updated password.

The MDM server can change the available passwords at any time. When that happens, the list of valid identifiers updates accordingly. For example, the list of valid identifiers might change between the time that the app accesses [identifiers](../managedappidentitiesprovider/identifiers.md) and then calls this method passing in one of its elements. So, the app needs to handle the case that this method throws [ManagedAppError.invalidIdentifier](../managedapperror/invalididentifier.md).

> **Important**

> Avoid storing the password and instead, call this method whenever the app needs the password. For security reasons, avoid logging or displaying the password.

> **Throws**

> [ManagedAppError.invalidIdentifier](../managedapperror/invalididentifier.md) if no password exists with the specified identifier.
