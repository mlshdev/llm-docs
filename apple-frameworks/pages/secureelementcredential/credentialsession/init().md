> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/secureelementcredential/credentialsession/init()

# init()

**Framework:** SecureElementCredential  
**Kind:** Initializer  
**Availability:** iOS 18.1+ · iPadOS 18.1+

Creates an empty credential session.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

Don’t use this initializer to create a session. Use [startSession()](startsession%28%29.md) to request and start a session.
