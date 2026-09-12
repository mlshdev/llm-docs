> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neproviderstopreason](https://developer.apple.com/documentation/networkextension/neproviderstopreason)

# NEProviderStopReason (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Reasons why the provider extension was stopped.

## Declaration

```swift
enum NEProviderStopReason
```

<a id="overview"></a>

## Overview

`NEProviderStopReasonUserLogout` and `NEProviderStopReasonUserSwitch` are available only in macOS.

## Topics

### Stop Reasons

- [NEProviderStopReason.none](neproviderstopreason/none.md): No specific reason.
- [NEProviderStopReason.userInitiated](neproviderstopreason/userinitiated.md): The user stopped the provider extension.
- [NEProviderStopReason.providerFailed](neproviderstopreason/providerfailed.md): The provider failed to function correctly.
- [NEProviderStopReason.noNetworkAvailable](neproviderstopreason/nonetworkavailable.md): No network connectivity is currently available.
- [NEProviderStopReason.unrecoverableNetworkChange](neproviderstopreason/unrecoverablenetworkchange.md): The device’s network connectivity changed.
- [NEProviderStopReason.providerDisabled](neproviderstopreason/providerdisabled.md): The provider was disabled.
- [NEProviderStopReason.authenticationCanceled](neproviderstopreason/authenticationcanceled.md): The authentication process was canceled.
- [NEProviderStopReason.configurationFailed](neproviderstopreason/configurationfailed.md): The configuration is invalid.
- [NEProviderStopReason.idleTimeout](neproviderstopreason/idletimeout.md): The session timed out.
- [NEProviderStopReason.configurationDisabled](neproviderstopreason/configurationdisabled.md): The configuration was disabled.
- [NEProviderStopReason.configurationRemoved](neproviderstopreason/configurationremoved.md): The configuration was removed.
- [NEProviderStopReason.superceded](neproviderstopreason/superceded.md): The configuration was superceded by a higher-priority configuration.
- [NEProviderStopReason.userLogout](neproviderstopreason/userlogout.md): The user logged out.
- [NEProviderStopReason.userSwitch](neproviderstopreason/userswitch.md): The current console user changed.
- [NEProviderStopReason.appUpdate](neproviderstopreason/appupdate.md)
- [NEProviderStopReason.connectionFailed](neproviderstopreason/connectionfailed.md): The connection failed.
- [NEProviderStopReason.sleep](neproviderstopreason/sleep.md): A stop reason indicating the configuration enabled disconnect on sleep and the device went to sleep.
- [NEProviderStopReason.internalError](neproviderstopreason/internalerror.md): The provider encountered an internal error.

### Initializers

- [init(rawValue:)](neproviderstopreason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NEProviderStopReason (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Reasons why the provider extension was stopped.

## Declaration

```objectivec
enum NEProviderStopReason : NSInteger;
```

<a id="overview"></a>

## Overview

`NEProviderStopReasonUserLogout` and `NEProviderStopReasonUserSwitch` are available only in macOS.

## Topics

### Stop Reasons

- [NEProviderStopReasonNone](neproviderstopreason/none.md): No specific reason.
- [NEProviderStopReasonUserInitiated](neproviderstopreason/userinitiated.md): The user stopped the provider extension.
- [NEProviderStopReasonProviderFailed](neproviderstopreason/providerfailed.md): The provider failed to function correctly.
- [NEProviderStopReasonNoNetworkAvailable](neproviderstopreason/nonetworkavailable.md): No network connectivity is currently available.
- [NEProviderStopReasonUnrecoverableNetworkChange](neproviderstopreason/unrecoverablenetworkchange.md): The device’s network connectivity changed.
- [NEProviderStopReasonProviderDisabled](neproviderstopreason/providerdisabled.md): The provider was disabled.
- [NEProviderStopReasonAuthenticationCanceled](neproviderstopreason/authenticationcanceled.md): The authentication process was canceled.
- [NEProviderStopReasonConfigurationFailed](neproviderstopreason/configurationfailed.md): The configuration is invalid.
- [NEProviderStopReasonIdleTimeout](neproviderstopreason/idletimeout.md): The session timed out.
- [NEProviderStopReasonConfigurationDisabled](neproviderstopreason/configurationdisabled.md): The configuration was disabled.
- [NEProviderStopReasonConfigurationRemoved](neproviderstopreason/configurationremoved.md): The configuration was removed.
- [NEProviderStopReasonSuperceded](neproviderstopreason/superceded.md): The configuration was superceded by a higher-priority configuration.
- [NEProviderStopReasonUserLogout](neproviderstopreason/userlogout.md): The user logged out.
- [NEProviderStopReasonUserSwitch](neproviderstopreason/userswitch.md): The current console user changed.
- [NEProviderStopReasonAppUpdate](neproviderstopreason/appupdate.md)
- [NEProviderStopReasonConnectionFailed](neproviderstopreason/connectionfailed.md): The connection failed.
- [NEProviderStopReasonSleep](neproviderstopreason/sleep.md): A stop reason indicating the configuration enabled disconnect on sleep and the device went to sleep.
- [NEProviderStopReasonInternalError](neproviderstopreason/internalerror.md): The provider encountered an internal error.
