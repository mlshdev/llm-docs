> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveencryptioncontext/password](https://developer.apple.com/documentation/applearchive/archiveencryptioncontext/password)

# password

**Framework:** Apple Archive  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

The password used to encrypt or decrypt an archive.

## Declaration

```swift
var password: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Use the [generatePassword()](generatepassword%28%29.md) function to generate random high entropy passwords.

## See Also

### Setting a password

- [generatePassword()](generatepassword%28%29.md): Generates a new password.
- [setPassword(\_:)](setpassword%28__%29.md): Sets the password from the supplied string.
