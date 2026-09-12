> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/rosterapi/returns-a-users-for-an-apple-school-manager-class](https://developer.apple.com/documentation/rosterapi/returns-a-users-for-an-apple-school-manager-class)

# List users in a class

**Interface language:** Data

**Framework:** Roster API  
**Kind:** Web Service Endpoint  
**Availability:** Roster API 1.0.0+

List users in a class of an Apple School Manager organization.

## URL

```http
GET https://api-school.apple.com/rosterapi/v1/classes/{classId}/users
```

## Path Parameters

- `classId` — `string` (required): A unique class identifier. Use an identifier from the `id` field of [Class](class.md).

## Query Parameters

- `limit` — `string`: The maximum number of user records to return. The default limit is 100.
- `role` — `string`: The role of the user in the class.
  **Allowed values:** `Student`, `Instructor`
- `pageToken` — `string`: A token to retrieve the next set of records when the number of users is greater than the `limit` parameter.

## Response Codes

- `200` OK — `Users`: The request was successful.
- `401` Unauthorized: The access token was invalid.
- `403` Forbidden: Access to the requested user was forbidden.
- `404` Not Found: The server didn’t find a class with the given `classId` in the organization.
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
curl "https://api-school.apple.com/rosterapi/v1/classes/1234/users?role=Student&limit=1" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

**Response**

```json
{
  "users": [
    {
      "id": "1234",
      "email": "user@example.edu",
      "givenName": "Finny",
      "middleName": "Kim",
      "familyName": "Ho",
      "grade": "10",
      "roleLocationMapping": [
        {
          "roleName": "Student",
          "locationId": "LO:1234"
        }
      ],
      "dateCreated": "2022-04-25T16:00:45Z",
      "dateLastModified": "2022-04-25T16:00:45Z"
    }
  ],
  "moreToFollow": true,
  "nextPageToken": "3da541559918a808c2402bba5012f6c60b27661c"
}
```

## See Also

### Information about users

- [Read a user](returns-a-specific-user-in-an-apple-school-manager-organization.md): Read a user in an Apple School Manager organization.
- [User](user.md): A user in an Apple School Manager organization.
- [RoleLocation](rolelocation.md): A mapping between a role assumed by a user in an Apple School Manager organization, and the corresponding location.
- [List users](returns-a-list-of-users-in-an-apple-school-manager-organization.md): List users in an Apple School Manager organization.
- [Users](users.md): A list of users, with a token for pagination.
