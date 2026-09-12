> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/installmetadata/account](https://developer.apple.com/documentation/marketplacekit/installmetadata/account)

# account

**Framework:** MarketplaceKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A user ID for the person installing the app.

## Declaration

```swift
let account: String
```

<a id="discussion"></a>

## Discussion

You set this value and the operating system sends it back to you as:

- The `login_hint` in the call to your authorization endpoint during re-authentication
- A parameter to your marketplace extension’s [additionalHeaders(for:account:)](../marketplaceappextension/additionalheaders%28for_account_%29.md) callback

The system also groups apps in restore requests based on account.

## See Also

### Inspecting app and account information

- [appleItemID](appleitemid.md): A unique identifier for the app to install.
- [alternativeDistributionPackage](alternativedistributionpackage.md): A URL to the app’s assembled alternative distribution package.
- [appShareURL](appshareurl.md): A URL to a product landing page for the app on your marketplace website.
- [isUpdate](isupdate.md): A Boolean value that indicates whether the installation is an app update.
