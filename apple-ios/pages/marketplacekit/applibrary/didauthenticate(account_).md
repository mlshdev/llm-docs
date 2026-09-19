> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/marketplacekit/applibrary/didauthenticate(account:)

# didAuthenticate(account:)

**Framework:** MarketplaceKit  
**Kind:** Instance Method  
**Availability:** iOS 17.5+ · iPadOS 17.5+

Instructs the system to reinstall an app after a required reuthorization completes.

## Declaration

```swift
nonisolated final func didAuthenticate(account: String) async
```

## Parameters

- `account`: The account ID or username for the person. The marketplace server provides this value in the [MarketplaceKitURIScheme](../marketplacekiturischeme.md) installation request.

## Mentioned In

- [Reauthenticating a person to manage apps](../reauthenticating-a-person-to-manage-apps.md)

<a id="discussion"></a>

## Discussion

The marketplace or other web-distributed app calls this method after reauthenticating a person when the access token expires. For more information, see [Reauthenticating a person to manage apps](../reauthenticating-a-person-to-manage-apps.md).

## See Also

### Accessing app library and account authorization information

- [current](current.md): A global accessor for the device’s app library instance.
