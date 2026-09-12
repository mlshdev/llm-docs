> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/accountdetail](https://developer.apple.com/documentation/devicemanagement/accountdetail)

# AccountDetail

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** Device Assignment Services 5.0+

The response that contains the details for an account.

## Declaration

```
object AccountDetail
```

## Properties

- `admin_id` — `string`: The Apple Account of the person who generated the currently in-use tokens.
- `facilitator_id` — `string`: The legacy equivalent to the `admin_id` key. This key is deprecated and may not be returned in future responses.
- `org_address` — `string`: The organization address.
- `org_email` — `string`: The organization email address.
- `org_id` — `string`: The customer ID. This key is available only in protocol version 3 and later.
- `org_id_hash` — `string`: The SHA hash of an organization identifier. This helps Mobile Device Management (MDM) server match the hash with the `organizationIdHash` key in the [Client Configuration](client-configuration.md) API. This key is available only in protocol version 3 and later.
- `org_name` — `string`: The organization name.
- `org_phone` — `string`: The organization phone.
- `org_type` — `string`: The type of organization. Possible values are `edu` or `org`. This key is available only in protocol version 3 and later.
  **Allowed values:** `edu`, `org`, `tvprovider`
- `org_version` — `string`: Possible values: `v1` or `v2`. `v1` is for Apple Deployment Programs (like Automated Device Enrollment or Volume Purchase Program) organizations and `v2` is for Apple School Manager organizations. Currently `v2` is applicable only to educational organizations. This key is available only in protocol version 3 and later.
- `server_name` — `string`: The name of the MDM server.
- `server_uuid` — `string`: The system-generated server identifier.
- `urls` — `[Url]`: The list of URLs available in the MDM service. This key is valid in X-Server-Protocol-Version 3 and later.
