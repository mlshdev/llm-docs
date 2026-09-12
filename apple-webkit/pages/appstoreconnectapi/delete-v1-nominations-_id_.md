> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-nominations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-nominations-_id_)

# Delete a Featuring Nomination

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.8+

Remove a specific featuring nomination.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/nominations/{id}
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="overview"></a>

## Overview

- id: An opaque resource ID that uniquely identifies the resource. Obtain the nomination resource ID from the [List Nominations](get-v1-nominations.md) response.

## See Also

### Managing nominations

- [Create a Featuring Nomination](post-v1-nominations.md): Tell Apple about your upcoming app or feature.
- [List Nominations](get-v1-nominations.md): Get all featuring nominations.
- [Read Details for a Nomination](get-v1-nominations-_id_.md): Get information for a specific featuring nomination.
- [Modify a Nomination](patch-v1-nominations-_id_.md): Update a specific featuring nomination.
