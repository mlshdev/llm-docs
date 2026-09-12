> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/declaration-activation-_identifier_](https://developer.apple.com/documentation/devicemanagement/declaration-activation-_identifier_)

# declaration/activation/{identifier}

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint

The endpoint for fetching an activation declaration.

## URL

```http
PUT https://yourmdmhost.example.com/checkin
```

## Path Parameters

- `identifier` — `string` (required): The identifier of the activation declaration to fetch.

## Response Codes

- `200` OK — `DeclarationResponse`: The details of the activation declaration.
- `404` Not Found: The system doesn’t support the activation declaration with the specified identifier.

## See Also

### Declaration Endpoints

- [declaration/asset/{identifier}](declaration-asset-_identifier_.md): The endpoint for fetching an asset declaration.
- [declaration/configuration/{identifier}](declaration-configuration-_identifier_.md): The endpoint for fetching a configuration declaration.
- [declaration/management/{identifier}](declaration-management-_identifier_.md): The endpoint for fetching a management declaration.
