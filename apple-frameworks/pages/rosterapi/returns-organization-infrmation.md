> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/rosterapi/returns-organization-infrmation](https://developer.apple.com/documentation/rosterapi/returns-organization-infrmation)

# Read the organization

**Interface language:** Data

**Framework:** Roster API  
**Kind:** Web Service Endpoint  
**Availability:** Roster API 1.0.0+

Returns information about the Apple School Manager organization.

## URL

```http
GET https://api-school.apple.com/rosterapi/v1/organization
```

## Response Codes

- `200` OK — `Organization`: The request was successful.
- `401` Unauthorized: The access token was invalid.
- `403` Forbidden: You don’t have permission to access the organization information.
- `404` Not Found: The server didn’t find the organization information.
- `429`: The client made too many requests. The response includes an `X-Retry-After` header that indicates the number of seconds to wait before making another request.
- `500` Internal Server Error: The server encountered an internal error.

## Mentioned In

- [Integrating with Roster API and Sign in with Apple](integrating-with-roster-api-and-sign-in-with-apple.md)

<a id="Discussion"></a>

## Discussion

Access to the `organization` resource requires authorization to either the `edu.users.read` or `edu.classes.read` scope.

<a id="Example"></a>

### Example

**Request**

```
curl "https://api-school.apple.com/rosterapi/v1/organization" -H "Authorization: Bearer ${TOKEN}"
```

**Response**

```json
{
  "id":"1234",
  "type":"EDUCATION",
  "name":"Example Organization",
  "domains":[{"name":"example.com","isVerified":false}],
  "dateCreated":"2022-10-11T01:53:02Z",
  "dateLastModified":"2022-10-11T01:53:02Z"
}
```

## See Also

### Information about the organization

- [Organization](organization.md): Information about an Apple School Manager organization.
- [Domain](domain.md): A DNS domain name associated with an Apple School Manager organization.
