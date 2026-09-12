> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/installmetadata/alternativedistributionpackage](https://developer.apple.com/documentation/marketplacekit/installmetadata/alternativedistributionpackage)

# alternativeDistributionPackage

**Framework:** MarketplaceKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A URL to the app’s assembled alternative distribution package.

## Declaration

```swift
let alternativeDistributionPackage: URL
```

<a id="discussion"></a>

## Discussion

You ingest an available app’s alternative distribution package from App Store Connect in advance, then set this URL to the location that you store the alternative distribution package on your server.

For more information, see [Ingesting an alternative distribution package](../ingesting-an-alternative-distribution-package.md).

## See Also

### Inspecting app and account information

- [appleItemID](appleitemid.md): A unique identifier for the app to install.
- [appShareURL](appshareurl.md): A URL to a product landing page for the app on your marketplace website.
- [isUpdate](isupdate.md): A Boolean value that indicates whether the installation is an app update.
- [account](account.md): A user ID for the person installing the app.
