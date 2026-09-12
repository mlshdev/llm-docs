> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appstorereviewattachment](https://developer.apple.com/documentation/appstoreconnectapi/appstorereviewattachment)

# AppStoreReviewAttachment

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

A file attached to an App Store review submission to provide reviewers with additional context, such as demo credentials or notes.

## Declaration

```
object AppStoreReviewAttachment
```

## Properties

- `attributes` — `AppStoreReviewAttachment.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `AppStoreReviewAttachment.Relationships`:
- `type` — `string` (required): **Allowed values:** `appStoreReviewAttachments`

## Topics

### Objects

- [AppStoreReviewAttachment.Attributes](appstorereviewattachment/attributes-data.dictionary.md): Attributes that describe an App Store Review Attachments resource.
- [AppStoreReviewAttachment.Relationships](appstorereviewattachment/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [AppStoreReviewAttachmentCreateRequest](appstorereviewattachmentcreaterequest.md): The request body you use to create an App Store Review Attachment.
- [AppStoreReviewAttachmentResponse](appstorereviewattachmentresponse.md): The response body for endpoints that create, read, or modify a file attached to an App Store review submission.
- [AppStoreReviewAttachmentUpdateRequest](appstorereviewattachmentupdaterequest.md): The request body you use to update an App Store Review Attachment.
- [AppStoreReviewAttachmentsResponse](appstorereviewattachmentsresponse.md): The response body for endpoints that list files attached to an App Store review submission.
