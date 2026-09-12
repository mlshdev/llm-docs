> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/authenticationerror](https://developer.apple.com/documentation/system/errno/authenticationerror)

# authenticationError

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Authentication error.

## Declaration

```swift
static var authenticationError: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

The authentication ticket used to mount an NFS file system was invalid.

The corresponding C error is `EAUTH`.

## See Also

### NFS Errors

- [needAuthenticator](needauthenticator.md): Need authenticator.
- [staleNFSFileHandle](stalenfsfilehandle.md): Stale NFS file handle.
