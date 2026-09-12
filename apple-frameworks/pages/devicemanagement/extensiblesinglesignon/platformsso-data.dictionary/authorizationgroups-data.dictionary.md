> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/extensiblesinglesignon/platformsso-data.dictionary/authorizationgroups-data.dictionary](https://developer.apple.com/documentation/devicemanagement/extensiblesinglesignon/platformsso-data.dictionary/authorizationgroups-data.dictionary)

# ExtensibleSingleSignOn.PlatformSSO.AuthorizationGroups

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 14.0+

The pairing of Authorization Rights to group names.

## Declaration

```
object ExtensibleSingleSignOn.PlatformSSO.AuthorizationGroups
```

## Properties

- `ANY` — `string`: The key is an access right value, the value is the group to be associated with that access right.

## See Also

### Objects

- [ExtensibleSingleSignOn.PlatformSSO.TokenToUserMapping](tokentousermapping-data.dictionary.md): The attribute mapping to use when creating users, or for authorization.
