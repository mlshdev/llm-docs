> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/list-users](https://developer.apple.com/documentation/enterpriseprogramapi/list-users)

# List Users

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Get a list of the users on your team.

## URL

```http
GET https://api.enterprise.developer.apple.com/v1/users
```

## Query Parameters

- `fields[users]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `firstName`, `lastName`, `roles`, `username`
- `limit` — `integer`: Number of resources to return.
  **Maximum:** `200`
- `sort` — `[string]`: Attributes by which to sort.
  **Allowed values:** `lastName`, `-lastName`, `username`, `-username`
- `filter[roles]` — `[string]`: Attributes, relationships, and IDs by which to filter.
  **Allowed values:** `ADMIN`, `ACCOUNT_HOLDER`, `DEVELOPER`
- `filter[username]` — `[string]`: Attributes, relationships, and IDs by which to filter.

## Response Codes

- `200` OK — `UsersResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://qa.api.adep.ase.apple.com/v1/users?limit=2
```

**Response**

```json
{
"data": [
{
"type": "users",
"id": "a514773b-b4ed-4564-9d97-6215bda0662b",
"attributes": {
"username": "username",
"firstName": "Firstname",
"lastName": "Lastname",
"roles": [
  "DEVELOPER"
]
},
"links": {
"self": "https://qa.api.adep.ase.apple.com/v1/users/a514773b-b4ed-4564-9d97-6215bda0662b"
}
},
{
"type": "users",
"id": "c26a77a6-b906-4191-90b8-4f181fa2c7d3",
"attributes": {
"username": "username",
"firstName": "Firstname",
"lastName": "Lastname",
"roles": [
  "DEVELOPER"
]
},
"links": {
"self": "https://qa.api.adep.ase.apple.com/v1/users/c26a77a6-b906-4191-90b8-4f181fa2c7d3"
}
}
],
"links": {
"self": "https://qa.api.adep.ase.apple.com/v1/users?limit=2",
"next": "https://qa.api.adep.ase.apple.com/v1/users?cursor=Ag.FcUD4A&limit=2"
},
"meta": {
"paging": {
"total": 150,
"limit": 2
}
}
}
```

## See Also

### Getting User Information

- [Read User Information](read-user-information.md): Get information about a user on your team, such as name, roles, and app visibility.
