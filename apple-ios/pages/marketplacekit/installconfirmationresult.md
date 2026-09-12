> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/installconfirmationresult](https://developer.apple.com/documentation/marketplacekit/installconfirmationresult)

# InstallConfirmationResult

**Framework:** MarketplaceKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Options that indicate whether the installation of an app proceeds when a person interacts with an app installation button.

## Declaration

```swift
enum InstallConfirmationResult
```

<a id="overview"></a>

## Overview

The [InstallConfiguration](installconfiguration.md) initializer [init(install:confirmInstall:)](installconfiguration/init%28install_confirminstall_%29.md) takes a closure as a parameter that returns a case of this enumeration.

Your marketplace app supplies code in the closure that facilitates any prerequisites a person needs to satisfy to download the app, such as completing a payment flow. The result of the prerequisites flow helps you determine the case to return, ([InstallConfirmationResult.cancel](installconfirmationresult/cancel.md) or [InstallConfirmationResult.confirmed(installVerificationToken:authenticationContext:)](installconfirmationresult/confirmed%28installverificationtoken_authenticationcontext_%29.md).

## Topics

### Enumeration Cases

- [InstallConfirmationResult.cancel](installconfirmationresult/cancel.md)
- [InstallConfirmationResult.confirmed(installVerificationToken:authenticationContext:)](installconfirmationresult/confirmed%28installverificationtoken_authenticationcontext_%29.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### App distribution UI

- [ActionButton](actionbutton.md): A user-interface element that enables a person to install, update, or launch apps by tapping the element.
- [InstallMetadata](installmetadata.md): Information about a specific app to install or update and the person who initiates it.
- [InstallConfiguration](installconfiguration.md): Information that describes a requested app installation or app update.
- [BatchInstallConfiguration](batchinstallconfiguration.md): Information that describes multiple app installations or app updates.
- [BatchInstallConfirmationResult](batchinstallconfirmationresult.md): Options that indicate whether the installation of multiple apps proceeds when a person interacts with an app installation button.
- [MarketplaceDisplayOption](marketplacedisplayoption.md): The kinds of deep links that the operating system makes into your marketplace.
- [MarketplaceSceneDelegate](marketplacescenedelegate.md): A delegate that handles deep link requests into your marketplace app.
