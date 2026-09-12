> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/marketplacedisplayoption](https://developer.apple.com/documentation/marketplacekit/marketplacedisplayoption)

# MarketplaceDisplayOption

**Framework:** MarketplaceKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+

The kinds of deep links that the operating system makes into your marketplace.

## Declaration

```swift
enum MarketplaceDisplayOption
```

<a id="overview"></a>

## Overview

The [MarketplaceSceneDelegate](marketplacescenedelegate.md) function [scene(\_:askedToDisplay:)](marketplacescenedelegate/scene%28__askedtodisplay_%29.md) accepts a case of this enumeration as a parameter.

## Topics

### Enumeration Cases

- [MarketplaceDisplayOption.authentication(account:)](marketplacedisplayoption/authentication%28account_%29.md)
- [MarketplaceDisplayOption.productPage(appleItemID:appleVersionID:)](marketplacedisplayoption/productpage%28appleitemid_appleversionid_%29.md)
- [MarketplaceDisplayOption.searchResults(query:)](marketplacedisplayoption/searchresults%28query_%29.md)

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)

## See Also

### App distribution UI

- [ActionButton](actionbutton.md): A user-interface element that enables a person to install, update, or launch apps by tapping the element.
- [InstallMetadata](installmetadata.md): Information about a specific app to install or update and the person who initiates it.
- [InstallConfiguration](installconfiguration.md): Information that describes a requested app installation or app update.
- [InstallConfirmationResult](installconfirmationresult.md): Options that indicate whether the installation of an app proceeds when a person interacts with an app installation button.
- [BatchInstallConfiguration](batchinstallconfiguration.md): Information that describes multiple app installations or app updates.
- [BatchInstallConfirmationResult](batchinstallconfirmationresult.md): Options that indicate whether the installation of multiple apps proceeds when a person interacts with an app installation button.
- [MarketplaceSceneDelegate](marketplacescenedelegate.md): A delegate that handles deep link requests into your marketplace app.
