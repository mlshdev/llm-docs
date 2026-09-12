> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/reviewsubmissionitemresponse](https://developer.apple.com/documentation/appstoreconnectapi/reviewsubmissionitemresponse)

# ReviewSubmissionItemResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.7+

The response body for endpoints that create, read, or modify a single review submission item.

## Declaration

```
object ReviewSubmissionItemResponse
```

## Properties

- `data` — `ReviewSubmissionItem` (required):
- `included` — `[*]`: **Allowed types:** `AppCustomProductPageVersion`, `AppEvent`, `AppStoreVersionExperiment`, `AppStoreVersion`, `BackgroundAssetVersion`, `GameCenterAchievementVersionV2`, `GameCenterActivityVersion`, `GameCenterChallengeVersion`, `GameCenterLeaderboardSetVersionV2`, `GameCenterLeaderboardVersionV2`, `InAppPurchaseVersion`, `SubscriptionGroupVersion`, `SubscriptionVersion`
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [ReviewSubmissionItemCreateRequest](reviewsubmissionitemcreaterequest.md): The request body you use to create a review submission item.
- [ReviewSubmissionItemUpdateRequest](reviewsubmissionitemupdaterequest.md): The request body you use to update a review submission item update request.
- [ReviewSubmissionItemsResponse](reviewsubmissionitemsresponse.md): The response body for endpoints that list items in a review submission.
