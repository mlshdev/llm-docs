> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokendelegate/token(_:terminatesession:)](https://developer.apple.com/documentation/cryptotokenkit/tktokendelegate/token(_:terminatesession:))

# token(\_:terminateSession:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate to terminate the specified token session.

## Declaration

```swift
optional func token(_ token: TKToken, terminateSession session: TKTokenSession)
```

## Parameters

- `token`: The token.
- `session`: The token session to be terminated.

## See Also

### Delegate Methods

- [createSession(\_:)](createsession%28__%29.md): Tells the delegate to create a session for the specified token.

# token:terminateSession: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate to terminate the specified token session.

## Declaration

```objectivec
- (void) token:(TKToken *) token terminateSession:(TKTokenSession *) session;
```

## Parameters

- `token`: The token.
- `session`: The token session to be terminated.

## See Also

### Delegate Methods

- [token:createSessionWithError:](createsession%28__%29.md): Tells the delegate to create a session for the specified token.
