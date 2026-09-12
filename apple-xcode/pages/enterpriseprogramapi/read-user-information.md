> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/read-user-information](https://developer.apple.com/documentation/enterpriseprogramapi/read-user-information)

# Read User Information

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Get information about a user on your team, such as name, roles, and app visibility.

## URL

```http
GET https://api.enterprise.developer.apple.com/v1/users/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## Query Parameters

- `fields[users]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `firstName`, `lastName`, `roles`, `username`

## Response Codes

- `200` OK — `UserResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
https://qa.api.adep.ase.apple.com/v1/users/345bb7dc-a653-43ff-acee-a4817cd28479
```

**Response**

```json
{
"data": {
"type": "users",
"id": "345bb7dc-a653-43ff-acee-a4817cd28479",
"attributes": {
"username": "ifuko+6env3@apple.com",
"firstName": "Ildiko",
"lastName": "Ln6Env3",
"roles": [
"ADMIN"
]
},
"links": {
"self": "https://qa.api.adep.ase.apple.com/v1/users/345bb7dc-a653-43ff-acee-a4817cd28479"
}
},
"links": {
"self": "https://qa.api.adep.ase.apple.com/v1/users/345bb7dc-a653-43ff-acee-a4817cd28479"
}
}
```

## See Also

### Getting User Information

- [List Users](list-users.md): Get a list of the users on your team.
