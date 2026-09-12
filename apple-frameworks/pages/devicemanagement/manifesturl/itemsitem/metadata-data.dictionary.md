> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/manifesturl/itemsitem/metadata-data.dictionary](https://developer.apple.com/documentation/devicemanagement/manifesturl/itemsitem/metadata-data.dictionary)

# ManifestURL.ItemsItem.Metadata

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.9+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

The metadata for an application or package manifest item.

## Declaration

```
object ManifestURL.ItemsItem.Metadata
```

## Properties

- `bundle-identifier` — `string` (required): The bundle identifier of the app or package manifest item.
- `bundle-version` — `string`: The bundle version of the app or package manifest item.
- `kind` — `string` (required): The type of manifest item. For an app or package, this needs to be `software`.
  **Allowed values:** `software`
- `subtitle` — `string`: The name of the app or package developer.
- `title` — `string` (required): The title of the app or package being installed.

## See Also

### Objects

- [ManifestURL.ItemsItem.AssetsItem](assetsitem.md): An array of dictionaries that describe an item to install.
