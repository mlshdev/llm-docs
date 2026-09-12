> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/dock/staticitem](https://developer.apple.com/documentation/devicemanagement/dock/staticitem)

# Dock.StaticItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.7+

Items that are located on the Documents side of the Dock and cannot be removed from that location.

## Declaration

```
object Dock.StaticItem
```

## Properties

- `tile-data` — `Dock.StaticItem.Tile-data` (required): The information about the Dock item.
- `tile-type` — `string` (required): The type of tile.
  **Allowed values:** `file-tile`, `directory-tile`, `url-tile`

## Topics

### Objects

- [Dock.StaticItem.Tile-data](staticitem/tile-data-data.dictionary.md): The dictionary that contains details about a Dock item.
