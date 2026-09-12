> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/mediasettings/denybookstoreerotica-swift.property](https://developer.apple.com/documentation/managedsettings/mediasettings/denybookstoreerotica-swift.property)

# denyBookstoreErotica

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A Boolean value that indicates whether to deny media categorized as erotica in the Books store.

## Declaration

```swift
var denyBookstoreErotica: Bool? { get set }
```

<a id="discussion"></a>

## Discussion

Use `denyBookstoreErotica` to deny the user permission to access media with an *erotica* tag in the Books store. If your app doesn’t configure this setting, the value is `nil`.

## See Also

### Constraining content in the Books app

- [denyBookstoreErotica](denybookstoreerotica-swift.type.property.md): The metadata associated with the setting that denies access to content in the Books store categorized as erotica.
