> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nehotspotauthenticationprovider/start()

# start()

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Tells the extension to start the authentication provider, in response to a request from the framework.

## Declaration

```swift
func start() async -> Bool
```

<a id="return-value"></a>

## Return Value

`true` if the provider started successfully; `false`, otherwise.

<a id="discussion"></a>

## Discussion

Use this method to prepare your provider to handle future calls to [handleCommand(\_:)](handlecommand%28__%29.md).

## See Also

### Managing provider life cycle

- [stop(reason:)](stop%28reason_%29.md): Tells the exension to stop the authentication provider, in response to a request from the framework.
- [NEProviderStopReason](../neproviderstopreason.md): Reasons why the provider extension was stopped.
