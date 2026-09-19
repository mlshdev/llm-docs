> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/loginitemsmanageditems/loginitem

# LoginItemsManagedItems.LoginItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.13+

A dictionary with the details about a login item.

## Declaration

```
object LoginItemsManagedItems.LoginItem
```

## Properties

- `Hide` — `boolean`: If `true`, the system hides this item in the Users & Groups login items list.
  **Default:** `false`
- `Path` — `string` (required): The URL or path string to the item’s location.
