> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/stalenfsfilehandle](https://developer.apple.com/documentation/system/errno/stalenfsfilehandle)

# staleNFSFileHandle

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Stale NFS file handle.

## Declaration

```swift
static var staleNFSFileHandle: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

You attempted access an open file on an NFS file system, which is now unavailable as referenced by the given file descriptor. This may indicate that the file was deleted on the NFS server or that some other catastrophic event occurred.

The corresponding C error is `ESTALE`.

## See Also

### NFS Errors

- [authenticationError](authenticationerror.md): Authentication error.
- [needAuthenticator](needauthenticator.md): Need authenticator.
