> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvmljs/nserror/2897821-underlyingerror

# underlyingError

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 11.0+

The error that was encountered in an underlying implementation and caused the error that the receiver represents to occur.

## Declaration

```
readonly attribute NSError underlyingError;
```

## See Also

### Getting Error Properties

- [code](2897820-code.md): The error code.
- [domain](2897831-domain.md): A string containing the error domain.
- [userInfo](2897822-userinfo.md): The user info dictionary.
