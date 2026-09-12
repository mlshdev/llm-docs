> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/marketplacescenedelegate](https://developer.apple.com/documentation/marketplacekit/marketplacescenedelegate)

# MarketplaceSceneDelegate

**Framework:** MarketplaceKit  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A delegate that handles deep link requests into your marketplace app.

## Declaration

```swift
protocol MarketplaceSceneDelegate
```

<a id="overview"></a>

## Overview

The operating system calls your app’s scene delegate to launch your app to a specific screen, such as a search result or specific app page. The display option argument determines the specific screen.

## Topics

### Instance Methods

- [scene(\_:askedToDisplay:)](marketplacescenedelegate/scene%28__askedtodisplay_%29.md)

## See Also

### App distribution UI

- [ActionButton](actionbutton.md): A user-interface element that enables a person to install, update, or launch apps by tapping the element.
- [InstallMetadata](installmetadata.md): Information about a specific app to install or update and the person who initiates it.
- [InstallConfiguration](installconfiguration.md): Information that describes a requested app installation or app update.
- [InstallConfirmationResult](installconfirmationresult.md): Options that indicate whether the installation of an app proceeds when a person interacts with an app installation button.
- [BatchInstallConfiguration](batchinstallconfiguration.md): Information that describes multiple app installations or app updates.
- [BatchInstallConfirmationResult](batchinstallconfirmationresult.md): Options that indicate whether the installation of multiple apps proceeds when a person interacts with an app installation button.
- [MarketplaceDisplayOption](marketplacedisplayoption.md): The kinds of deep links that the operating system makes into your marketplace.
