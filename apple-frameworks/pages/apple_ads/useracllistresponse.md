> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/useracllistresponse](https://developer.apple.com/documentation/apple_ads/useracllistresponse)

# UserAclListResponse

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

A container for ACL call responses.

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

- [Get User ACL](get-user-acl.md): Fetches roles and organizations that the API has access to.
- [UserAcl](useracl.md): The response to ACL requests.
- [Get Me Details](get-me-details.md): Fetches details of an API caller.
- [MeDetail](medetail.md): The API caller identifiers.
- [MeDetailResponse](medetailresponse.md): The response from me detail calls.
