> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/restrictionsresponse/profilerestrictions-data.dictionary](https://developer.apple.com/documentation/devicemanagement/restrictionsresponse/profilerestrictions-data.dictionary)

# RestrictionsResponse.ProfileRestrictions

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · tvOS 9.0+ · visionOS 1.1+ · watchOS 10.0+

A dictionary that contains restrictions from each profile.

## Declaration

```
object RestrictionsResponse.ProfileRestrictions
```

## Properties

- `ANY profile identifier` — `RestrictionsResponse.ProfileRestrictions.ANY profile identifier`: The profile identifiers. This dictionary is only available if `ProfileRestrictions` is `true` in the command.

## Topics

### Objects

- [RestrictionsResponse.ProfileRestrictions.ANY profile identifier](profilerestrictions-data.dictionary/any-profile-identifier-data.dictionary.md): A dictionary that contains profile restrictions in effect.

## See Also

### Objects

- [RestrictionsResponse.ErrorChainItem](errorchainitem.md): A dictionary that describes an error chain item.
- [RestrictionsResponse.GlobalRestrictions](globalrestrictions-data.dictionary.md): A dictionary that contains the global restrictions in effect.
