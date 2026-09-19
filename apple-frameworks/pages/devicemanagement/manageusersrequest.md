> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/manageusersrequest

# ManageUsersRequest

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** VPP License Management 2.0+

The request for user management.

## Declaration

```
object ManageUsersRequest
```

## Properties

- `users` — `[RequestUser]` (required): The set of users to manage.

## Mentioned In

- [Managing users](managing-users.md)

## Topics

### Objects and Data Types

- [RequestUser](requestuser.md): The requested user in the organization.

## See Also

### Request and Response

- [EventResponse](eventresponse.md): The response that contains the event identifier.
- [ErrorResponse](errorresponse.md): The response that contains the error that occurs.
