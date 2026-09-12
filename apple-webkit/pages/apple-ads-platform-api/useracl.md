> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/useracl](https://developer.apple.com/documentation/apple-ads-platform-api/useracl)

# User ACL

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

An access control entry for a single ad account that specifies the authenticated user’s assigned roles.

## Declaration

```
object UserAcl
```

## Properties

- `adAccount` — `AclAdAccount`: The ad account this ACL entry belongs to. See [AclAdAccount](acladaccount.md).
- `roles` — `[string]`: List of role names the user holds for this ad account.

<a id="Discussion"></a>

## Discussion

The `UserAcl` object represents a user’s access control entry for a single ad account. Each record returned by `GET /v1/acls` ([Get User ACL](get-user-acls.md)) corresponds to one ad account the authenticated user can access.

<a id="Example"></a>

### Example

```json
{
  "adAccount": {
    "id": 123456789,
    "name": "AwayFinder",
    "orgId": 987654321
  },
  "roles": [
    "Admin"
  ]
}
```

<a id="Roles-Reference"></a>

## Roles Reference

An API Account Manager assigns roles through the Apple Ads UI, and you can’t set or change them via the API. Use the table below as a reference when interpreting the `roles` field returned by `GET /v1/acls` ([Get User ACL](get-user-acls.md)).

| Role | Access Level |
| --- | --- |
| `Admin` | Full read and write access to the ad account |
| `API Account Manager` | Full read and write access |
| `API Account Read Only` | Read-only access to all resources |
| `Limited Access: API Read & Write` | Read and write access to a limited resource set |
| `Limited Access: API Read Only` | Read-only access to a limited resource set |

## See Also

- [AdAccount](adaccount.md): The account-level resource within an organization that contains campaigns and advertising settings.
- [AdAccountCreate](adaccountcreate.md): Request body for creating a new ad account under an organization.
- [AdAccountUpdate](adaccountupdate.md): The request body you use to update an ad account.
- [AdAccountResponse](adaccountresponse.md): The response envelope ad account operations return.
- [AclAdAccount](acladaccount.md): Ad account details as returned in ACL responses.
- [UserAclListResponse](useracllistresponse.md): The response envelope for the Get User ACL endpoint, containing the list of user access control entries.
- [UserAccessResult](useraccessresult.md): The result object returned when querying user ACL entries, containing the list of ad account access records.
- [Delegation](delegation.md): Links an ad account to an external advertiser resource, such as a content provider or brand.
- [DelegationCreate](delegationcreate.md): The request body for creating a delegation on an ad account.
- [DelegationUpdate](delegationupdate.md): The request body for updating a delegation on an ad account.
- [Me](me.md): The authenticated user’s identity information.
- [MeResponse](meresponse.md): The response envelope for the Get Me Details endpoint, containing the authenticated user’s identity.
- [Org](org.md): Represents an organization in the Apple Ads system.
- [OrgResponse](orgresponse.md): The response envelope for a single organization lookup.
