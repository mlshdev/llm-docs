> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationresult](https://developer.apple.com/documentation/security/authorizationresult)

# AuthorizationResult

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The permissible values for an authorization evaluation result.

## Declaration

```objectivec
enum AuthorizationResult : UInt32;
```

## Topics

### Constants

- [kAuthorizationResultAllow](authorizationresult/kauthorizationresultallow.md): The authorization operation succeeded and authorization should be granted.
- [kAuthorizationResultDeny](authorizationresult/kauthorizationresultdeny.md): The authorization operation succeeded and authorization should be denied.
- [kAuthorizationResultUndefined](authorizationresult/kauthorizationresultundefined.md): The authorization operation failed and should not be retried for this session.
- [kAuthorizationResultUserCanceled](authorizationresult/kauthorizationresultusercanceled.md): The user has requested that the authorization evaluation be terminated.
