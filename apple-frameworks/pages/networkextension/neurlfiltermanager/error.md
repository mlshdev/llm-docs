> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltermanager/error](https://developer.apple.com/documentation/networkextension/neurlfiltermanager/error)

# NEURLFilterManager.Error

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

An enumeration of URL filter error codes

## Declaration

```swift
enum Error
```

## Topics

### Configuration errors

- [NEURLFilterManager.Error.configurationUnchanged](error/configurationunchanged.md): The filter configuration is unchanged.
- [NEURLFilterManager.Error.configurationInvalid](error/configurationinvalid.md): The filter configuration is invalid.
- [NEURLFilterManager.Error.configurationDisabled](error/configurationdisabled.md): The filter configuration is disabled.
- [NEURLFilterManager.Error.configurationStale](error/configurationstale.md): The system needs to load the filter configuration.
- [NEURLFilterManager.Error.configurationCannotBeRemoved](error/configurationcannotberemoved.md): The system can’t remove the filter configuration.
- [NEURLFilterManager.Error.configurationPermissionDenied](error/configurationpermissiondenied.md): Operation permission denied.
- [NEURLFilterManager.Error.configurationInternalError](error/configurationinternalerror.md): An internal configuration error occurred.
- [NEURLFilterManager.Error.configurationNotLoaded](error/configurationnotloaded.md): The configuration hasn’t been loaded.

### Server errors

- [NEURLFilterManager.Error.serverSetupIncomplete](error/serversetupincomplete.md): PIR Server or/and OHTTP Private Relay setup incomplete.

### Extension errors

- [NEURLFilterManager.Error.extensionCancelled](error/extensioncancelled.md): The app extension cancelled the feature bring up.
- [NEURLFilterManager.Error.extensionNotFound](error/extensionnotfound.md): The system can’t find the app extension.
- [NEURLFilterManager.Error.extensionFailedToLoad](error/extensionfailedtoload.md): The app extension failed to load.

### Other errors

- [NEURLFilterManager.Error.internalError](error/internalerror.md): An internal error occurred.
- [NEURLFilterManager.Error.unknown](error/unknown.md): The system encountered an unknown error.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](../../foundation/localizederror.md)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Handling errors

- [lastDisconnectError](lastdisconnecterror.md): The most recent error that caused the URL Filter to stop.
