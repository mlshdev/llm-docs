> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/restrictionsresponse/globalrestrictions-data.dictionary](https://developer.apple.com/documentation/devicemanagement/restrictionsresponse/globalrestrictions-data.dictionary)

# RestrictionsResponse.GlobalRestrictions

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · tvOS 9.0+ · visionOS 1.1+ · watchOS 10.0+

A dictionary that contains the global restrictions in effect.

## Declaration

```
object RestrictionsResponse.GlobalRestrictions
```

## Properties

- `intersection` — `RestrictionsResponse.GlobalRestrictions.Intersection`: A dictionary of intersected profile restrictions. Intersected restrictions indicate that new restrictions can only reduce the number of strings in the set.
- `restrictedBool` — `RestrictionsResponse.GlobalRestrictions.RestrictedBool`: A dictionary of Boolean profile restrictions.
- `restrictedValue` — `RestrictionsResponse.GlobalRestrictions.RestrictedValue`: A dictionary of numeric profile restrictions.
- `union` — `RestrictionsResponse.GlobalRestrictions.Union`: A dictionary of unioned profile restrictions. Unioned restrictions indicate that new restrictions can add to the set.

## Topics

### Objects

- [RestrictionsResponse.GlobalRestrictions.Intersection](globalrestrictions-data.dictionary/intersection-data.dictionary.md): A dictionary that contains intersected restrictions.
- [RestrictionsResponse.GlobalRestrictions.RestrictedBool](globalrestrictions-data.dictionary/restrictedbool-data.dictionary.md): A dictionary that contains Boolean restrictions.
- [RestrictionsResponse.GlobalRestrictions.RestrictedValue](globalrestrictions-data.dictionary/restrictedvalue-data.dictionary.md): A dictionary that contains numeric restrictions.
- [RestrictionsResponse.GlobalRestrictions.Union](globalrestrictions-data.dictionary/union-data.dictionary.md): A dictionary that contains unioned restrictions.

## See Also

### Objects

- [RestrictionsResponse.ErrorChainItem](errorchainitem.md): A dictionary that describes an error chain item.
- [RestrictionsResponse.ProfileRestrictions](profilerestrictions-data.dictionary.md): A dictionary that contains restrictions from each profile.
