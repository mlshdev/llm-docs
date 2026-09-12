> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/nserror/2897822-userinfo](https://developer.apple.com/documentation/tvmljs/nserror/2897822-userinfo)

# userInfo

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 11.0+

The user info dictionary.

## Declaration

```
readonly attribute Object userInfo;
```

<a id="discussion"></a>

## Discussion

If the user info dictionary has not been set, this property is `nil`.

## See Also

### Getting Error Properties

- [code](2897820-code.md): The error code.
- [domain](2897831-domain.md): A string containing the error domain.
- [underlyingError](2897821-underlyingerror.md): The error that was encountered in an underlying implementation and caused the error that the receiver represents to occur.
