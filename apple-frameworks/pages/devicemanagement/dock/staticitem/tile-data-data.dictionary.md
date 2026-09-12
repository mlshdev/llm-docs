> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/dock/staticitem/tile-data-data.dictionary](https://developer.apple.com/documentation/devicemanagement/dock/staticitem/tile-data-data.dictionary)

# Dock.StaticItem.Tile-data

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.7+

The dictionary that contains details about a Dock item.

## Declaration

```
object Dock.StaticItem.Tile-data
```

## Properties

- `file-data` — `Dock.StaticItem.Tile-data.File-data`: The data in a file. For Apple use only.
- `file-type` — `integer` (required): The type of tile:

  - `0`: URL
  - `1`: File
  - `3`: Directory  
  **Allowed values:** `0`, `1`, `3`
- `label` — `string` (required): The label of the Dock item.
- `url` — `string`: The URL string.

## Topics

### Objects

- [Dock.StaticItem.Tile-data.File-data](tile-data-data.dictionary/file-data-data.dictionary.md): For Apple use only.
