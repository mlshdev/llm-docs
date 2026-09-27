> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/apple_ads/useracllistresponse

# UserAclListResponse

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+ (deprecated in 5.2)

A container for ACL call responses.

> Apple Ads Campaign Management API is deprecated. Instead, use the [Apple Ads Platform API](https://developer.apple.com/documentation/apple-ads-platform-api).

## Declaration

```
object UserAclListResponse
```

## Properties

- `data` — `[UserAcl]`: Response data that the API provides.
- `error` — `ErrorResponseBody`: Error response data that the API provides.
- `pagination` — `PageDetail`: Page detail information that the API provides.

## See Also

### Access Control List

- [Get User ACL](get-user-acl.md): Deprecated. Fetches roles and organizations that the API has access to.
- [UserAcl](useracl.md): Deprecated. The response to ACL requests.
- [Get Me Details](get-me-details.md): Deprecated. Fetches details of an API caller.
- [MeDetail](medetail.md): Deprecated. The API caller identifiers.
- [MeDetailResponse](medetailresponse.md): Deprecated. The response from me detail calls.
