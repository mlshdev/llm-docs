> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/existingperformancetestrunerror](https://developer.apple.com/documentation/retentionmessaging/existingperformancetestrunerror)

# ExistingPerformanceTestRunError

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Object  
**Availability:** Retention Messaging API 1.3+

An error that indicates an error with an existing test.

## Declaration

```
object ExistingPerformanceTestRunError
```

## Properties

- `errorCode` — `number`: **Allowed values:** `4000213`
- `errorMessage` — `string`: **Allowed values:** `Invalid request. Existing performance test run.`

<a id="Discussion"></a>

## Discussion

This error indicates the service is already processing a test with this ID.

## See Also

### Errors

- [AltTextTooLongError](alttexttoolongerror.md): An error that indicates the alternative text for an image is too long.
- [BodyTooLongError](bodytoolongerror.md): An error that indicates the body text is too long.
- [DefaultMessageNotFoundError](defaultmessagenotfounderror.md): An error that indicates a default message isn’t configured.
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
