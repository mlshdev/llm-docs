> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/signinwithapplejs/useri/name](https://developer.apple.com/documentation/signinwithapplejs/useri/name)

# name

**Interface language:** Data

**Framework:** Sign in with Apple JS  
**Kind:** Instance Property  
**Availability:** Sign in with Apple JS 1.4.1+

The user’s full name from their Apple Account or a user-submitted value provided from the Sign in with Apple UI.

## Declaration

```
attribute NameI name;
```

<a id="Discussion"></a>

## Discussion

Apple doesn’t receive the user’s full name shared with the system UI. The raw data is passed directly to your app from the browser and is not included in the user’s identity token. For more information, visit [Authenticating users with Sign in with Apple](https://developer.apple.com/documentation/signinwithapple/authenticating-users-with-sign-in-with-apple).

> **Tip**

>  To help prevent cross-site scripting attacks, validate and sanitize the user-submitted first and last name values before storing on your app servers.

## See Also

### Identifying the user by email address

- [email](email.md): The user’s email address.
