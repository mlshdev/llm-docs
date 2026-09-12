> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/installmetadata](https://developer.apple.com/documentation/marketplacekit/installmetadata)

# InstallMetadata

**Framework:** MarketplaceKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Information about a specific app to install or update and the person who initiates it.

## Declaration

```swift
struct InstallMetadata
```

## Mentioned In

- [Ingesting an alternative distribution package](ingesting-an-alternative-distribution-package.md)

## Topics

### Initializing an install metadata instance

- [init(account:appleItemID:alternativeDistributionPackage:isUpdate:)](installmetadata/init%28account_appleitemid_alternativedistributionpackage_isupdate_%29.md): Initializes an install metadata object with the given app information.
- [init(account:appleItemID:alternativeDistributionPackage:isUpdate:appShareURL:requestAgeException:)](installmetadata/init%28account_appleitemid_alternativedistributionpackage_isupdate_appshareurl_requestageexception_%29.md): Initializes an install metadata object with the given app information and exception request indicator.

### Inspecting app and account information

- [appleItemID](installmetadata/appleitemid.md): A unique identifier for the app to install.
- [alternativeDistributionPackage](installmetadata/alternativedistributionpackage.md): A URL to the app’s assembled alternative distribution package.
- [appShareURL](installmetadata/appshareurl.md): A URL to a product landing page for the app on your marketplace website.
- [isUpdate](installmetadata/isupdate.md): A Boolean value that indicates whether the installation is an app update.
- [account](installmetadata/account.md): A user ID for the person installing the app.

### Requesting an exception

- [requestAgeException](installmetadata/requestageexception.md): A Boolean value that indicates whether the person needs approval to install the app.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### App distribution UI

- [ActionButton](actionbutton.md): A user-interface element that enables a person to install, update, or launch apps by tapping the element.
- [InstallConfiguration](installconfiguration.md): Information that describes a requested app installation or app update.
- [InstallConfirmationResult](installconfirmationresult.md): Options that indicate whether the installation of an app proceeds when a person interacts with an app installation button.
- [BatchInstallConfiguration](batchinstallconfiguration.md): Information that describes multiple app installations or app updates.
- [BatchInstallConfirmationResult](batchinstallconfirmationresult.md): Options that indicate whether the installation of multiple apps proceeds when a person interacts with an app installation button.
- [MarketplaceDisplayOption](marketplacedisplayoption.md): The kinds of deep links that the operating system makes into your marketplace.
- [MarketplaceSceneDelegate](marketplacescenedelegate.md): A delegate that handles deep link requests into your marketplace app.
