> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/betatesterstate](https://developer.apple.com/documentation/appstoreconnectapi/betatesterstate)

# BetaTesterState

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Type  
**Availability:** App Store Connect API 3.5+

String that describes the state of a beta tester.

## Declaration

```
string BetaTesterState
```

## Possible Values

- `NOT_INVITED`: The beta tester is not currently invited.
- `INVITED`: The build of your app is eligible for submission and release on the App Store.
- `ACCEPTED`: The beta tester has accepted an invite to test a build.
- `INSTALLED`: The beta tester has installed a build.
- `REVOKED`: The beta tester chose to stop testing, or the beta tester was removed from the app. In both cases, their installed build is not expired. Once the build expires, the system deletes the resource.

## See Also

### Attributes and Relationships

- [BetaTester.Attributes](betatester/attributes-data.dictionary.md): Attributes that describe a beta tester resource.
- [BetaInviteType](betainvitetype.md): String that indicates how you offer a beta invitation.
- [BetaTester.Relationships](betatester/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.
