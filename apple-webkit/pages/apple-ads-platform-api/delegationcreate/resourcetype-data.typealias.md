> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/delegationcreate/resourcetype-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/delegationcreate/resourcetype-data.typealias)

# DelegationCreate.ResourceType

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The type of resource you’re delegating.

## Declaration

```
string DelegationCreate.ResourceType
```

## Possible Values

- `CONTENT_PROVIDER`: A content provider resource associated with the ad account. Its `resourceId` is the Content Provider ID (CPID).
- `BUSINESS_BRAND`: A Brand resource delegated from an organization. Its `resourceId` is the Brand ID.

<a id="Discussion"></a>

## Discussion

Choosing `CONTENT_PROVIDER` or `BUSINESS_BRAND` here fixes which kind of identifier `resourceId` must supply.

<a id="Example"></a>

### Example

```json
{
  "resourceId": "555666777",
  "resourceType": "CONTENT_PROVIDER"
}
```
