> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/badrequesttoomanybulletpointserror](https://developer.apple.com/documentation/retentionmessaging/badrequesttoomanybulletpointserror)

# BadRequestTooManyBulletPointsError

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Object  
**Availability:** Retention Messaging API 1.4+

An error that indicates there are too many bullet points.

## Declaration

```
object BadRequestTooManyBulletPointsError
```

## Properties

- `errorCode` — `number`: **Allowed values:** `4000218`
- `errorMessage` — `string`: **Allowed values:** `Invalid request. The number of bullet points is too many.`

## See Also

### Errors for bad requests

- [BadRequestAboveImageRequiresAnImageError](badrequestaboveimagerequiresanimageerror.md): An error that indicates that no image object is included, but the request indicates that the header should be placed above the image.
- [BadRequestAppTransactionIdForUnsupportedEndpointError](badrequestapptransactionidforunsupportedendpointerror.md): An error that indicates the endpoint doesn’t support app transaction identifiers instead of transaction identifiers.
- [BadRequestBulletPointTextTooLongError](badrequestbulletpointtexttoolongerror.md): An error that indicates the text for a bullet point is too long.
- [BadRequestImageSizeError](badrequestimagesizeerror.md): An error that indicates the image size provided is invalid.
- [BadRequestRealtimeUrlError](badrequestrealtimeurlerror.md): An error that indicates the URL is invalid.
- [BadRequestTransactionIdError](badrequesttransactioniderror.md): An error that indicates the transaction ID is invalid.
- [BadRequestTransactionIdNotOtidError](badrequesttransactionidnototiderror.md): An error that indicates the transaction ID provided is not an original transaction ID.
- [BadRequestTransactionIdNotSupportedForFamilySharingError](badrequesttransactionidnotsupportedforfamilysharingerror.md): An error that indicates that the endpoint doesn’t support transactions for products the customer receives through Family Sharing.
