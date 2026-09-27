> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appmigrationkit/appmigrationextension/appcontainer-44kyi

# appContainer

**Framework:** AppMigrationKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The data container of the containing app.

## Declaration

```swift
var appContainer: MigrationDataContainer { get }
```

<a id="discussion"></a>

## Discussion

To access the containing app’s data, your app requires the `com.apple.developer.app-migration.data-container-access` entitlement.
