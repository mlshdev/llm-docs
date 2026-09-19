> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/extensiblessoplatformsso_authorization_authorizationgroupsobject

# ExtensibleSSOPlatformSSO_Authorization_AuthorizationGroupsObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 27.0+

The pairing of Authorization Rights to group names. When using this, the system updates the Authorization Right to use the group.

## Declaration

```
object ExtensibleSSOPlatformSSO_Authorization_AuthorizationGroupsObject
```

## Properties

- `ANY` — `string`: The key is an access right value, the value is the group to be associated with that access right.
