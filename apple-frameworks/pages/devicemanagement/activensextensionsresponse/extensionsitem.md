> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/activensextensionsresponse/extensionsitem](https://developer.apple.com/documentation/devicemanagement/activensextensionsresponse/extensionsitem)

# ActiveNSExtensionsResponse.ExtensionsItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.13+

A dictionary that contains information about an extension.

## Declaration

```
object ActiveNSExtensionsResponse.ExtensionsItem
```

## Properties

- `ContainerDisplayName` — `string`: The display name of the container.
- `ContainerIdentifier` — `string`: The identifier of the container.
- `DisplayName` — `string` (required): The extension’s display name.
- `ExtensionPoint` — `string` (required): The [NSExtensionPointIdentifier](../../bundleresources/information-property-list/nsextension/nsextensionpointidentifier.md) for the extension.
- `Identifier` — `string` (required): The identifier of the extension.
- `Path` — `string` (required): The path to the extension.
- `UserElection` — `string` (required): The user-selected state of the extension, which a user sets in the Extensions preference pane in System Preferences.
  **Allowed values:** `Default`, `Use`, `Ignore`
- `Version` — `string` (required): The version of the extension.

## See Also

### Objects

- [ActiveNSExtensionsResponse.ErrorChainItem](errorchainitem.md): A dictionary that describes an error chain item.
