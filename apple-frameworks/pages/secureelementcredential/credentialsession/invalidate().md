> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/secureelementcredential/credentialsession/invalidate()](https://developer.apple.com/documentation/secureelementcredential/credentialsession/invalidate())

# invalidate()

**Framework:** SecureElementCredential  
**Kind:** Instance Method  
**Availability:** iOS 18.1+ · iPadOS 18.1+

Inmediately invalidates a session.

## Declaration

```swift
func invalidate() async throws
```

<a id="discussion"></a>

## Discussion

Call this method when your app no longer needs a credential session. The system automatically invalidates a session when it deallocates, or when it encounters underlying errors.

When a session invalidates, its event stream also invalidates and deallocates.

You can invalidate a session while in any session state.

## See Also

### Managing the credential session life cycle

- [startSession()](startsession%28%29.md): Requests a session to view, manage, or use credentials in the Secure Element.
