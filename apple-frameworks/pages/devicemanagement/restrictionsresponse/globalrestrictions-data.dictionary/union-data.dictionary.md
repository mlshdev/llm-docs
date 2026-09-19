> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/restrictionsresponse/globalrestrictions-data.dictionary/union-data.dictionary

# RestrictionsResponse.GlobalRestrictions.Union

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · tvOS 9.0+ · visionOS 1.1+ · watchOS 10.0+

A dictionary that contains unioned restrictions.

## Declaration

```
object RestrictionsResponse.GlobalRestrictions.Union
```

## Properties

- `ANY restriction name` — `RestrictionsResponse.GlobalRestrictions.Union.ANY restriction name`: The unioned restriction parameters.

## Topics

### Objects

- [RestrictionsResponse.GlobalRestrictions.Union.ANY restriction name](union-data.dictionary/any-restriction-name-data.dictionary.md): A dictionary that contains unioned restriction parameters.

## See Also

### Objects

- [RestrictionsResponse.GlobalRestrictions.Intersection](intersection-data.dictionary.md): A dictionary that contains intersected restrictions.
- [RestrictionsResponse.GlobalRestrictions.RestrictedBool](restrictedbool-data.dictionary.md): A dictionary that contains Boolean restrictions.
- [RestrictionsResponse.GlobalRestrictions.RestrictedValue](restrictedvalue-data.dictionary.md): A dictionary that contains numeric restrictions.
