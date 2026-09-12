> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sessiongetinfo(_:_:_:)](https://developer.apple.com/documentation/security/sessiongetinfo(_:_:_:))

# SessionGetInfo(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Obtains information about a security session.

## Declaration

```swift
func SessionGetInfo(_ session: SecuritySessionId, _ sessionId: UnsafeMutablePointer<SecuritySessionId>?, _ attributes: UnsafeMutablePointer<SessionAttributeBits>?) -> OSStatus
```

## Parameters

- `session`: The session you are asking about. You can use one of the special sessions given in [Session ID Values](session-id-values.md), for example to ask about your own session.
- `sessionId`: A pointer to a [SecuritySessionId](securitysessionid.md) value that the function populates with the actual session ID for the session you asked about. This value will not be one of the special values from [Session ID Values](session-id-values.md), but will instead be an actual session ID.
- `attributes`: A pointer to a [SessionAttributeBits](sessionattributebits.md) structure that the function fills with the attribute bits for the session.

<a id="return-value"></a>

## Return Value

A result code. See [Sessions API Result Codes](sessions-api-result-codes.md).

<a id="Discussion"></a>

## Discussion

You can ask about any session whose identifier you know. Use the [callerSecuritySession](callersecuritysession.md) constant to ask about your own session (the one your process is in).

# SessionGetInfo (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Obtains information about a security session.

## Declaration

```objectivec
OSStatus SessionGetInfo(SecuritySessionId session, SecuritySessionId *sessionId, SessionAttributeBits *attributes);
```

## Parameters

- `session`: The session you are asking about. You can use one of the special sessions given in [Session ID Values](session-id-values.md), for example to ask about your own session.
- `sessionId`: A pointer to a [SecuritySessionId](securitysessionid.md) value that the function populates with the actual session ID for the session you asked about. This value will not be one of the special values from [Session ID Values](session-id-values.md), but will instead be an actual session ID.
- `attributes`: A pointer to a [SessionAttributeBits](sessionattributebits.md) structure that the function fills with the attribute bits for the session.

<a id="return-value"></a>

## Return Value

A result code. See [Sessions API Result Codes](sessions-api-result-codes.md).

<a id="Discussion"></a>

## Discussion

You can ask about any session whose identifier you know. Use the [callerSecuritySession](callersecuritysession.md) constant to ask about your own session (the one your process is in).
