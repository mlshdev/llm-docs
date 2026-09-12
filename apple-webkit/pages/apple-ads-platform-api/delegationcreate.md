> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/delegationcreate](https://developer.apple.com/documentation/apple-ads-platform-api/delegationcreate)

# DelegationCreate

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The request body for creating a delegation on an ad account.

## Declaration

```
object DelegationCreate
```

## Properties

- `resourceId` — `string` (required): The ID of the resource you’re delegating. For `CONTENT_PROVIDER`, this is the Content Provider ID (CPID). For `BUSINESS_BRAND`, this is the Brand ID.
  **Minimum length:** `1`
- `resourceType` — `DelegationCreate.ResourceType` (required): The type of resource you’re delegating. See [DelegationCreate.ResourceType](delegationcreate/resourcetype-data.typealias.md).

<a id="overview"></a>

## Overview

`CONTENT_PROVIDER`, for App Store advertising:

```json
{
  "resourceId": "12345678",
  "resourceType": "CONTENT_PROVIDER"
}
```

`BUSINESS_BRAND`, for Apple Maps advertising:

```json
{
  "resourceId": "9876543",
  "resourceType": "BUSINESS_BRAND"
}
```

## Topics

### Type Aliases

- [DelegationCreate.ResourceType](delegationcreate/resourcetype-data.typealias.md): The type of resource you’re delegating.

## See Also

- [AdAccount](adaccount.md): The account-level resource within an organization that contains campaigns and advertising settings.
- [AdAccountCreate](adaccountcreate.md): Request body for creating a new ad account under an organization.
- [AdAccountUpdate](adaccountupdate.md): The request body you use to update an ad account.
- [AdAccountResponse](adaccountresponse.md): The response envelope ad account operations return.
- [AclAdAccount](acladaccount.md): Ad account details as returned in ACL responses.
- [User ACL](useracl.md): An access control entry for a single ad account that specifies the authenticated user’s assigned roles.
- [UserAclListResponse](useracllistresponse.md): The response envelope for the Get User ACL endpoint, containing the list of user access control entries.
- [UserAccessResult](useraccessresult.md): The result object returned when querying user ACL entries, containing the list of ad account access records.
- [Delegation](delegation.md): Links an ad account to an external advertiser resource, such as a content provider or brand.
- [DelegationUpdate](delegationupdate.md): The request body for updating a delegation on an ad account.
- [Me](me.md): The authenticated user’s identity information.
- [MeResponse](meresponse.md): The response envelope for the Get Me Details endpoint, containing the authenticated user’s identity.
- [Org](org.md): Represents an organization in the Apple Ads system.
- [OrgResponse](orgresponse.md): The response envelope for a single organization lookup.
