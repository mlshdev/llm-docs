> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/declarationitemsresponse/manifestdeclarationitems](https://developer.apple.com/documentation/devicemanagement/declarationitemsresponse/manifestdeclarationitems)

# DeclarationItemsResponse.ManifestDeclarationItems

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object

The dictionary that contains the lists of declarations available on the server.

## Declaration

```
object DeclarationItemsResponse.ManifestDeclarationItems
```

## Properties

- `Activations` — `[ManifestDeclaration]` (required): The list of available activation declarations on the server.
- `Assets` — `[ManifestDeclaration]` (required): The list of available asset declarations on the server.
- `Configurations` — `[ManifestDeclaration]` (required): The list of available configuration declarations on the server.
- `Management` — `[ManifestDeclaration]` (required): The list of available management declarations on the server.

## Topics

### Supporting Objects

- [ManifestDeclaration](../manifestdeclaration.md): A dictionary that describes a declaration.

## See Also

### Supporting Objects

- [ManifestDeclaration](../manifestdeclaration.md): A dictionary that describes a declaration.
