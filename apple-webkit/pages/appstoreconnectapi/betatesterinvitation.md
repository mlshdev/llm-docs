> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/betatesterinvitation

# BetaTesterInvitation

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

A pending email invitation sent to recruit someone as a TestFlight beta tester for an app.

## Declaration

```
object BetaTesterInvitation
```

## Properties

- `id` — `string` (required): The opaque resource ID that uniquely identifies the resource.
- `type` — `string` (required): The resource type.
  **Allowed values:** `betaTesterInvitations`
- `links` — `ResourceLinks`: Navigational links that include the self-link.

## See Also

### Objects

- [BetaTesterInvitationCreateRequest](betatesterinvitationcreaterequest.md): The request body you use to create a Beta Tester Invitation.
- [BetaTesterInvitationResponse](betatesterinvitationresponse.md): The response body for the endpoint that sends a TestFlight invitation to a beta tester.
