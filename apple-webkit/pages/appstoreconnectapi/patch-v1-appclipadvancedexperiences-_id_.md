> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-appclipadvancedexperiences-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-appclipadvancedexperiences-_id_)

# Modify and delete an advanced app clip experience

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.6+

Update and delete an existing advanced App Clip experience.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/appClipAdvancedExperiences/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the advanced App Clip experience resource ID from the [List all advanced app clip experiences for an app clip](get-v1-appclips-_id_-appclipadvancedexperiences.md) response.

## HTTP Body

Content type: `application/json`

Type: `AppClipAdvancedExperienceUpdateRequest`

The request body you use to update an advanced App Clip experience.

## Response Codes

- `200` OK — `AppClipAdvancedExperienceResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting and Managing Advanced App Clip Experiences

- [Read advanced app clip experience information](get-v1-appclipadvancedexperiences-_id_.md): Get information about a specific advanced App Clip experience.
- [Create an advanced app clip experience](post-v1-appclipadvancedexperiences.md): Configure a new advanced App Clip experience.
