> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/adaccountupdate](https://developer.apple.com/documentation/apple-ads-platform-api/adaccountupdate)

# AdAccountUpdate

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The request body you use to update an ad account.

## Declaration

```
object AdAccountUpdate
```

## Properties

- `name` — `string`: Display name of the ad account. Mutable. Must not be null if provided.
  **Minimum length:** `1`
- `delegations` — `[DelegationUpdate]`: Advertiser resource delegations for this account. Providing this field sends the complete list of delegations you want the account to have, not just the ones you’re adding or changing. Apple replaces the account’s entire delegation list with what you send, so Apple removes any existing delegation left out of the array. See [DelegationUpdate](delegationupdate.md). Mutable.
- `productFeatures` — `[ProductFeatures]`: Product features enabled for this ad account. This endpoint ignores this field. `productFeatures` is fixed at creation and can’t be changed on update. See [ProductFeatures](productfeatures.md).

<a id="Discussion"></a>

## Discussion

The `AdAccountUpdate` object is the request payload for modifying an existing ad account. Include only the fields you want to change. Fields you leave out keep their current value.

<a id="Example"></a>

### Example

```json
{
  "name": "AwayFinder Ad Account Updated",
  "delegations": [
    {
      "resourceId": "12345678",
      "resourceType": "CONTENT_PROVIDER"
    }
  ]
}
```

## See Also

- [AdAccount](adaccount.md): The account-level resource within an organization that contains campaigns and advertising settings.
- [AdAccountCreate](adaccountcreate.md): Request body for creating a new ad account under an organization.
- [AdAccountResponse](adaccountresponse.md): The response envelope ad account operations return.
- [AclAdAccount](acladaccount.md): Ad account details as returned in ACL responses.
- [User ACL](useracl.md): An access control entry for a single ad account that specifies the authenticated user’s assigned roles.
- [UserAclListResponse](useracllistresponse.md): The response envelope for the Get User ACL endpoint, containing the list of user access control entries.
- [UserAccessResult](useraccessresult.md): The result object returned when querying user ACL entries, containing the list of ad account access records.
- [Delegation](delegation.md): Links an ad account to an external advertiser resource, such as a content provider or brand.
- [DelegationCreate](delegationcreate.md): The request body for creating a delegation on an ad account.
- [DelegationUpdate](delegationupdate.md): The request body for updating a delegation on an ad account.
- [Me](me.md): The authenticated user’s identity information.
- [MeResponse](meresponse.md): The response envelope for the Get Me Details endpoint, containing the authenticated user’s identity.
- [Org](org.md): Represents an organization in the Apple Ads system.
- [OrgResponse](orgresponse.md): The response envelope for a single organization lookup.
