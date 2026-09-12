> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-actors-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-actors-_id_)

# Read actor information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.4+

Get information about a specific actor.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/actors/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [Read Review Submission Information](get-v1-reviewsubmissions-_id_.md) response with the include [ReviewSubmission.Relationships.SubmittedByActor](reviewsubmission/relationships-data.dictionary/submittedbyactor-data.dictionary.md).

## Query Parameters

- `fields[actors]` — `[string]`: Additional fields to include for each actors resource returned by the response.
  **Allowed values:** `actorType`, `userFirstName`, `userLastName`, `userEmail`, `apiKeyId`

## Response Codes

- `200` OK — `ActorResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v1/actors/USER:2cd2a1ef-cb74-411c-a078-0ebe119ade73
```

**Response**

```json
{
  “data” : {
    “type” : “actors”,
    “id” : “USER:2cd2a1ef-cb74-411c-a078-0ebe119ade73”,
    “attributes” : {
      “actorType” : “USER”,
      “userFirstName” : “Bill”,
      “userLastName” : “James”,
      “userEmail” : “billjames2@icloud.com”,
      “apiKeyId” : null
    },
    “links” : {
      “self” : “https://api.appstoreconnect.apple.com/v1/actors/USER%3A2cd2a1ef-cb74-411c-a078-0ebe119ade73”
    }
  },
  “links” : {
    “self” : “https://api.appstoreconnect.apple.com/v1/actors/USER%3A2cd2a1ef-cb74-411c-a078-0ebe119ade73”
  }
}
```

## See Also

### Reading actor information

- [List all actors](get-v1-actors.md): Get a list of actors.
