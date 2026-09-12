> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/error-codes](https://developer.apple.com/documentation/retentionmessaging/error-codes)

# Error codes

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** API Collection

Understand the error codes that Retention Messaging API responses return.

## Topics

### Errors

- [AltTextTooLongError](alttexttoolongerror.md): An error that indicates the alternative text for an image is too long.
- [BodyTooLongError](bodytoolongerror.md): An error that indicates the body text is too long.
- [DefaultMessageNotFoundError](defaultmessagenotfounderror.md): An error that indicates a default message isn’t configured.
- [ExistingPerformanceTestRunError](existingperformancetestrunerror.md): An error that indicates an error with an existing test.
- [ForbiddenNoPassingTestError](forbiddennopassingtesterror.md): An error that indicates that passing a performance test is required before you can set a URL for the production environment.
- [HeaderTooLongError](headertoolongerror.md): An error that indicates the header text is too long.
- [ImageAlreadyExistsError](imagealreadyexistserror.md): An error that indicates the image identifier already exists.
- [ImageInUseError](imageinuseerror.md): An error that indicates the image is currently in use as part of a message, so you can’t delete it.
- [ImageNotApprovedError](imagenotapprovederror.md): An error that indicates the image isn’t in the approved state, so you can’t configure it as part of a default message.
- [ImageNotFoundError](imagenotfounderror.md): An error that indicates the system can’t find the image identifier.
- [InvalidImageError](invalidimageerror.md): An error that indicates the image that’s uploading is invalid.
- [InvalidLocaleError](invalidlocaleerror.md): An error that indicates the locale is invalid.
- [InvalidPerformanceTestRequestError](invalidperformancetestrequesterror.md): An error the API returns that indicates the performance test request is invalid.
- [InvalidProductIdError](invalidproductiderror.md): An error that indicates the product ID is invalid.
- [InvalidRequestIdError](invalidrequestiderror.md): An error that indicates the request ID is invalid.
- [MaximumNumberOfImagesReachedError](maximumnumberofimagesreachederror.md): An error that indicates when you reach the maximum number of uploaded images.
- [MaximumNumberOfMessagesReachedError](maximumnumberofmessagesreachederror.md): An error that indicates when you reach the maximum number of uploaded messages.
- [MessageAlreadyExistsError](messagealreadyexistserror.md): An error that indicates the message identifier already exists.
- [MessageNotApprovedError](messagenotapprovederror.md): An error that indicates the message isn’t in the approved state, so you can’t configure it as a default message.
- [MessageNotFoundError](messagenotfounderror.md): An error that indicates the system can’t find the message identifier.
- [PerformanceTestRunNotFoundError](performancetestrunnotfounderror.md): An error the API returns if the service can’t find the specified test run.
- [RateLimitExceededError](ratelimitexceedederror.md): An error that indicates the request exceeded the rate limit.
- [RealtimeUrlNotFoundError](realtimeurlnotfounderror.md): An error that indicates that the URL for your endpoint isn’t configured.

### Errors for bad requests

- [BadRequestAboveImageRequiresAnImageError](badrequestaboveimagerequiresanimageerror.md): An error that indicates that no image object is included, but the request indicates that the header should be placed above the image.
- [BadRequestAppTransactionIdForUnsupportedEndpointError](badrequestapptransactionidforunsupportedendpointerror.md): An error that indicates the endpoint doesn’t support app transaction identifiers instead of transaction identifiers.
- [BadRequestBulletPointTextTooLongError](badrequestbulletpointtexttoolongerror.md): An error that indicates the text for a bullet point is too long.
- [BadRequestImageSizeError](badrequestimagesizeerror.md): An error that indicates the image size provided is invalid.
- [BadRequestRealtimeUrlError](badrequestrealtimeurlerror.md): An error that indicates the URL is invalid.
- [BadRequestTooManyBulletPointsError](badrequesttoomanybulletpointserror.md): An error that indicates there are too many bullet points.
- [BadRequestTransactionIdError](badrequesttransactioniderror.md): An error that indicates the transaction ID is invalid.
- [BadRequestTransactionIdNotOtidError](badrequesttransactionidnototiderror.md): An error that indicates the transaction ID provided is not an original transaction ID.
- [BadRequestTransactionIdNotSupportedForFamilySharingError](badrequesttransactionidnotsupportedforfamilysharingerror.md): An error that indicates that the endpoint doesn’t support transactions for products the customer receives through Family Sharing.

### Errors to retry

- [GeneralInternalError](generalinternalerror.md): An error that indicates a general internal error.
