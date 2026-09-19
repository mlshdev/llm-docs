> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedsettings/appstoresettings/denyinapppurchases-swift.property

# denyInAppPurchases

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A Boolean value that indicates whether to deny the user permission to make in-app purchases.

## Declaration

```swift
var denyInAppPurchases: Bool? { get set }
```

<a id="discussion"></a>

## Discussion

If your app doesn’t constrain this setting, the value is `nil`.

## See Also

### Denying In-App Purchases

- [denyInAppPurchases](denyinapppurchases-swift.type.property.md): The metadata associated with the setting to deny in-app purchases.
