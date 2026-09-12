> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/batchinstallconfirmationresult](https://developer.apple.com/documentation/marketplacekit/batchinstallconfirmationresult)

# BatchInstallConfirmationResult

**Framework:** MarketplaceKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Options that indicate whether the installation of multiple apps proceeds when a person interacts with an app installation button.

## Declaration

```swift
enum BatchInstallConfirmationResult
```

<a id="overview"></a>

## Overview

The [BatchInstallConfiguration](batchinstallconfiguration.md) initializer [init(installs:confirmInstall:)](batchinstallconfiguration/init%28installs_confirminstall_%29.md)  takes a closure as a parameter that returns a case of this enumeration.

Your marketplace app supplies code in the closure that facilitates any prerequisites a person needs to satisfy to download the apps, such as completing a payment flow. The result of the prerequisites flow helps you determine the case to return, ([BatchInstallConfirmationResult.cancel](batchinstallconfirmationresult/cancel.md) or [BatchInstallConfirmationResult.confirmed(installVerificationTokens:authenticationContext:)](batchinstallconfirmationresult/confirmed%28installverificationtokens_authenticationcontext_%29.md).

## Topics

### Enumeration Cases

- [BatchInstallConfirmationResult.cancel](batchinstallconfirmationresult/cancel.md)
- [BatchInstallConfirmationResult.confirmed(installVerificationTokens:authenticationContext:)](batchinstallconfirmationresult/confirmed%28installverificationtokens_authenticationcontext_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### App distribution UI

- [ActionButton](actionbutton.md): A user-interface element that enables a person to install, update, or launch apps by tapping the element.
- [InstallMetadata](installmetadata.md): Information about a specific app to install or update and the person who initiates it.
- [InstallConfiguration](installconfiguration.md): Information that describes a requested app installation or app update.
- [InstallConfirmationResult](installconfirmationresult.md): Options that indicate whether the installation of an app proceeds when a person interacts with an app installation button.
- [BatchInstallConfiguration](batchinstallconfiguration.md): Information that describes multiple app installations or app updates.
- [MarketplaceDisplayOption](marketplacedisplayoption.md): The kinds of deep links that the operating system makes into your marketplace.
- [MarketplaceSceneDelegate](marketplacescenedelegate.md): A delegate that handles deep link requests into your marketplace app.
