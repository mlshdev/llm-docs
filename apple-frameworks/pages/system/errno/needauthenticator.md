> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/errno/needauthenticator](https://developer.apple.com/documentation/system/errno/needauthenticator)

# needAuthenticator

**Framework:** System  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Need authenticator.

## Declaration

```swift
static var needAuthenticator: Errno { get }
```

## Mentioned In

- [Adopting Swift Error Constants](../adopting-errno.md)

<a id="discussion"></a>

## Discussion

Before mounting the given NFS file system, you must obtain an authentication ticket.

The corresponding C error is `ENEEDAUTH`.

## See Also

### NFS Errors

- [authenticationError](authenticationerror.md): Authentication error.
- [staleNFSFileHandle](stalenfsfilehandle.md): Stale NFS file handle.
