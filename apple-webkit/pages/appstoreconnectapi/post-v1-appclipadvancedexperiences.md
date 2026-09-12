> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-appclipadvancedexperiences](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-appclipadvancedexperiences)

# Create an advanced app clip experience

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Configure a new advanced App Clip experience.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/appClipAdvancedExperiences
```

## HTTP Body

Content type: `application/json`

Type: `AppClipAdvancedExperienceCreateRequest`

The request body you use to create a new advanced App Clip experience.

## Response Codes

- `201` Created — `AppClipAdvancedExperienceResponse`: The request completed successfully and a new advanced App Clip experience has been created.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting and Managing Advanced App Clip Experiences

- [Read advanced app clip experience information](get-v1-appclipadvancedexperiences-_id_.md): Get information about a specific advanced App Clip experience.
- [Modify and delete an advanced app clip experience](patch-v1-appclipadvancedexperiences-_id_.md): Update and delete an existing advanced App Clip experience.
