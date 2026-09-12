> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/signinwithapplejs/useri/email](https://developer.apple.com/documentation/signinwithapplejs/useri/email)

# email

**Interface language:** Data

**Framework:** Sign in with Apple JS  
**Kind:** Instance Property  
**Availability:** Sign in with Apple JS 1.4.1+

The user’s email address.

## Declaration

```
attribute string email;
```

<a id="Discussion"></a>

## Discussion

Validate and persist this information from your app to your server. Subsequent authorization requests do not contain the user object, however, the user’s email is provided in the identity token for all requests. For more information, visit [Authenticating users with Sign in with Apple](https://developer.apple.com/documentation/signinwithapple/authenticating-users-with-sign-in-with-apple).

## See Also

### Identifying the user by email address

- [name](name.md): The user’s full name from their Apple Account or a user-submitted value provided from the Sign in with Apple UI.
