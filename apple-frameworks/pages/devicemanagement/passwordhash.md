> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/passwordhash](https://developer.apple.com/documentation/devicemanagement/passwordhash)

# PasswordHash

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 10.11+

A dictionary that contains the password hash for the account.

## Declaration

```
object PasswordHash
```

## Properties

- `SALTED-SHA512-PBKDF2` — `PasswordHash.SALTED-SHA512-PBKDF2` (required): A dictionary that contains the `entropy`, `iterations`, and `salt` elements to create the password hash using the CommonCrypto libraries, or equivalent. Convert this dictionary to binary data before setting it as the value for the password hash.

## Topics

### Objects

- [PasswordHash.SALTED-SHA512-PBKDF2](passwordhash/salted-sha512-pbkdf2-data.dictionary.md): A dictionary that contains the elements to create the password hash.

## See Also

### Miscellaneous data formats

- [ManifestURL](manifesturl.md): The URL to the app manifest.
