> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-appstoreversionsubmissions-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-appstoreversionsubmissions-_id_)

# Delete an app store version submission

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+ (deprecated in 1.7)

Remove a version from App Store review.

> Use [Modify a Review Submission](patch-v1-reviewsubmissions-_id_.md) instead.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/appStoreVersionSubmissions/{id}
```

## Path Parameters

- `id` — `string` (required): The unique identifier of the App Store version submission resource that you receive when you create the submission. This value is the same as the `id` property in the [AppStoreVersionSubmission](appstoreversionsubmission.md) object.

## Response Codes

- `204` No Content: Success.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 1.7 release notes](app-store-connect-api-1-7-release-notes.md)

<a id="Discussion"></a>

## Discussion

Use this endpoint to remove a version from App Review. This request fails with an appropriate error if the app can’t be removed from review. For more information, see [Remove a submission from review](https://developer.apple.com/help/app-store-connect/manage-submissions-to-app-review/remove-a-submission-from-review).

<a id="Remove-a-Version-from-App-Review"></a>

### Remove a Version from App Review

**Request**

```
DELETE https://api.appstoreconnect.apple.com/v1/appStoreVersionSubmissions/942c7a69-b184-478a-898f-a51b8be1044d
```

**Response**

```json
HTTP/1.1 204 NO CONTENT
```
