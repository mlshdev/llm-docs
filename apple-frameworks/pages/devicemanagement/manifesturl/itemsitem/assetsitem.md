> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/manifesturl/itemsitem/assetsitem](https://developer.apple.com/documentation/devicemanagement/manifesturl/itemsitem/assetsitem)

# ManifestURL.ItemsItem.AssetsItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.9+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

An array of dictionaries that describe an item to install.

## Declaration

```
object ManifestURL.ItemsItem.AssetsItem
```

## Properties

- `kind` — `string` (required): The kind of manifest item to install. Use `software-package` for apps and macOS packages.
  **Allowed values:** `asset-pack-manifest`, `display-image`, `full-size-image`, `software-package`
- `md5` — `string`: The MD5 hash value the device uses when verifying the hash of the manifest item data. When this key is present, the device ignores the `md5-size` and `md5s` keys.
- `md5-size` — `integer`: The data chunk size the device uses when verifying the hash of the manifest item data. The device requires this key when the `md5s` key is present.
- `md5s` — `[string]`: An array of strings representing a set of MD5 hash values. The device uses these values to verify the integrity of the downloaded manifest item data. The device requires this key when the `md5-size` key is present.
- `sha256` — `string`: The SHA-256 hash value the device uses when verifying the hash of the manifest item data. When this key is present, the device ignores the `sha256-size` and `sha256` keys.
- `sha256-size` — `integer`: The data chunk size the device uses when verifying the hash of the manifest item data. The device requires this key when the `sha256s` key is present.
- `sha256s` — `[string]`: An array of strings representing a set of SHA-256 hash values. The device uses these values to verify the integrity of the downloaded manifest item data. The device requires this key when the `sha256-size` key is present.
- `url` — `string` (required): The URL that hosts the manifest item data. The URL needs to start with `https://`.

## See Also

### Objects

- [ManifestURL.ItemsItem.Metadata](metadata-data.dictionary.md): The metadata for an application or package manifest item.
