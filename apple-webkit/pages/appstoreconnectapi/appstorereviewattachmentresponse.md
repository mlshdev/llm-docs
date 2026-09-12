> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appstorereviewattachmentresponse](https://developer.apple.com/documentation/appstoreconnectapi/appstorereviewattachmentresponse)

# AppStoreReviewAttachmentResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The response body for endpoints that create, read, or modify a file attached to an App Store review submission.

## Declaration

```
object AppStoreReviewAttachmentResponse
```

## Properties

- `data` — `AppStoreReviewAttachment` (required):
- `links` — `DocumentLinks` (required):
- `included` — `[AppStoreReviewDetail]`:

## See Also

### Objects

- [AppStoreReviewAttachment](appstorereviewattachment.md): A file attached to an App Store review submission to provide reviewers with additional context, such as demo credentials or notes.
- [AppStoreReviewAttachmentCreateRequest](appstorereviewattachmentcreaterequest.md): The request body you use to create an App Store Review Attachment.
- [AppStoreReviewAttachmentUpdateRequest](appstorereviewattachmentupdaterequest.md): The request body you use to update an App Store Review Attachment.
- [AppStoreReviewAttachmentsResponse](appstorereviewattachmentsresponse.md): The response body for endpoints that list files attached to an App Store review submission.
