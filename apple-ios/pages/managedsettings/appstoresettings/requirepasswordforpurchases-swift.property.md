> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedsettings/appstoresettings/requirepasswordforpurchases-swift.property

# requirePasswordForPurchases

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A Boolean value that indicates whether to require the user’s password to make App Store transactions.

## Declaration

```swift
var requirePasswordForPurchases: Bool? { get set }
```

<a id="discussion"></a>

## Discussion

Specify `true` to require the user’s password for each transaction. The value is `nil` if your app doesn’t configure this setting.

## See Also

### Requiring a password

- [requirePasswordForPurchases](requirepasswordforpurchases-swift.type.property.md): The metadata associated with the setting that requires a password for App Store purchases.
