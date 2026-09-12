> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit](https://developer.apple.com/documentation/marketplacekit)

# MarketplaceKit

**Framework:** MarketplaceKit  
**Kind:** Framework  
**Availability:** iOS 17.4+ · iPadOS 18.0+

Create an alternative app marketplace, distribute your app on an alternative app marketplace, or distribute your app from your website.

## Mentioned In

- [Enabling alternative distribution app installation in a browser](marketplacekit/enabling-alternative-distribution-app-installation-in-a-browser.md)
- [Installing apps from an alternative marketplace](marketplacekit/installing-apps-from-an-alternative-marketplace.md)
- [Installing your app from your website](marketplacekit/installing-your-app-from-your-website.md)
- [Creating an alternative app marketplace](marketplacekit/creating-an-alternative-app-marketplace.md)
- [Reauthenticating a person to manage apps](marketplacekit/reauthenticating-a-person-to-manage-apps.md)

<a id="Overview"></a>

## Overview

An *alternative app marketplace* is an app from which someone can install apps from other developers, as an alternative to the App Store. MarketplaceKit enables alternative app marketplaces to install the apps they distribute to peoples’ devices. The framework also supports features that compose a quality browsing and installation experience, such as Spotlight Search and App Thinning. With the framework, you can manage existing app installations, convey download progress, update app licensing, and customize app search behavior.

In addition to alternative app marketplaces, this framework also serves:

- Web browsers, specifically by requesting app installation on a webpage.
- Apps that install from an alternative app marketplace or webpage, by determining the installation source at runtime. This allows an app to branch its functionality depending on the installation source.

![Three diagrams that describe the different use cases for MarketplaceKit. From left to right: installing an app from a webpage, installing an app from a alternative app marketplace, and determining an app’s installation source at runtime.](https://developer.apple.com/images/com.apple.MarketplaceKit/marketplacekit-hero@2x.png)

> **Important**

> To develop an alternative app marketplace, request approval to use the marketplace entitlement. The request process varies by geographic region. For more information and to request the entitlement, see [Participating in alternative distribution for specific regions](marketplacekit/participating-in-alternative-distribution-for-specific-regions.md).

## Topics

### Essentials

- [Creating an alternative app marketplace](marketplacekit/creating-an-alternative-app-marketplace.md): Enable the distribution of other third-party apps from within your marketplace app.
- [Distributing your app from your website](marketplacekit/distributing-your-app-from-your-website.md): Configure your app and website to enable people to install your app on their devices from your website.
- [Distributing your app on an alternative app marketplace](marketplacekit/distributing-your-app-on-an-alternative-marketplace.md): Design your app for alternative distribution from an alternative app marketplace.

### Web services

- [Processing alternative app marketplace notifications](marketplacekit/processing-alternative-marketplace-notifications.md): Manage the addition and removal of apps available on your alternative marketplace.
- [Ingesting an alternative distribution package](marketplacekit/ingesting-an-alternative-distribution-package.md): Process an available app version from App Store Connect and store it for download from your server.
- [Installing your app from your website](marketplacekit/installing-your-app-from-your-website.md): Manage the installation of an app that you develop and distribute through your website.
- [Installing apps from an alternative marketplace](marketplacekit/installing-apps-from-an-alternative-marketplace.md): Manage the installation of apps that developers distribute from your marketplace app.
- [Supplying an install verification token](marketplacekit/supplying-an-install-verification-token.md): Support the installation of alternative distribution apps by creating signed JSON web tokens.

### Authorization

- [Reauthenticating a person to manage apps](marketplacekit/reauthenticating-a-person-to-manage-apps.md): Renew your app’s authorization when an app needs updating or when a device restores from backup.
- [Providing age-rating appropriate content](marketplacekit/providing-age-rating-appropriate-content.md): Check for age-rating based content restrictions and enable people to request approval for apps with a rating beyond the maximum allowed for the device.
- [com.apple.developer.marketplace.app-installation](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.marketplace.app-installation): An entitlement that enables an app to vend other apps as an alternative app marketplace.
- [com.apple.developer.browser.app-installation](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.browser.app-installation): An entitlement that enables a browser to install alternative distribution apps from a website.
- [App License Delivery SDK](https://developer.apple.com/documentation/applicensedeliverysdk): Secure the installation of alternative distribution apps on iOS or iPadOS devices by vending licenses from your web server.

### Browser support

- [Enabling alternative distribution app installation in a browser](marketplacekit/enabling-alternative-distribution-app-installation-in-a-browser.md): Add support for browser apps to install alternative distribution apps from websites.

### App management

- [AppLibrary](marketplacekit/applibrary.md): A class that represents a catalog of all installed apps, and offers various services for the apps that your marketplace distributes.
- [AppVersion](marketplacekit/appversion.md): Information that describes an app, including its identifier and version number.
- [AutomaticUpdate](marketplacekit/automaticupdate.md): Information that describes an app that’s available for update, including a download URL.
- [InstallRequirements](marketplacekit/installrequirements.md): An app’s installation criteria for a device.
- [AppleItemID](marketplacekit/appleitemid.md): An identifier that represents an app.
- [AppleVersionID](marketplacekit/appleversionid.md): An identifier that represents a single app version.
- [MarketplaceKitURIScheme](marketplacekit/marketplacekiturischeme.md): A URI scheme that defines an alternative distribution app installation link.
- [RequestAppDeletionAction](marketplacekit/requestappdeletionaction.md): A SwiftUI environment action that requests the deletion of an app.

### Background services

- [MarketplaceAppExtension](marketplacekit/marketplaceappextension.md): An extension that facilitates authentication, installation, and launch of a marketplace with deep links.

### App distribution UI

- [ActionButton](marketplacekit/actionbutton.md): A user-interface element that enables a person to install, update, or launch apps by tapping the element.
- [InstallMetadata](marketplacekit/installmetadata.md): Information about a specific app to install or update and the person who initiates it.
- [InstallConfiguration](marketplacekit/installconfiguration.md): Information that describes a requested app installation or app update.
- [InstallConfirmationResult](marketplacekit/installconfirmationresult.md): Options that indicate whether the installation of an app proceeds when a person interacts with an app installation button.
- [BatchInstallConfiguration](marketplacekit/batchinstallconfiguration.md): Information that describes multiple app installations or app updates.
- [BatchInstallConfirmationResult](marketplacekit/batchinstallconfirmationresult.md): Options that indicate whether the installation of multiple apps proceeds when a person interacts with an app installation button.
- [MarketplaceDisplayOption](marketplacekit/marketplacedisplayoption.md): The kinds of deep links that the operating system makes into your marketplace.
- [MarketplaceSceneDelegate](marketplacekit/marketplacescenedelegate.md): A delegate that handles deep link requests into your marketplace app.

### Installation sources

- [AppDistributor](marketplacekit/appdistributor.md): Options that describe the marketplace from which the app installs.

### Token and transaction reporting

- [Reporting transactions for the Core Technology Commission](marketplacekit/reporting-transactions-for-core-technology-commission.md): Track any eligible purchases that you offer a person that relate to your app and report them to Apple using a token.
- [TransactionReporting](marketplacekit/transactionreporting.md): An enumeration that provides token services for transaction reporting.

### Errors

- [MarketplaceKitError](marketplacekit/marketplacekiterror.md): Errors that the MarketplaceKit framework can throw.

### Region support

- [Participating in alternative distribution for specific regions](marketplacekit/participating-in-alternative-distribution-for-specific-regions.md): Develop your app for alternative distribution according to the varying features that specific geographic regions support.

### Deprecations

- [MarketplaceExtension](marketplacekit/marketplaceextension.md): Deprecated.
- [MarketplaceExtensionConfiguration](marketplacekit/marketplaceextensionconfiguration.md): Deprecated.
