> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/rosterapi/returns-a-specific-class-in-an-apple-school-manager-organization.](https://developer.apple.com/documentation/rosterapi/returns-a-specific-class-in-an-apple-school-manager-organization.)

# Read a class

**Interface language:** Data

**Framework:** Roster API  
**Kind:** Web Service Endpoint  
**Availability:** Roster API 1.0.0+

Read a class from an Apple School Manager organization.

## URL

```http
GET https://api-school.apple.com/rosterapi/v1/classes/{classId}
```

## Path Parameters

- `classId` — `string` (required): The identifier from the class. Use the `id` field from the [Class](class.md) object.

## Response Codes

- `200` OK — `Class`: The request was successful.
- `401` Unauthorized: The access token was invalid.
- `403` Forbidden: Access to the requested class was forbidden.
- `404` Not Found: The server didn’t find a class with the given `classId` in the organization.
- `429`: The client made too many requests. The response includes an `X-Retry-After` header that indicates the number of seconds to wait before making another request.
- `500` Internal Server Error: The server encountered an internal error.

<a id="Discussion"></a>

## Discussion

<a id="Example"></a>

### Example

**Request**

```
curl "https://api-school.apple.com/rosterapi/v1/classes/1234" \
    -H "Authorization: Bearer ${TOKEN}"
```

**Response**

```json
{
  "id": "1234",
  "name": "Algebra",
  "number": "101",
  "room": "PL-213",
  "locationId": "LO:1234",
  "instructorIds": [
    "1234",
    "2345"
  ],
  "studentIds": [
    "54321",
    "54322",
    "54323"
  ],
  "dateCreated": "2021-07-26T11:11:51Z",
  "dateLastModified”: "2021-07-26T11:11:51Z"
}
```

## See Also

### Information about classes

- [Class](class.md): A class in an Apple School Manager organization.
- [List classes](returns-a-list-of-classes-for-an-apple-school-manager-organization.md): List classes in an Apple School Manager organization.
- [Classes](classes.md): A list of classes, with a token for pagination.
