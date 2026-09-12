> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/delegation/resourcetype-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/delegation/resourcetype-data.typealias)

# Delegation.ResourceType

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The type of the linked resource: `CONTENT_PROVIDER` or `BUSINESS_BRAND`.

## Declaration

```
string Delegation.ResourceType
```

## Possible Values

- `CONTENT_PROVIDER`: A content provider resource associated with the ad account. Its `resourceId` is the Content Provider ID (CPID).
- `BUSINESS_BRAND`: A Brand resource delegated from an organization. Its `resourceId` is the Brand ID.

<a id="Discussion"></a>

## Discussion

This mirrors the `resourceType` set when the delegation was created or last updated, and continues to determine whether `resourceId` is a Content Provider ID or a Brand ID.

<a id="Example"></a>

### Example

```json
{
  "resourceId": "555666777",
  "resourceType": "CONTENT_PROVIDER"
}
```
