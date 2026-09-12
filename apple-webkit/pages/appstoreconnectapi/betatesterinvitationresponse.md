> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betatesterinvitationresponse](https://developer.apple.com/documentation/appstoreconnectapi/betatesterinvitationresponse)

# BetaTesterInvitationResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

The response body for the endpoint that sends a TestFlight invitation to a beta tester.

## Declaration

```
object BetaTesterInvitationResponse
```

## Properties

- `data` — `BetaTesterInvitation` (required): The resource data.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.

## See Also

### Related Documentation

- [Send an invitation to a beta tester](post-v1-betatesterinvitations.md): Send or resend an invitation to a beta tester to test a specified app.

### Objects

- [BetaTesterInvitation](betatesterinvitation.md): A pending email invitation sent to recruit someone as a TestFlight beta tester for an app.
- [BetaTesterInvitationCreateRequest](betatesterinvitationcreaterequest.md): The request body you use to create a Beta Tester Invitation.
