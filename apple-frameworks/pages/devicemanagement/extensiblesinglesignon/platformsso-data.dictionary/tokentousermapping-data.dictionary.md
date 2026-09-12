> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/extensiblesinglesignon/platformsso-data.dictionary/tokentousermapping-data.dictionary](https://developer.apple.com/documentation/devicemanagement/extensiblesinglesignon/platformsso-data.dictionary/tokentousermapping-data.dictionary)

# ExtensibleSingleSignOn.PlatformSSO.TokenToUserMapping

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 14.0+

The attribute mapping to use when creating users, or for authorization.

## Declaration

```
object ExtensibleSingleSignOn.PlatformSSO.TokenToUserMapping
```

## Properties

- `AccountName` — `string`: The claim name to use for the user’s account name.
- `FullName` — `string`: The claim name to use for the user’s full name.

## See Also

### Objects

- [ExtensibleSingleSignOn.PlatformSSO.AuthorizationGroups](authorizationgroups-data.dictionary.md): The pairing of Authorization Rights to group names.
