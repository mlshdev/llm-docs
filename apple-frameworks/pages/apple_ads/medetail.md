> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/medetail

# MeDetail

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 4.0+ (deprecated in 5.2)

The API caller identifiers.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
object MeDetail
```

## Properties

- `parentOrgId` — `int64`: The account parent organization identifier.
- `userId` — `int64`: The identifier of the API caller.

## See Also

### Access Control List

- [Get User ACL](get-user-acl.md): Deprecated. Fetches roles and organizations that the API has access to.
- [UserAcl](useracl.md): Deprecated. The response to ACL requests.
- [UserAclListResponse](useracllistresponse.md): Deprecated. A container for ACL call responses.
- [Get Me Details](get-me-details.md): Deprecated. Fetches details of an API caller.
- [MeDetailResponse](medetailresponse.md): Deprecated. The response from me detail calls.
