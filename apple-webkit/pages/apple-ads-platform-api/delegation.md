> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/delegation](https://developer.apple.com/documentation/apple-ads-platform-api/delegation)

# Delegation

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Links an ad account to an external advertiser resource, such as a content provider or brand.

## Declaration

```
object Delegation
```

## Properties

- `resourceId` — `string`: The ID of the delegated resource. For `CONTENT_PROVIDER`, this is the Content Provider ID (CPID). For `BUSINESS_BRAND`, this is the Brand ID.
- `resourceType` — `Delegation.ResourceType`: The type of the linked resource. Accepted values: `CONTENT_PROVIDER`, `BUSINESS_BRAND`. See [Delegation.ResourceType](delegation/resourcetype-data.typealias.md).
- `resourceName` — `string`: The display name of the delegated resource. For `BUSINESS_BRAND`, this is the brand name. For `CONTENT_PROVIDER`, this is the provider name from App Store Connect.

<a id="Discussion"></a>

## Discussion

The `Delegation` object links an ad account to an external advertiser resource: a `CONTENT_PROVIDER` (App Store) or a `BUSINESS_BRAND` (Apple Maps).

The `Delegation` objects appear in `AdAccount.delegations`, and [Get Advertiser Resources](get-advertiser-resources.md) returns them.

<a id="Example"></a>

### Example

```json
{
  "resourceId": "555666777",
  "resourceType": "CONTENT_PROVIDER",
  "resourceName": "AwayFinder"
}
```

## Topics

### Type Aliases

- [Delegation.ResourceType](delegation/resourcetype-data.typealias.md): The type of the linked resource: `CONTENT_PROVIDER` or `BUSINESS_BRAND`.

## See Also

- [AdAccount](adaccount.md): The account-level resource within an organization that contains campaigns and advertising settings.
- [AdAccountCreate](adaccountcreate.md): Request body for creating a new ad account under an organization.
- [AdAccountUpdate](adaccountupdate.md): The request body you use to update an ad account.
- [AdAccountResponse](adaccountresponse.md): The response envelope ad account operations return.
- [AclAdAccount](acladaccount.md): Ad account details as returned in ACL responses.
- [User ACL](useracl.md): An access control entry for a single ad account that specifies the authenticated user’s assigned roles.
- [UserAclListResponse](useracllistresponse.md): The response envelope for the Get User ACL endpoint, containing the list of user access control entries.
- [UserAccessResult](useraccessresult.md): The result object returned when querying user ACL entries, containing the list of ad account access records.
- [DelegationCreate](delegationcreate.md): The request body for creating a delegation on an ad account.
- [DelegationUpdate](delegationupdate.md): The request body for updating a delegation on an ad account.
- [Me](me.md): The authenticated user’s identity information.
- [MeResponse](meresponse.md): The response envelope for the Get Me Details endpoint, containing the authenticated user’s identity.
- [Org](org.md): Represents an organization in the Apple Ads system.
- [OrgResponse](orgresponse.md): The response envelope for a single organization lookup.
