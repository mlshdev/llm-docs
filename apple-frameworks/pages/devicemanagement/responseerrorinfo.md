> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/responseerrorinfo

# ResponseErrorInfo

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** VPP License Management 2.0+

Information about the error.

## Declaration

```
object ResponseErrorInfo
```

## Properties

- `assets` — `[Asset]`: The requested assets that result in an error.
- `clientUserIds` — `[string]`: The requested users that result in an error.
- `serialNumbers` — `[string]`: The requested devices that result in an error.

## Topics

### Objects and Data Types

- [Asset](asset.md): A product in the store.
