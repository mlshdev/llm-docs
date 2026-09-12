> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/org](https://developer.apple.com/documentation/apple-ads-platform-api/org)

# Org

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Represents an organization in the Apple Ads system.

## Declaration

```
object Org
```

## Properties

- `name` — `string`: The name of the organization.
- `currency` — `Org.Currency`: The currency used by the organization. See [Org.Currency](org/currency-data.typealias.md).
- `timezone` — `string`: The timezone associated with the organization.
- `paymentModel` — `Org.PaymentModel`: The payment model for the organization. `LOC` (line of credit) enables budget orders and is invoiced monthly. `PAYG` (pay as you go) is charged per campaign spend. See [Org.PaymentModel](org/paymentmodel-data.typealias.md).
- `systemStatus` — `Org.SystemStatus`: The system-assigned status of the organization. See [Org.SystemStatus](org/systemstatus-data.typealias.md).
- `systemStatusReasons` — `[Org.SystemStatusReasons]`: Reasons associated with the current system status. See [Org.SystemStatusReasons](org/systemstatusreasons-data.typealias.md).
- `id` — `int64`: The unique identifier for the organization.

<a id="Discussion"></a>

## Discussion

An `Org` is the top-level entity that owns ad accounts, manages users, and groups all advertising activity under a single billing relationship. It’s the root entity in the account hierarchy, with ad accounts, campaigns, and user memberships all existing beneath it.

The `systemStatus` field reflects whether the org is `ACTIVE` or `INACTIVE`. An inactive org prevents all campaigns under it from serving. Check `systemStatusReasons` for the specific cause.

To discover which organizations the current API token can access, use `GET /v1/acls` ([Get User ACL](get-user-acls.md)). Then, to retrieve full details, use `GET /v1/orgs/{orgId}` ([Get Org by ID](get-orgs-_id_.md)).

<a id="Example"></a>

### Example

```json
{
  "name": "AwayFinder",
  "currency": "USD",
  "timezone": "America/Los_Angeles",
  "paymentModel": "PAYG",
  "systemStatus": "ACTIVE",
  "systemStatusReasons": [],
  "id": 123456789
}
```

## Topics

### Type Aliases

- [Org.Currency](org/currency-data.typealias.md): The currency used by the organization.
- [Org.PaymentModel](org/paymentmodel-data.typealias.md): The payment model set through Apple Ads.
- [Org.SystemStatus](org/systemstatus-data.typealias.md): System-derived operational status of the organization.
- [Org.SystemStatusReasons](org/systemstatusreasons-data.typealias.md): Reasons that can cause the organization’s system status to be `INACTIVE`.

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
- [DelegationCreate](delegationcreate.md): The request body for creating a delegation on an ad account.
- [DelegationUpdate](delegationupdate.md): The request body for updating a delegation on an ad account.
- [Me](me.md): The authenticated user’s identity information.
- [MeResponse](meresponse.md): The response envelope for the Get Me Details endpoint, containing the authenticated user’s identity.
- [OrgResponse](orgresponse.md): The response envelope for a single organization lookup.
