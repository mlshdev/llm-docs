> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/batchinstallconfiguration](https://developer.apple.com/documentation/marketplacekit/batchinstallconfiguration)

# BatchInstallConfiguration

**Framework:** MarketplaceKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Information that describes multiple app installations or app updates.

## Declaration

```swift
struct BatchInstallConfiguration
```

<a id="overview"></a>

## Overview

The [ActionButton.Action.batchInstall(\_:)](actionbutton/action-swift.enum/batchinstall%28__%29.md) enumeration case takes an instance of this structure as a parameter.

## Topics

### Initializers

- [init(installs:confirmInstall:)](batchinstallconfiguration/init%28installs_confirminstall_%29.md)

### Instance Properties

- [confirmInstall](batchinstallconfiguration/confirminstall.md)
- [installs](batchinstallconfiguration/installs.md)

## See Also

### App distribution UI

- [ActionButton](actionbutton.md): A user-interface element that enables a person to install, update, or launch apps by tapping the element.
- [InstallMetadata](installmetadata.md): Information about a specific app to install or update and the person who initiates it.
- [InstallConfiguration](installconfiguration.md): Information that describes a requested app installation or app update.
- [InstallConfirmationResult](installconfirmationresult.md): Options that indicate whether the installation of an app proceeds when a person interacts with an app installation button.
- [BatchInstallConfirmationResult](batchinstallconfirmationresult.md): Options that indicate whether the installation of multiple apps proceeds when a person interacts with an app installation button.
- [MarketplaceDisplayOption](marketplacedisplayoption.md): The kinds of deep links that the operating system makes into your marketplace.
- [MarketplaceSceneDelegate](marketplacescenedelegate.md): A delegate that handles deep link requests into your marketplace app.
