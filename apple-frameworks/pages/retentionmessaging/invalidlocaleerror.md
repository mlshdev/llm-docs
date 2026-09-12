> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/invalidlocaleerror](https://developer.apple.com/documentation/retentionmessaging/invalidlocaleerror)

# InvalidLocaleError

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Object  
**Availability:** Retention Messaging API 1.0+

An error that indicates the locale is invalid.

## Declaration

```
object InvalidLocaleError
```

## Properties

- `errorCode` — `number`: **Allowed values:** `4000164`
- `errorMessage` — `string`: **Allowed values:** `Invalid request. Locale is invalid.`

<a id="Discussion"></a>

## Discussion

For a full list of locales, see [Managing metadata in your app by using locale short codes](https://developer.apple.com/documentation/appstoreconnectapi/managing-metadata-in-your-app-by-using-locale-shortcodes).

## See Also

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
- [InvalidPerformanceTestRequestError](invalidperformancetestrequesterror.md): An error the API returns that indicates the performance test request is invalid.
- [InvalidProductIdError](invalidproductiderror.md): An error that indicates the product ID is invalid.
- [InvalidRequestIdError](invalidrequestiderror.md): An error that indicates the request ID is invalid.
- [MaximumNumberOfImagesReachedError](maximumnumberofimagesreachederror.md): An error that indicates when you reach the maximum number of uploaded images.
