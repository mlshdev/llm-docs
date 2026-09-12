> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/signinwithapplejs/namei/firstname](https://developer.apple.com/documentation/signinwithapplejs/namei/firstname)

# firstName

**Interface language:** Data

**Framework:** Sign in with Apple JS  
**Kind:** Instance Property  
**Availability:** Sign in with Apple JS 1.4.1+

The user’s first name.

## Declaration

```
attribute string firstName;
```

<a id="Discussion"></a>

## Discussion

Apple doesn’t receive the user’s full name shared with the system UI. The raw data is passed directly to your app from the browser and is not included in the user’s identity token. To help prevent cross-site scripting attacks, validate and sanitize the user-submitted first and last name values before storing on your app servers.

## See Also

### Identifying the user by name

- [lastName](lastname.md): The user’s last name.
