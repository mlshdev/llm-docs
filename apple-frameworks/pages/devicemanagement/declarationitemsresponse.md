> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/declarationitemsresponse](https://developer.apple.com/documentation/devicemanagement/declarationitemsresponse)

# DeclarationItemsResponse

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object

The set of available declarations on the server.

## Declaration

```
object DeclarationItemsResponse
```

## Properties

- `Declarations` — `DeclarationItemsResponse.ManifestDeclarationItems` (required): The set of available declarations on the server.
- `DeclarationsToken` — `string` (required): The current value of the declarations token. Clients use this to detect when declarations change so they can refetch the token.

## Topics

### Supporting Objects

- [DeclarationItemsResponse.ManifestDeclarationItems](declarationitemsresponse/manifestdeclarationitems.md): The dictionary that contains the lists of declarations available on the server.
- [ManifestDeclaration](manifestdeclaration.md): A dictionary that describes a declaration.
