> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/nsextensionmappingsresponse/extensionsitem

# NSExtensionMappingsResponse.ExtensionsItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.13+

A dictionary that contains information about an extension.

## Declaration

```
object NSExtensionMappingsResponse.ExtensionsItem
```

## Properties

- `DisplayName` — `string` (required): The display name of the extension.
- `ExtensionPoint` — `string` (required): The [NSExtensionPointIdentifier](../../bundleresources/information-property-list/nsextension/nsextensionpointidentifier.md) for the extension.
- `Identifier` — `string` (required): The identifier of the extension.

## See Also

### Objects

- [NSExtensionMappingsResponse.ErrorChainItem](errorchainitem.md): A dictionary that describes an error chain item.
