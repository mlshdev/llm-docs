> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/rosterapi/returns-a-list-of-classes-for-an-apple-school-manager-organization](https://developer.apple.com/documentation/rosterapi/returns-a-list-of-classes-for-an-apple-school-manager-organization)

# List classes

**Interface language:** Data

**Framework:** Roster API  
**Kind:** Web Service Endpoint  
**Availability:** Roster API 1.0.0+

List classes in an Apple School Manager organization.

## URL

```http
GET https://api-school.apple.com/rosterapi/v1/classes
```

## Query Parameters

- `limit` — `string`: The maximum number of class records to return. The default is 100.
- `pageToken` — `string`: A token for paging through a large number of results. If the number of records in the organization is greater than the `limit` parameter, pass the token returned in [Classes](classes.md).

## Response Codes

- `200` OK — `Classes`: The request was successful.
- `401` Unauthorized: The access token was invalid.
- `403` Forbidden: Access to the list of classes was forbidden.
- `429`: The client made too many requests. The response includes an `X-Retry-After` header that indicates the number of seconds to wait before making another request.
- `500` Internal Server Error: The server encountered an internal error.

## Mentioned In

- [Obtaining information about people and classes](obtaining-information-about-people-and-classes.md)

<a id="Discussion"></a>

## Discussion

<a id="Example"></a>

### Example

**Request**

```
curl "https://api-school.apple.com/rosterapi/v1/classes?limit=1" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}"

```

**Response**

```json
{
  "classes": [
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
      "dateLastModified": "2021-07-26T11:11:51Z"
    }
  ],
  "moreToFollow": true,
  "nextPageToken": "3da541559918a808c2402bba5012f6c60b27661c"
}
```

## See Also

### Information about classes

- [Read a class](returns-a-specific-class-in-an-apple-school-manager-organization_.md): Read a class from an Apple School Manager organization.
- [Class](class.md): A class in an Apple School Manager organization.
- [Classes](classes.md): A list of classes, with a token for pagination.
