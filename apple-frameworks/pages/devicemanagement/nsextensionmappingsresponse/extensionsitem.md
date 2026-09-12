> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/nsextensionmappingsresponse/extensionsitem](https://developer.apple.com/documentation/devicemanagement/nsextensionmappingsresponse/extensionsitem)

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
