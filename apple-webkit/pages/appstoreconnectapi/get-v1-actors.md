> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-actors](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-actors)

# List all actors

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.4+

Get a list of actors.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/actors
```

## Query Parameters

- `fields[actors]` — `[string]`: Additional fields to include for each actors resource returned by the response.
  **Allowed values:** `actorType`, `userFirstName`, `userLastName`, `userEmail`, `apiKeyId`
- `filter[id]` — `[string]` (required): Filter the returned actors by actor ID.
- `limit` — `integer`: The maximum number of actors resources to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `ActorsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

This endpoint supports multiple id’s in the filter paramenter.

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://api.appstoreconnect.apple.com/v1/actors?filter%5Bid%5D=USER%3A2cd2a1ef-cb74-411c-a078-0ebe119ade73,USER%3A83f7ddc0-64d6-4e4f-a5d9-51d74a8009a3
```

**Response**

```json
{  “data” : [ {
    “type” : “actors”,
    “id” : “USER:83f7ddc0-64d6-4e4f-a5d9-51d74a8009a3”,
    “attributes” : {
      “actorType” : “USER”,
      “userFirstName” : “Maria”,
      “userLastName” : “Ruiz”,
      “userEmail” : “mruiz2@icloud.com”,
      “apiKeyId” : null
    },
    “links” : {
      “self” : “https://api.appstoreconnect.apple.com/v1/actors/USER%3A83f7ddc0-64d6-4e4f-a5d9-51d74a8009a3”
    }
  }, {
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
  } ],
  “links” : {
    “self” : “https://api.appstoreconnect.apple.com/v1/actors?filter%5Bid%5D=USER%3A2cd2a1ef-cb74-411c-a078-0ebe119ade73%2CUSER%3A83f7ddc0-64d6-4e4f-a5d9-51d74a8009a3”
  },
  “meta” : {
    “paging” : {
      “total” : 2,
      “limit” : 50
    }
  }
}

```

## See Also

### Reading actor information

- [Read actor information](get-v1-actors-_id_.md): Get information about a specific actor.
