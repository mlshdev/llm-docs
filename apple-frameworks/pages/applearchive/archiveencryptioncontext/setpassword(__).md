> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveencryptioncontext/setpassword(_:)](https://developer.apple.com/documentation/applearchive/archiveencryptioncontext/setpassword(_:))

# setPassword(\_:)

**Framework:** Apple Archive  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Sets the password from the supplied string.

## Declaration

```swift
func setPassword(_ password: String) throws
```

## Parameters

- `password`: The password.

<a id="Discussion"></a>

## Discussion

Use this function to encrypt or decrypt an archive with the [scrypt](encryptionmode-swift.struct/scrypt.md) encryption mode.

## See Also

### Setting a password

- [password](password.md): The password used to encrypt or decrypt an archive.
- [generatePassword()](generatepassword%28%29.md): Generates a new password.
