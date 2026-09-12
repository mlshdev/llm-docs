> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betafeedbackscreenshotsubmissionsresponse](https://developer.apple.com/documentation/appstoreconnectapi/betafeedbackscreenshotsubmissionsresponse)

# BetaFeedbackScreenshotSubmissionsResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 3.6+

## Declaration

```
object BetaFeedbackScreenshotSubmissionsResponse
```

## Properties

- `data` — `[BetaFeedbackScreenshotSubmission]` (required):
- `included` — `[*]`: **Allowed types:** `BetaTester`, `Build`
- `links` — `PagedDocumentLinks` (required):
- `meta` — `PagingInformation`:

## See Also

### Objects

- [BetaFeedbackScreenshotSubmission](betafeedbackscreenshotsubmission.md): A screenshot and feedback note submitted by a TestFlight beta tester while testing a specific build.
- [BetaFeedbackScreenshotSubmissionResponse](betafeedbackscreenshotsubmissionresponse.md): A response containing a single screenshot and feedback note submitted by a TestFlight beta tester.
- [BetaFeedbackScreenshotImage](betafeedbackscreenshotimage.md)
