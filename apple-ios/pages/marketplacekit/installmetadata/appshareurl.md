> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/installmetadata/appshareurl](https://developer.apple.com/documentation/marketplacekit/installmetadata/appshareurl)

# appShareURL

**Framework:** MarketplaceKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A URL to a product landing page for the app on your marketplace website.

## Declaration

```swift
var appShareURL: URL?
```

<a id="discussion"></a>

## Discussion

The operating system populates the value in the Share Sheet when a person touches and holds the app’s icon on the Home Screen.

## See Also

### Inspecting app and account information

- [appleItemID](appleitemid.md): A unique identifier for the app to install.
- [alternativeDistributionPackage](alternativedistributionpackage.md): A URL to the app’s assembled alternative distribution package.
- [isUpdate](isupdate.md): A Boolean value that indicates whether the installation is an app update.
- [account](account.md): A user ID for the person installing the app.
