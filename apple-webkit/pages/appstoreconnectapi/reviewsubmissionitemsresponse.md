> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/reviewsubmissionitemsresponse](https://developer.apple.com/documentation/appstoreconnectapi/reviewsubmissionitemsresponse)

# ReviewSubmissionItemsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

The response body for endpoints that list items in a review submission.

## Declaration

```
object ReviewSubmissionItemsResponse
```

## Properties

- `data` — `[ReviewSubmissionItem]` (required):
- `included` — `[*]`: **Allowed types:** `AppCustomProductPageVersion`, `AppEvent`, `AppStoreVersionExperiment`, `AppStoreVersion`, `BackgroundAssetVersion`, `GameCenterAchievementVersionV2`, `GameCenterActivityVersion`, `GameCenterChallengeVersion`, `GameCenterLeaderboardSetVersionV2`, `GameCenterLeaderboardVersionV2`, `InAppPurchaseVersion`, `SubscriptionGroupVersion`, `SubscriptionVersion`
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [ReviewSubmissionItemCreateRequest](reviewsubmissionitemcreaterequest.md): The request body you use to create a review submission item.
- [ReviewSubmissionItemUpdateRequest](reviewsubmissionitemupdaterequest.md): The request body you use to update a review submission item update request.
- [ReviewSubmissionItemResponse](reviewsubmissionitemresponse.md): The response body for endpoints that create, read, or modify a single review submission item.
