> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/tverror/1627388-userinfo](https://developer.apple.com/documentation/tvmljs/tverror/1627388-userinfo)

# userInfo

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

The user info dictionary.

## Declaration

```
readonly attribute Object userInfo;
```

<a id="discussion"></a>

## Discussion

If no user info dictionary has been set, this property is `null`. See [User Info Dictionary Keys](user_info_dictionary_keys.md) for a list of keys.

## See Also

### Getting Error Properties

- [code](1627334-code.md): The error code.
- [description](1627424-description.md): A string containing the description of the error.
- [domain](1627426-domain.md): A string containing the error domain.
