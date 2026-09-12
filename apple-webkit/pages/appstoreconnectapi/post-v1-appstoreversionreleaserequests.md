> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-appstoreversionreleaserequests](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-appstoreversionreleaserequests)

# Manually release an app store approved version of your app

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.5+

Release an approved version of your app to the App Store.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/appStoreVersionReleaseRequests
```

## HTTP Body

Content type: `application/json`

Type: `AppStoreVersionReleaseRequestCreateRequest`

The request body you use to manually release an approved version of your app to the App Store.

## Response Codes

- `201` Created — `AppStoreVersionReleaseRequestResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

When you submit your app for review, if itʼs approved and the status changes to Pending Developer Release, then you can release a version. For more information about app review, see [Submit for review](https://developer.apple.com/help/app-store-connect/manage-submissions-to-app-review/submit-for-review). For more information about manually releasing versions, see [Select a version release option](https://devcms.apple.com/help/app-store-connect/manage-your-apps-availability/select-a-version-release-option). For more information about app status, see [App and submission statuses](https://developer.apple.com/help/app-store-connect/reference/app-and-submission-statuses).

> **Important**

>  Send this request only when you’re ready to publish your version. You can’t cancel this request.
