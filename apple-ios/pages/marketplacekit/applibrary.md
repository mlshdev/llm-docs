> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/applibrary](https://developer.apple.com/documentation/marketplacekit/applibrary)

# AppLibrary

**Framework:** MarketplaceKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A class that represents a catalog of all installed apps, and offers various services for the apps that your marketplace distributes.

## Declaration

```swift
@MainActor final class AppLibrary
```

## Mentioned In

- [Installing apps from an alternative marketplace](installing-apps-from-an-alternative-marketplace.md)
- [Providing age-rating appropriate content](providing-age-rating-appropriate-content.md)
- [Supplying an install verification token](supplying-an-install-verification-token.md)

<a id="overview"></a>

## Overview

Alternative app marketplaces call methods of this class to retrieve the set of currently installed apps, to request the installation of available apps, or to update the license for a specific app. Browser apps that use an alternative browser engine make a call to this class to install alternative app marketplaces from a webpage. You can also customize Spotlight search results and manage age-rating exception requests to install apps with an age rating beyond the maximum allowed for the device.

<a id="Observe-runtime-changes"></a>

## Observe runtime changes

The class is observable (through [SwiftUI](https://developer.apple.com/documentation/swiftui) or the [Observation](https://developer.apple.com/documentation/observation) framework), so you can provide reactive updates when finishing, installing, updating, or loading (see [isLoading](applibrary/isloading.md)).

> **Important**

> iOS ignores calls to this class for apps that lack one of the required entitlements: [com.apple.developer.marketplace.app-installation](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.marketplace.app-installation), or [com.apple.developer.browser.app-installation](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.browser.app-installation).

## Topics

### Accessing app library and account authorization information

- [current](applibrary/current.md): A global accessor for the device’s app library instance.
- [didAuthenticate(account:)](applibrary/didauthenticate%28account_%29.md): Instructs iOS to reinstall an app after a required reuthorization completes.

### Managing app installation

- [AppLibrary.App](applibrary/app.md): Information about an app that someone installs from a marketplace, including its ID and installation status.
- [AppLibrary.InstallationRequest](applibrary/installationrequest.md): A request to install an app distribution package for a given account.
- [installingApps](applibrary/installingapps.md): The set of apps that are pending installation completion.
- [isLoading](applibrary/isloading.md): A Boolean value that indicates whether the library is currently loading apps.
- [requestAppInstallation(\_:)](applibrary/requestappinstallation%28__%29.md): Requests the installation of the given app distribution package for the given account.
- [requestAppInstallationFromBrowser(for:referrer:)](applibrary/requestappinstallationfrombrowser%28for_referrer_%29.md): Forwards an app installation request from the developer’s webpage.

### Accessing installed apps

- [app(forAppleItemID:)](applibrary/app%28forappleitemid_%29.md): Provides the app for the given app identifier.
- [installedApps](applibrary/installedapps.md): The set of apps installed by the alternative app marketplace.

### Checking for age-rating based content restrictions

- [maximumAllowedAgeRating](applibrary/maximumallowedagerating.md): An age rating that specifies the maximum rating set for content on the device.
- [AppLibrary.ExceptionRequest](applibrary/exceptionrequest.md): A structure that describes an app that a person requests permission to install.
- [currentAgeExceptionRequests()](applibrary/currentageexceptionrequests%28%29.md): Returns a list of requests to install apps that exceed the maximum allowed age rating for the device.

### Filtering app searches

- [searchTerritory](applibrary/searchterritory.md): A country code that the framework uses to filter the search results of apps that aren’t available in that country.
- [setSearchTerritory(\_:)](applibrary/setsearchterritory%28__%29.md): Defines a country code that iOS uses to filter the search results of apps that aren’t available in that country.

### Updating apps

- [requestAppUpdate(\_:)](applibrary/requestappupdate%28__%29.md): Requests an app update for the given app distribution package and account information.
- [requestLicenseRenewal(appleItemIDs:)](applibrary/requestlicenserenewal%28appleitemids_%29.md): Instructs iOS to request an updated app license from your marketplace server for the given app identifier.

### Determining device region

- [catalogRegion](applibrary/catalogregion.md): A country code for the device’s current region.

### Deprecated

- [requestAppInstallation(for:account:installVerificationToken:)](applibrary/requestappinstallation%28for_account_installverificationtoken_%29.md): Deprecated.
- [requestAppUpdate(for:account:installVerificationToken:)](applibrary/requestappupdate%28for_account_installverificationtoken_%29.md): Deprecated.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### App management

- [AppVersion](appversion.md): Information that describes an app, including its identifier and version number.
- [AutomaticUpdate](automaticupdate.md): Information that describes an app that’s available for update, including a download URL.
- [InstallRequirements](installrequirements.md): An app’s installation criteria for a device.
- [AppleItemID](appleitemid.md): An identifier that represents an app.
- [AppleVersionID](appleversionid.md): An identifier that represents a single app version.
- [MarketplaceKitURIScheme](marketplacekiturischeme.md): A URI scheme that defines an alternative distribution app installation link.
- [RequestAppDeletionAction](requestappdeletionaction.md): A SwiftUI environment action that requests the deletion of an app.
