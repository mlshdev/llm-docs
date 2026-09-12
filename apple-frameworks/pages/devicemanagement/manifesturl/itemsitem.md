> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/manifesturl/itemsitem](https://developer.apple.com/documentation/devicemanagement/manifesturl/itemsitem)

# ManifestURL.ItemsItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.9+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

An array of dictionaries representing what the manifest installs.

## Declaration

```
object ManifestURL.ItemsItem
```

## Properties

- `assets` — `[ManifestURL.ItemsItem.AssetsItem]` (required): An array of dictionaries that describe an item to install.
- `metadata` — `ManifestURL.ItemsItem.Metadata` (required): The metadata for an application or package manifest item.

## Topics

### Objects

- [ManifestURL.ItemsItem.AssetsItem](itemsitem/assetsitem.md): An array of dictionaries that describe an item to install.
- [ManifestURL.ItemsItem.Metadata](itemsitem/metadata-data.dictionary.md): The metadata for an application or package manifest item.
