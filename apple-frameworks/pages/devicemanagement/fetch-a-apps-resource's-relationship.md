> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/fetch-a-apps-resource's-relationship](https://developer.apple.com/documentation/devicemanagement/fetch-a-apps-resource's-relationship)

# Fetch a apps resource's relationship

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** VPP License Management 2.2+

## URL

```http
GET https://api.ent.apple.com/v1/catalog/{storefront}/apps/{id}/{relationship}
```

## Path Parameters

- `id` — `string` (required):
- `relationship` — `string` (required): **Allowed values:** `genres`
- `storefront` — `string` (required):

## Query Parameters

- `additionalPlatforms` — `[string]`: **Allowed values:** `appletv`, `ipad`, `iphone`, `mac`, `realityDevice`, `web`
- `extend` — `[string]`: **Allowed values:** `description`, `fileSizeByDevice`, `languageList`, `latestVersionInfo`, `privacyPolicyUrl`, `requirementsByDeviceFamily`, `screenshotsByType`, `supportURLForLanguage`, `versionHistory`, `websiteUrl`
- `include` — `[string]`:
- `l` — `string`:
- `limit` — `integer`:
- `platform` — `string` (required): **Allowed values:** `appletv`, `ipad`, `iphone`, `mac`, `realityDevice`, `web`
- `relate` — `[string]`:

## Response Codes

- `200` OK — `RelationshipResponse`:
- `401` Unauthorized — `UnauthorizedResponse`:
- `500` Internal Server Error — `ErrorsResponse`:

## See Also

### Fetching relationships

- [Fetch a books resource's relationship](fetch-a-books-resource's-relationship.md)
- [RelationshipResponse](relationshipresponse.md)
