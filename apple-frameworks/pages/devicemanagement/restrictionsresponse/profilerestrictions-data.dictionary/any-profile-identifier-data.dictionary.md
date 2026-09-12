> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/restrictionsresponse/profilerestrictions-data.dictionary/any-profile-identifier-data.dictionary](https://developer.apple.com/documentation/devicemanagement/restrictionsresponse/profilerestrictions-data.dictionary/any-profile-identifier-data.dictionary)

# RestrictionsResponse.ProfileRestrictions.ANY profile identifier

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · tvOS 9.0+ · visionOS 1.1+ · watchOS 10.0+

A dictionary that contains profile restrictions in effect.

## Declaration

```
object RestrictionsResponse.ProfileRestrictions.ANY profile identifier
```

## Properties

- `intersection` — `RestrictionsResponse.ProfileRestrictions.ANY profile identifier.Intersection`: A dictionary of intersected profile restrictions. Intersected restrictions indicate that new restrictions can only reduce the number of strings in the set.
- `restrictedBool` — `RestrictionsResponse.ProfileRestrictions.ANY profile identifier.RestrictedBool`: A dictionary of Boolean profile restrictions.
- `restrictedValue` — `RestrictionsResponse.ProfileRestrictions.ANY profile identifier.RestrictedValue`: A dictionary of numeric profile restrictions.
- `union` — `RestrictionsResponse.ProfileRestrictions.ANY profile identifier.Union`: A dictionary of unioned profile restrictions. Unioned restrictions indicate that new restrictions can add to the set.

## Topics

### Objects

- [RestrictionsResponse.ProfileRestrictions.ANY profile identifier.Intersection](any-profile-identifier-data.dictionary/intersection-data.dictionary.md): A dictionary that contains intersected restrictions.
- [RestrictionsResponse.ProfileRestrictions.ANY profile identifier.RestrictedBool](any-profile-identifier-data.dictionary/restrictedbool-data.dictionary.md): A dictionary that contains Boolean restrictions.
- [RestrictionsResponse.ProfileRestrictions.ANY profile identifier.RestrictedValue](any-profile-identifier-data.dictionary/restrictedvalue-data.dictionary.md): A dictionary that contains numeric restrictions.
- [RestrictionsResponse.ProfileRestrictions.ANY profile identifier.Union](any-profile-identifier-data.dictionary/union-data.dictionary.md): A dictionary that contains unioned restrictions.
