> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betatester/attributes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/betatester/attributes-data.dictionary)

# BetaTester.Attributes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0+

Attributes that describe a beta tester resource.

## Declaration

```
object BetaTester.Attributes
```

## Properties

- `appDevices` — `[BetaTester.Attributes.AppDevices]`:
- `email` — `email`: The beta tester’s email address, used for sending beta testing invitations.
- `firstName` — `string`: The beta tester’s first name.
- `inviteType` — `BetaInviteType`: An invite type that indicates if a beta tester was invited by an email invite or used a TestFlight public link to join a beta test.
- `lastName` — `string`: The beta tester’s last name.
- `state` — `BetaTesterState`: The status of a beta tester.

## Mentioned In

- [App Store Connect API 3.5 release notes](../app-store-connect-api-3-5-release-notes.md)
- [App Store Connect API 4.2 release notes](../app-store-connect-api-4-2-release-notes.md)

## Topics

### Dictionaries

- [BetaTester.Attributes.AppDevices](attributes-data.dictionary/appdevices-data.dictionary.md): Information about devices used by the beta tester.

## See Also

### Related Documentation

- [Beta Testers](../beta-testers.md): People who can install and test prerelease builds.
- [BetaInviteType](../betainvitetype.md): String that indicates how you offer a beta invitation.
- [BetaTesterState](../betatesterstate.md): String that describes the state of a beta tester.
- [BetaTester.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

### Attributes and Relationships

- [BetaInviteType](../betainvitetype.md): String that indicates how you offer a beta invitation.
- [BetaTesterState](../betatesterstate.md): String that describes the state of a beta tester.
- [BetaTester.Relationships](relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
