> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/declaration-management-_identifier_

# declaration/management/{identifier}

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint

The endpoint for fetching a management declaration.

## URL

```http
PUT https://yourmdmhost.example.com/checkin
```

## Path Parameters

- `identifier` — `string` (required): The identifier of the management declaration to fetch.

## Response Codes

- `200` OK — `DeclarationResponse`: The details of the management declaration.
- `404` Not Found: The system doesn’t support the management declaration with the specified identifier.

## See Also

### Declaration Endpoints

- [declaration/activation/{identifier}](declaration-activation-_identifier_.md): The endpoint for fetching an activation declaration.
- [declaration/asset/{identifier}](declaration-asset-_identifier_.md): The endpoint for fetching an asset declaration.
- [declaration/configuration/{identifier}](declaration-configuration-_identifier_.md): The endpoint for fetching a configuration declaration.
