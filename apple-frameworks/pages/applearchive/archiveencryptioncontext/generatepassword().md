> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveencryptioncontext/generatepassword()](https://developer.apple.com/documentation/applearchive/archiveencryptioncontext/generatepassword())

# generatePassword()

**Framework:** Apple Archive  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Generates a new password.

## Declaration

```swift
func generatePassword() throws -> String
```

<a id="return-value"></a>

## Return Value

The new password.

<a id="Discussion"></a>

## Discussion

This function generates a new high entropy password, stores it in the context, and returns it.

## See Also

### Setting a password

- [password](password.md): The password used to encrypt or decrypt an archive.
- [setPassword(\_:)](setpassword%28__%29.md): Sets the password from the supplied string.
