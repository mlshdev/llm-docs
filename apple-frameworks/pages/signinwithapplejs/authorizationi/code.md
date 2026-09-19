> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/signinwithapplejs/authorizationi/code

# code

**Interface language:** Data

**Framework:** Sign in with Apple JS  
**Kind:** Instance Property  
**Availability:** Sign in with Apple JS 1.4.1+

A single-use authorization code.

## Declaration

```
attribute string code;
```

<a id="Discussion"></a>

## Discussion

The code is valid for five minutes.

## See Also

### Setting up authorization

- [id_token](id_token.md): A JSON web token containing the user’s identify information.
- [state](state.md): The state passed at initialization time.
