> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/session-id-values](https://developer.apple.com/documentation/security/session-id-values)

# Session ID Values (Swift)

**Framework:** Security  
**Kind:** API Collection

Use these values as placeholders for specific sessions.

<a id="Discussion"></a>

## Discussion

You can use these values as the `session` input to the [SessionGetInfo(\_:\_:\_:)](sessiongetinfo%28______%29.md) function as a stand-in for specific sessions when you don’t already know the ID for that session. They are *not* returned in the `sessionId` output of that function. Instead, you receive the actual session ID.

## Topics

### Constants

- [callerSecuritySession](callersecuritysession.md): A value that is a placeholder for the caller’s session.
- [noSecuritySession](nosecuritysession.md): Not a valid session.

# Session ID Values (Objective-C)

**Framework:** Security  
**Kind:** API Collection

Use these values as placeholders for specific sessions.

<a id="Discussion"></a>

## Discussion

You can use these values as the `session` input to the [SessionGetInfo](sessiongetinfo%28______%29.md) function as a stand-in for specific sessions when you don’t already know the ID for that session. They are *not* returned in the `sessionId` output of that function. Instead, you receive the actual session ID.

## Topics

### Constants

- [callerSecuritySession](callersecuritysession.md): A value that is a placeholder for the caller’s session.
- [noSecuritySession](nosecuritysession.md): Not a valid session.
