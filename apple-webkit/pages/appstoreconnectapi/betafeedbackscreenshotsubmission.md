> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betafeedbackscreenshotsubmission](https://developer.apple.com/documentation/appstoreconnectapi/betafeedbackscreenshotsubmission)

# BetaFeedbackScreenshotSubmission

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

A screenshot and feedback note submitted by a TestFlight beta tester while testing a specific build.

## Declaration

```
object BetaFeedbackScreenshotSubmission
```

## Properties

- `attributes` — `BetaFeedbackScreenshotSubmission.Attributes`: Attributes that describe a `BetaFeedbackScreenshotSubmission` resource.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `relationships` — `BetaFeedbackScreenshotSubmission.Relationships`:
- `type` — `string` (required): The resource type.
  **Allowed values:** `betaFeedbackScreenshotSubmissions`

## Topics

### Dictionaries

- [BetaFeedbackScreenshotSubmission.Attributes](betafeedbackscreenshotsubmission/attributes-data.dictionary.md): Attributes that describe a `BetaFeedbackScreenshotSubmission` resource.
- [BetaFeedbackScreenshotSubmission.Relationships](betafeedbackscreenshotsubmission/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [BetaFeedbackScreenshotSubmissionResponse](betafeedbackscreenshotsubmissionresponse.md): A response containing a single screenshot and feedback note submitted by a TestFlight beta tester.
- [BetaFeedbackScreenshotSubmissionsResponse](betafeedbackscreenshotsubmissionsresponse.md)
- [BetaFeedbackScreenshotImage](betafeedbackscreenshotimage.md)
