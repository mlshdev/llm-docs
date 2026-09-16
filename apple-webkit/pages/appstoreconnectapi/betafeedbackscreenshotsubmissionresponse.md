> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/betafeedbackscreenshotsubmissionresponse

# BetaFeedbackScreenshotSubmissionResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

A response containing a single screenshot and feedback note submitted by a TestFlight beta tester.

## Declaration

```
object BetaFeedbackScreenshotSubmissionResponse
```

## Properties

- `data` — `BetaFeedbackScreenshotSubmission` (required):
- `included` — `[*]`: **Allowed types:** `BetaTester`, `Build`
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [BetaFeedbackScreenshotSubmission](betafeedbackscreenshotsubmission.md): A screenshot and feedback note submitted by a TestFlight beta tester while testing a specific build.
- [BetaFeedbackScreenshotSubmissionsResponse](betafeedbackscreenshotsubmissionsresponse.md)
- [BetaFeedbackScreenshotImage](betafeedbackscreenshotimage.md)
